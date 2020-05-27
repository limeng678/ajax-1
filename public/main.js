
//1.不用link标签，用AJAX加载CSS
getCSS.onclick =()=>{

    const request =new XMLHttpRequest();
    request.open("GET","/style.css");//readyState=1
    request.onreadystatechange=()=>{
        //下载完成，但不知道是成功（2xx）还是失败4xx 5xx
        if(request.readyState===4){
            if(request.status>=200&&request.status<300){
                const style=document.createElement('style')//创建style标签
                style.innerHTML=request.response //填写style内容
                document.head.appendChild(style)//插到头里面

            }else{
                alert('加载CSS失败')
            }
        }
    };
    
    request.send();//readyState=2
}

    
        
  
//2.不用<script>标签，用AJAX加载js
getJS.onclick=()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/2.js')
    request.onload=()=>{
        console.log(request.response)
        const script=document.createElement('script')
        script.innerHTML=request.response
        document.body.appendChild(script)
    }
    request.onerror=()=>{}
    request.send()
}
//3.加载HTML(可以满足用户想请求什么展示什么)
getHTML.onclick = ()=>{
     const request=new XMLHttpRequest()
     request.open('GET','/3.html')
     request.onload=()=>{
         const div=document.createElement('div')
         div.innerHTML=request.response
         document.body.appendChild(div)
     }
     request.onerror=()=>{}
     request.send()
}

//4.加载XML
getXML.onclick=()=>{
    const request=new XMLHttpRequest();
    request.open("GET","/4.xml");
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
            const dom =request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    }
    request.send()
}
//5.加载json
getJSON.onclick=()=>{
    const request=new XMLHttpRequest();
    request.open("get","/5.json")
    request.onreadystatechange=()=>{
        if(request.readyState===4&&request.status===200){
            const object=JSON.parse(request.response)
            myName.textContent=object.name
        }
    }
    request.send()
}
//加载分页
let n=1;
getPage.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET',`/page${n+1}`)
    request.onreadystatechange = ()=>{
        if(request.readyState===4&&request.status===200){
            const array = JSON.parse(request.response);//json字符串变成数组
            array.forEach(item=>{
                const li =document.createElement("li");
                li.textContent=item.id;
                xxx.appendChild(li)
            })
            n+=1;
        }
    }
    request.send()
}