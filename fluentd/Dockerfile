# fluentd/Dockerfile

FROM fluent/fluentd:edge-debian-amd64
USER root
RUN ["fluent-gem", "install", "fluent-plugin-prometheus"]
USER fluent