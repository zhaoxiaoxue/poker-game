window.onload=function(){

    //在页面中用定位创建28个元素，放在一个div中

    var show=document.getElementById('show');
    var block;
    guan.onclick=function(){
        kai.style.display='none';
        show.style.display='block';
        anniu.style.display='block';
    }
    anniu.onclick=function(){
        location.reload();
        kai.style.display='none';
        show.style.display='block';
        anniu.style.display='block';
    };

    var fn=function(){

        for(var i=0;i<7;i++){
            for(var j=0;j<i+1;j++){
                block=document.createElement('div');
                block.setAttribute('class','block wzoomIn');
                block.setAttribute('id',i+'_'+j);
                block.style.top=i*26+'px';
                block.style.left=(6-i)*160/2+j*160+'px';
                show.appendChild(block);                  
            }
        }
        var blockb,blockd='blockd';
        blockb=document.createElement('div');
        blockb.setAttribute('id','blockb');
        blockb.style.top=440+'px';
        blockb.style.left=280+'px';
        show.appendChild(blockb);           
            
        for(var i=0;i<24;i++){
            block=document.createElement('div');
            block.setAttribute('class','block wzoomIn'+' '+blockd);
            block.setAttribute('id','8'+'_'+i);
            blockb.appendChild(block);           
        }
        var blockc;
        blockc=document.createElement('div');
        blockc.setAttribute('id','blockc');
        blockc.style.top=440+'px';
        blockc.style.left=610+'px';
        // blockc.style.backgroundImage='url(./images/bas3.jpg)';
        show.appendChild(blockc);
    };
    fn();
    //事件委托
    var els=document.getElementsByClassName('block');

    var first='',second='',el1;
    var pervious=null;

    var start=true;

    show.onclick=function(e){
        var el=e.target;
        if(el==this)return;
                
        var id=el.getAttribute('id');
        var x=Number(id.split('_')[0]);
        var y=Number(id.split('_')[1]);

        var nx=document.getElementById((x+1)+'_'+y);
        var ny=document.getElementById((x+1)+'_'+(y+1)); 

        if(nx||ny)return;
        
        if(pervious!=null){
            pervious.style.webkitTransform='scale(1)';            
        }
        el.style.webkitTransform='scale(1.15)'; 
        pervious=el; 

        if(els.length==0){alert('你赢了！');};

        if(start&&el.innerHTML!=''){

            if(el.innerHTML=='K'){            
                if(el.parentElement==show){show.removeChild(el);}
                if(el.parentElement==blockb){blockb.removeChild(el);}
                if(el.parentElement==blockc){blockc.removeChild(el);}
                return;
            }
            first=Number(el.innerHTML);
            if(el.innerHTML=='A'){first=1;}
            if(el.innerHTML=='Q'){first=12;}
            if(el.innerHTML=='J'){first=11;} 
            second=0;       
            el1=el;
            start=false; 
        }else{
            if(el.innerHTML=='K'){            
                if(el.parentElement==show){show.removeChild(el);}
                if(el.parentElement==blockb){blockb.removeChild(el);}
                if(el.parentElement==blockc){blockc.removeChild(el);}
                return;
            }
            second=Number(el.innerHTML);
            if(el.innerHTML=='A'){second=1;}
            if(el.innerHTML=='Q'){second=12;}
            if(el.innerHTML=='J'){second=11;}            
            start=true;           
        }
        if(first+second==13){
            console.log(first+second);
            if(el1.parentElement==show){show.removeChild(el1);}
            if(el1.parentElement==blockb){blockb.removeChild(el1);}
            if(el1.parentElement==blockc){blockc.removeChild(el1);}

            if(el.parentElement==show){show.removeChild(el);}
            if(el.parentElement==blockb){blockb.removeChild(el);}
            if(el.parentElement==blockc){blockc.removeChild(el);}
            return;
        }


    };

    var dict={1:'A',2:'2',3:'3',4:'4',5:'5',6:'6',
    7:'7',8:'8',9:'9',10:'10',11:'J',12:'Q',13:'K'};
    //生成一个随即数组 长度为13 1~13
    //遍历这个数组 输出它

    var arr=[];
    var fn1=function(){
        for(var i=0;i<13;i++){
            arr.push(Math.floor(Math.random()*13+1));
        }
        for(var j=0;j<arr.length;j++){
            dict[arr[j]];
        }
    };
    fn1();

    //写一个函数 生成一副错序的扑克牌

    var arr1=['rd','bk','fk','mh'];    

    var fn2=function(){
        var poker=[],hs,nu;
        var zidian={};

        while(poker.length!=52){
            for(var i=0;i<52;i++){
                hs=arr1[Math.floor(Math.random()*4)];
                nu=dict[Math.floor(Math.random()*13+1)];
                var pai={huase:hs,number:nu};
                if(!zidian[hs+nu]){
                    poker.push(pai);
                    zidian[hs+nu]=true;
                }                    
            }  
        }        
        return poker;
    };

    var poker=fn2();    

    for(var i=0;i<els.length;i++){
        els[i].innerHTML=poker[i].number;
        var pokerp=poker[i].huase+poker[i].number;
        els[i].style.backgroundImage='url(./images/'+pokerp+'.jpg)';
    }
    
    //--------------------------------

    var btn1=document.createElement('div');
    btn1.setAttribute('class','btn');
    btn1.setAttribute('id','btn1');
    btn1.style.top=430+'px';
    btn1.innerHTML='RIGHT';
    btn1.style.backgroundImage='url(./images/bas1.jpg)';
    show.appendChild(btn1);

    var btn2=document.createElement('div');
    btn2.setAttribute('class','btn');
    btn2.setAttribute('id','btn2');
    btn2.style.top=560+'px';
    btn2.innerHTML='LEFT';
    btn2.style.backgroundImage='url(./images/bas2.jpg)';
    show.appendChild(btn2);
              
    var blockb=document.getElementById('blockb');
    // blockb.style.backgroundImage='url(./images/bas3.jpg)';
    var blockc=document.getElementById('blockc');
    var blockd=document.getElementsByClassName('blockd');
    btn1.onclick=function(){
        if(blockb.lastElementChild!=null){
            blockc.appendChild(blockb.removeChild(blockb.lastElementChild));
        }       
    };
    var index=0;
    btn2.onclick=function(){
        if(blockb.lastElementChild==null){
            index++;
            if(index==3){alert('你输了');location.reload();}
            for(var i=0;i<blockd.length;i++){
               blockb.appendChild(blockc.removeChild(blockc.lastElementChild)); 
            }
            
        }
    };

    show.onmousedown=function(e){
        e.preventDefault();
    }





};