function nav(t){var y='://',t=t.split(y),s=t[0],u=t[1].split('/'),d=[],e=[];for(t=0;t<u.length;)e.push((e[t-1]||s+y)+'/'+u[t]),d.push(u[t++]);return[d,e]}
var D=document.body.insertBefore(document.createElement('hr'),document.body.children[0]),URL=nav(document.URL);
for(var p=0;p<URL[0].length;p++)D.innerHTML+='&gt;&nbsp;<a href="'+URL[1][p]+'">'+URL[0][p]+'</a>&nbsp;';
