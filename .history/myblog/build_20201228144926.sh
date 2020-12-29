# 当前路径 /deploy/data/nginx
# 存放脚本路径 /deploy/data/nginx/shs
# 线上文件 /deploy/data/nginx/pages/
# 代码路径 /deploy/data/nginx/codes/

#blog自动部署

# 删除项目目录下得代码
rm -rf ../codes/blog/*
#切换到代码目录
cd ../codes
# clone 新的代码
git clone https://github.com/GitDjAr/blog.git
# 进入目录  blog 目录名称
cd ../codes/blog
# 安装依赖 --ignore-scripts表示npm将不会运行在package.json中指定的scripts脚本
#npm install --ignore-scripts 
npm install
# 打包 
npm run build
# 删除 ngnix 指向的文件夹下得文件
rm -rf /usr/local/webserver/nginx/codes/blog/*
# 将打包好的文件复制过去
mv /usr/local/webserver/nginx/codes/blog/dist/*  /usr/local/webserver/nginx/html