mkdir /root/.ssh && cd /root/.ssh && echo "一路回车Enter" && ssh-keygen && cp /root/.ssh/id_rsa.pub /root/.ssh/authorized_keys && chmod 700 -R /root/.ssh && chmod 600 /root/.ssh/authorized_keys && mkdir /root/ok && cp /root/.ssh/id_* /root/ok && echo "大爷，任务执行完毕@服务端配置完成！请下载/root/ok目录的公匙id_rsa.pub和私匙id_rsa。"
