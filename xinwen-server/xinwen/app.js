// 1，引入express
global.express = require('express');
// 接收post过来的数据
const bodyParser = require('body-parser');
// 数据库操作模块
const mysql = require('mysql');
// 模板引擎
const ejs = require('ejs');
// 2，创建一个web应用
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');
//引入request模块，用于请求新闻的api
var request = require('request');

//开启cookie
let secret = 'moc.newnix.www';
app.use(cookieParser(secret));

// 开启session
app.use(session({
	secret: secret,
	name: 'sessid1810',
	resave: false,
	saveUninitialized: true,
	cookie: {
		maxAge: 24 * 3600000 * 7
	}
}));

//接收post过来的数据
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json()); //接收json格式的数据

// 连接到数据库
global.mydb = mysql.createConnection({
	user: 'root',
	password: '123',
	host: 'localhost',
	database: 'xinwen',
	port: 3306
});
mydb.connect();

// api、json导入到数据库
// const fs =require("fs");
// const jsonFile = './tushu/.json';//此处为你的json文件
// const jsonObj = JSON.parse(fs.readFileSync(jsonFile));
// 
// (async () => {
//   for (let w of jsonObj.result.data) {
//     try {
//       let addSql = `insert into book(title,catalog,tags,sub1,sub2,img,reading,online,bytime,price,cataid) values(?,?,?,?,?,?,?,?,?,?,?)`;
//       let addSqlParams = [w.title, w.catalog, w.tags,w.sub1,w.sub2,w.img,w.reading,w.online,w.bytime,Math.floor(Math.random()*200+1),258];
//       await insert(addSql, addSqlParams);
//     } catch (error) {
//       console.log(`Error: ${error}`);
//     }
//   }
//   console.log('All completed!');
// })();
// 
// function insert(addSql, addSqlParams) {
//   return new Promise((resolve, reject) => {
//     try {
//       mydb.query(addSql, addSqlParams, function (err, result) {
//         if (err) {
//           console.log('[INSERT ERROR] - ', err.message);
//           reject(err);
//         } else {
//           // console.log('INSERT ID:', result);
//           console.log('INSERT ID:', addSqlParams[0]);
//           resolve();
//         }
//       });
//     } catch (err) {
//       reject(err);
//     }
//   })
// }
// 


//模板引擎设置
app.engine('html', ejs.renderFile); //自定义模板引擎html
app.set('views', 'myviews'); //模板文件所在的路径
app.set('view engine', 'html'); //注册模板引擎到express


//设置允许跨域访问该服务器
app.all('*', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	//Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Methods', '*');
	res.header('Content-Type', 'application/json;charset=utf-8');
	next();
});


// 引入新闻api
// app.get("/test.php",function(req,res){
// 	var testurl="http://192.168.7.192:81/test.php"
// 	request(testurl,function(err,data,body){
// 	   if (!err && response.statusCode == 200) {
//     }
// 		res.send(body)
// 	})
// });
// 


app.get('/',function(req,res){
	res.sendfile(__dirname + '/lssdjt.json')
})
// 历史上的今天api处理
// app.get("/",function(req,res){
// 	var testurl="http://api.juheapi.com/japi/toh"
// 	
// 	request(testurl+"?key=daedbd787eb470b59d1e9d778108b50d"+"&v="+req.query.v+"&month="+req.query.month+"&day="+req.query.day,function(err,data,body){
// 	   if (!err && res.statusCode == 200) {
//     }
// 		res.send(body)
// 	})
// })


//静态资源托管
app.use(express.static(__dirname + '/static'));

//端口监听
app.listen(81, () => {
	console.log('服务器已启动，端口为81');
});
