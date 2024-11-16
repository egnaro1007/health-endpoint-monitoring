import os
import psutil
import subprocess
import time

from dataclasses import dataclass

from sources.base_source import BaseSource
from sources.dataclasses import Price
from requests.exceptions import RequestException


@dataclass
class Status:
    company_code: str
    provider_connection: bool
    parse_data: bool
    endpoint_response: bool

class HealthCheck:
    @staticmethod
    def source_check_status(obj: BaseSource) -> Status:
        # code = obj.company_code
        # provider_connection = ""
        # parse_data = ""
        # data_response = ""

        # try:
        #     price = obj.get_price()
        #     if price is None or not isinstance(price, Price):
        #         data_response = "Error when fetching Data"
        #     else:
        #         data_response = JSONResponse(price).body
        # except RequestException:
        #     provider_connection = "Failed to connect, please re-check the config"
        #     # parse_data = False
        # except ValueError:
        #     parse_data = "Data is not in valid format"

        # return Status(code, provider_connection, parse_data, data_response)
        code = obj.company_code
        provider_connection = True
        parse_data = True
        data_response = True

        try:
            price = obj.get_price()
            if price is None or not isinstance(price, Price):
                data_response = False
        except RequestException:
            provider_connection = False
            parse_data = False
        except ValueError:
            parse_data = False

        return Status(code, provider_connection, parse_data, data_response)
    
    @staticmethod
    def get_kernel_info():
        return {
            "kernel_version": os.uname().release,
            "system_name": os.uname().sysname,
            "node_name": os.uname().nodename,
            "machine": os.uname().machine
        }

    @staticmethod
    def get_memory_info():
        return {
            "total_memory": psutil.virtual_memory().total / (1024.0 ** 3),
            "available_memory": psutil.virtual_memory().available / (1024.0 ** 3),
            "used_memory": psutil.virtual_memory().used / (1024.0 ** 3),
            "memory_percentage": psutil.virtual_memory().percent
        }

    @staticmethod
    def get_cpu_info():
        return {
            "physical_cores": psutil.cpu_count(logical=False),
            "total_cores": psutil.cpu_count(logical=True),
            "processor_speed": psutil.cpu_freq().current,
            "cpu_usage_per_core": dict(enumerate(psutil.cpu_percent(percpu=True, interval=1))),
            "total_cpu_usage": psutil.cpu_percent(interval=1)
        }

    @staticmethod
    def get_disk_info():
        disk_info = {}
        partitions = psutil.disk_partitions()
        disk_io_counters = psutil.disk_io_counters()
        disk_info["total_read"] = disk_io_counters.read_bytes / (1024 ** 3)
        disk_info["total_write"] = disk_io_counters.write_bytes / (1024 ** 3)
        for partition in partitions:
            partition_usage = psutil.disk_usage(partition.mountpoint)
            disk_info[partition.mountpoint] = {
                "total_space": partition_usage.total / (1024.0 ** 3),
                "used_space": partition_usage.used / (1024.0 ** 3),
                "free_space": partition_usage.free / (1024.0 ** 3),
                "usage_percentage": partition_usage.percent
            }
        return disk_info

    @staticmethod
    def get_network_info():
        net_io_counters = psutil.net_io_counters()
        # net_if_stats = psutil.net_if_stats()
        # net_if_addr = psutil.net_if_addrs()

        return {
            # "address": net_if_addr.,
            "bytes_sent": net_io_counters.bytes_sent,
            "bytes_receive": net_io_counters.bytes_recv,
            "packets_sent": net_io_counters.packets_sent,
            "packets_receive": net_io_counters.packets_recv,
        }

    @staticmethod
    def get_process_info():
        process_info = []
        for process in psutil.process_iter(['pid', 'name', 'memory_percent', 'cpu_percent']):
            try:
                process_info.append({
                    "pid": process.info['pid'],
                    "name": process.info['name'],
                    "memory_percent": process.info['memory_percent'],
                    "cpu_percent": process.info['cpu_percent']
                })
            except (psutil.NoSuchProcess, psutil.AccessDenied, psutil.ZombieProcess):
                pass
        return process_info

    @staticmethod
    def get_load_average():
        load_avg_1, load_avg_5, load_avg_15 = psutil.getloadavg()
        return {
            "load_average_1": load_avg_1,
            "load_average_5": load_avg_5,
            "load_average_15": load_avg_15
        }
        
    @staticmethod
    def get_disk_io_counters():
        io_counters = psutil.disk_io_counters()
        return {
            "read_count": io_counters.read_count,
            "write_count": io_counters.write_count,
            "read_bytes": io_counters.read_bytes,
            "write_bytes": io_counters.write_bytes,
            "read_time": io_counters.read_time,
            "write_time": io_counters.write_time
        }
        
    @staticmethod
    def get_net_io_counters():
        io_counters = psutil.net_io_counters()
        return {
            "bytes_sent": io_counters.bytes_sent,
            "bytes_recv": io_counters.bytes_recv,
            "packets_sent": io_counters.packets_sent,
            "packets_recv": io_counters.packets_recv,
            "errin": io_counters.errin,
            "errout": io_counters.errout,
            "dropin": io_counters.dropin,
            "dropout": io_counters.dropout
        }

    @staticmethod
    def get_system_uptime():
        boot_time_timestamp = psutil.boot_time()
        current_time_timestamp = time.time()
        uptime_seconds = current_time_timestamp - boot_time_timestamp
        uptime_minutes = uptime_seconds // 60
        uptime_hours = uptime_minutes // 60
        uptime_days = uptime_hours // 24
        uptime_str = f"{int(uptime_days)} days, {int(uptime_hours % 24)} hours, {int(uptime_minutes % 60)} minutes, {int(uptime_seconds % 60)} seconds"
        return {"uptime": uptime_str}
