async function foo(){
    var res=await fetch("https://api.breakingbadquotes.xyz/v1/quotes/5");
    var resdata=await res.json();
    
    console.log(resdata)

    var div=document.createElement("div");
    div.className="main"
    div.innerHTML=`<div class="card border-primary mb-3 main1">
    <div class="card-header">Breaking-Bad Quotes</div>
    <div class="card-body text-primary">
      
      <p class="card-text"><b>Author:</b>${resdata[3].author}</p>
      <p class="card-text"><b>Quote:</b>${resdata[3].quote}</p>
      
    </div>`

    document.body.append(div);
}


foo()
