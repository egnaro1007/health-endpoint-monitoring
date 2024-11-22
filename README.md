# Health Endpoint Monitoring

A project using Health Endpoint Monitoring (HEM) pattern to monitor 2 container Docker, one containing 1 API endpoint that updates gold prices in Vietnam, 
the other one containing 1 API endpoint that updates foreign exchange rate against VND.

## Description

This monitoring system uses Docker to deploy containers, with each container performing a specific task. This approach increases flexibility and 
reduces the risk of service failure. Monitoring endpoints are exposed for administrators to easily track system health.

The system checks the "health" of containers externally using services like Cadvisor, Node Exporter, and Docker Engine, which provide system 
resource data. These metrics are collected by Prometheus, which also triggers alerts when thresholds are exceeded. Data is visualized through Grafana.

NGINX functions as a reverse proxy, routing traffic to endpoints and gathering metrics related to connections and errors. NGINX logs are processed 
by Fluentd for monitoring insights. PostgreSQL is used to store historical gold prices and exchange rates, while the frontend (NextJS) displays 
this data on dashboards.

## Installation

### 1. Windows

Stay tuned for new updates (。・・)ノ

### 2. Mac OS

Stay tuned for new updates (。・・)ノ

### 3. Linux

Stay tuned for new updates (。・・)ノ

## Credits

This project is coded by [Egnaro](https://github.com/egnaro1007), [Chi Trung](https://github.com/chitrung-gg) and [Trang Vuong](https://github.com/TrangVuong2810)

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

This is a non-commercial project 

## Support

Feel free to contact the author for support

🌟 GitHub: [egnaro1007](https://github.com/egnaro1007)

🌟 GitHub: [chitrung-gg](https://github.com/chitrung-gg)

🌟 GitHub: [TrangVuong2810](https://github.com/TrangVuong2810)
