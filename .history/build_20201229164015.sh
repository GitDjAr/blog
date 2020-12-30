#脚本所在目录 /usr/local/webserver/nginx/shs
#blog自动部署

# 删除项目目录下得代码
rm -rf ../codes/blog/*

# 监听github ssh
#切换到代码目录
cd ../codes

if [ ! -d "go-home" ]; then
  git clone https://github.com/GitDjAr/blog.git
fi

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