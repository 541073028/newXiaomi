//banner
	{
		const imgs=document.querySelectorAll(".imgbox li");   //不会被修改，常量
		let pagers=document.querySelectorAll(".pagebox li");
		let banner=document.querySelector("#banner");   //设置banner，鼠标放上去，停止播放，鼠标移开开始播放。
		let banner_lbtn=document.querySelector(".banner_lbtn"); 
		let banner_rbtn=document.querySelector(".banner_rbtn"); 

		pagers.forEach(function(ele,index){    //形参，遍历数。
			ele.onclick=function(){
				for(let i=0;i<imgs.length;i++){
					imgs[i].classList.remove("active");
					pagers[i].classList.remove("active");   //移除active
				}
				this.classList.add("active");
				imgs[index].classList.add("active");    //添加active
				n=index;     //n从当前位子自加。
			}
		})

		// BOM_window.setInterval();//让代码自动执行   自动轮播
		let n=0;     //访问n，自加
		let t=setInterval(move,3000)

		function move(){
			n++;
			//n超范围判断
			// n=n%5;
			if(n===imgs.length){
				n=0;    //赋值
			}
			//左按钮，点到第一张时跳转到第五章
			if(n<0){
				n=imgs.length-1;
			}
			for(let i=0;i<imgs.length;i++){
					imgs[i].classList.remove("active");
					pagers[i].classList.remove("active");
				}
				imgs[n].classList.add("active");
				pagers[n].classList.add("active");
		}

		banner.onmouseenter=function(){
			clearInterval(t);
		}
		banner.onmouseleave=function(){
						// 	t=setInterval(function(){
						// 	n++;
						// 	// n=n%5;
						// 	if(n===imgs.length){
						// 		n=0;
						// 	}
						// 	for(let i=0;i<imgs.length;i++){
						// 			imgs[i].classList.remove("active");
						// 			pagers[i].classList.remove("active");
						// 		}
						// 		imgs[n].classList.add("active");
						// 		pagers[n].classList.add("active");
						// },3000)
			t=setInterval(move,3000);
		}
		let flag=true;
		banner_rbtn.onclick=function(){
			if(flag){
				flag=false;
				move();
			}
		}
		banner_lbtn.onclick=function(){
			if(flag){
				flag=false;
				n-=2;//n=n-2
				move();
			}
		}
		imgs.forEach(function(ele,index){
			ele.addEventListener("transitionend",function(){
				flag=true;
			})
		})
	}

//闪购--小米单品
	{
		const prve=document.querySelector(".buy-prev");
		const next=document.querySelector(".buy-next");
		const inner=document.querySelector(".buy_inner");
		let n=0;//n代表往左移动几贫
		next.onclick=function(){
			n++;
			prve.classList.remove("disable");
			if(n===2){
				this.classList.add("disable");
			}
			if(n===3){
				n=2;
				return;
			}
			inner.style.marginLeft=-992*n+"px";
		}
		prve.onclick=function(){
			n--;
			next.classList.remove("disable");
			if(n===0){
				prve.classList.add("disable");
			}
			if(n===-1){
				n=0;
				return;
			}
			inner.style.marginLeft=-992*n+"px";
		}
	}

//封装
	{
		function dapei(parent){
			const types=parent.querySelectorAll(".dapei_right span"); 
			const goods=parent.querySelectorAll(".dapei_goodlist"); 
			types.forEach(function(ele,index){
				ele.onmouseenter=function(){
					for(let i=0;i<types.length;i++){
						types[i].classList.remove("achive");
						goods[i].classList.remove("achive");
					}
					this.classList.add("achive");
					goods[index].classList.add("achive"); 
				}
			})
		}
		const contentlist=document.querySelectorAll(".dapei");
		// content(contentlist[0]);
		contentlist.forEach(function(ele){
			dapei(ele);
		})
	}

//推荐
	{
		function tuijie(parent){
			const prve=parent.querySelector(".buy-prev");
			const next=parent.querySelector(".buy-next");
			const inner=parent.querySelector(".tuijie_goodlist");
			let n=0;//n代表往左移动几贫
			next.onclick=function(){
				n++;
				prve.classList.remove("disable");
				if(n===2){
					this.classList.add("disable");
				}
				if(n===3){
					n=2;
					return;
				}
				inner.style.marginLeft=-1226*n+"px";
			}
			prve.onclick=function(){
				n--;
				next.classList.remove("disable");
				if(n===0){
					prve.classList.add("disable");
				}
				if(n===-1){
					n=0;
					return;
				}
				inner.style.marginLeft=-1226*n+"px";
			}
		}
		const contentlist=document.querySelectorAll(".tuijie");
		// content(contentlist[0]);
		contentlist.forEach(function(ele){
			tuijie(ele);
		})
	}

//哈利波特
	{
		function wheel(parent){
			let prev=parent.querySelector(".reping_lbtn");
			let next=parent.querySelector(".reping_rbtn");
			let inner=parent.querySelector(".reping_b2");    //da
			let contents=parent.querySelectorAll(".reping_goodlist");   //tu
			let pagers=parent.querySelectorAll(".reping_b25btv");

			let n=0;
			next.onclick=function(){
				n++;
				if(n===contents.length){
					n=contents.length-1;
					return;
				}
				inner.style.marginLeft=n*-296+"px";
				pagers[n].classList.add("active");
				pagers[n-1].classList.remove("active");
			};
			prev.onclick=function(){
				n--;
				if(n<0){
					n=0;
					return;
				}
				inner.style.marginLeft=n*-296+"px";
				pagers[n].classList.add("active");
				pagers[n+1].classList.remove("active");
				obj=pagers[0];
			};
			//点哪个点亮对应的图片
			let obj=pagers[0];     //默认第一张有颜色
			pagers.forEach(function(ele,index){
				ele.onclick=function(){
					obj.classList.remove("active");
					ele.classList.add("active");
					obj=ele;
					inner.style.marginLeft=index*-296+"px";     //图片位移
					n=index;     //统一下标，
				}
			})
		}

		let items=document.querySelectorAll(".reping_item");
		items.forEach(function(ele){
				wheel(ele);
			})
	}

//banner 侧导航
	{
		// function ce(parent){
			let lab=document.querySelectorAll(".banner_nav li");
			let menus=document.querySelectorAll(".piaofu");
			let obj=menus[0];
			lab.forEach(function(ele,index){
				ele.onmouseenter=function(){
					// obj.style.display="none";
					menus[index].style.display="block";
					// obj=menus[index];
				}
				ele.onmouseleave=function(){
					menus[index].style.display="none";
				}
			})
		// let items=document.querySelectorAll(".banner_nav li");
		// items.forEach(function(ele){
		// 	ce(ele);
		// })
	}

//导航栏  下拉效果
	{
		// let nav=document.querySelector(".nav");
		let wenzis=document.querySelector(".nav_wenzi");
		let nav_bottom=document.querySelector(".nav_bottom");
		const goods=document.querySelectorAll(".nav_bottom_goodlist");
		let types=document.querySelectorAll(".nav_wenzi span");

		let obj=goods[0];                   //设置diaplay：none；确保开始不出现。

		wenzis.onmouseenter=function(){
			nav_bottom.style.height="220px";
		}
		wenzis.onmouseleave=function(){
			nav_bottom.style.height="0px";
		}

		types.forEach(function(ele,index){
			ele.onmouseenter=function(){
				for(let i=0;i<types.length;i++){
					// types[i].classList.remove("achive");
					// goods[i].classList.remove("achive");
					obj.style.display="none";
					goods[index].style.display="block";
					obj=goods[index];
				}
				// this.classList.add("achive");
				// goods[index].classList.add("achive");
			}
		})
	}

//小米单品  时间
// 	{
// 		let hourEle=document.querySelector(".hours");
// 		let minuteEle=document.querySelector(".minutes");
// 		let secondEle=document.querySelector(".seconds");
// 		let newT=new Date();
// 		let newTate=newT.getTime();
// 		let targetT=new Date(2018,4,1,0,0,0);
// 		let targetTate=targetT.getTime();
//         setInterval(time,1000);
//         time();
//         function time() {
//             let newT=new Date();
//             let newTate=newT.getTime();
//             let duration=targetTate-newTate;
//             let hours=Math.floor(duration/(1000*60*60));
//             hourEle.innerHTML=hours;
//             let minutes=Math.floor(duration/(1000*60))%60;
//             minuteEle.innerHTML=minutes;
//             let seconds=Math.floor(duration/(1000))%60;
//             secondEle.innerHTML=seconds;
//
//         }
// 	}