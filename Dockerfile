FROM centos/systemd:latest

RUN curl --silent --location https://rpm.nodesource.com/setup_7.x | bash -
RUN yum -y install nodejs nmap-ncat git
RUN git clone https://github.com/masim05/play-docker.git /opt/play-docker

CMD node /opt/play-docker/index.js

EXPOSE 4000