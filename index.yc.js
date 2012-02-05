(function(){var n,h,c,Q,r;(function(){var X=navigator.userAgent,ab=X.match(/iPhone/i)||X.match(/iPad/i),aa=!(!document.getBoxObjectFor&&window.mozInnerScreenX==null),Y=typeof HTMLCanvasElement,Z=(Y=="object"||Y=="function"),W=Z&&(typeof document.createElement("canvas").getContext("2d").fillText=="function");n=(!Z||(W&&!ab))?"Native":"HTML";c=n=="Native";h=Z;Q=!(ab||!Z);r=!aa})();var K,D,g,O,m,o,B,i,z,u,R,U,y,p,V,P,w,v,k,L,C,M,q,F,e,T,J,N,S,E,l,s;var d=2011,b=["#416D9C","#70A35E","#EBB056","#C74243"],I=b.slice(),G={amounti:"Amount (USD)",changeP:"yr/yr Change",budgetP:"% of Budget",gdpP:"% GDP"};window.init=function(){U=$("bc");p=$("bcb");y=$("yearbc");V=$("yearbcb");P=$("trend-type");F=$("back-bar");g=$("debt");B=$("gdp-change");u=$("debt-change");J=$("debt");N=$("inflation");S=$("gdp");E=$("population");e=$("heat");v=$("wrap-legend");k=$("yr2yr");T=$("loading-panel").style;J.addEventListener("change",function(){if(this.checked){$("histogram-canvaswidget").appendChild($("area-canvas"))}else{$("area-canvaswidget").appendChild($("area-canvas"))}},false);N.addEventListener("change",function(){if(this.checked){$("histogram-canvaswidget").appendChild($("area2-canvas"))}else{$("area2-canvaswidget").appendChild($("area2-canvas"))}},false);S.addEventListener("change",function(){if(this.checked){$("histogram-canvaswidget").appendChild($("area3-canvas"))}else{$("area3-canvaswidget").appendChild($("area3-canvas"))}},false);E.addEventListener("change",function(){if(this.checked){$("histogram-canvaswidget").appendChild($("area4-canvas"))}else{$("area4-canvaswidget").appendChild($("area4-canvas"))}},false);F.addEventListener("click",function(){icicle.config.Events.onRightClick();return false},false);e.addEventListener("change",function(){v.style.display=this.checked?"":"none";if(!this.checked){k.innerHTML="";icicle.graph.nodeList.removeData("diffBorder");icicle.plot()}return false},false);new IO.XHR({url:"indicators/indicators.json",onSuccess:function(W){var X=JSON.parse(W);m=X.gdp;O=X.inflation;R=X.population;g=X.debt;i=X.debtpc;z=X.debtgdp;o=X.gdppc;A()}}).send();new IO.XHR({url:"trees/"+d+".json",onSuccess:function(W){K=JSON.parse(W);new IO.XHR({url:"aggregates/group._total.json",onSuccess:function(X){D=JSON.parse(X);a();H()}}).send()}}).send()};function f(W){if(!W){return}var X=[W.name],Y=W.getParents()[0];while(Y){X.push(Y.name);Y=Y.getParents()[0]}p.innerHTML=X[0].length>30?X[0].substr(0,X[0].length/2)+"... ":X[0];X.reverse();U.innerHTML=X.join(" > ")}function x(Z,W,Y){if(Z==0){return"0"}W=W||2;W=Math.pow(10,W);var X=arguments.length==3;if(Z>=1000000000){return(((Z/(1000000000/W))>>0)/W)+(X?Y:"B")}else{if(Z>=1000000){return(((Z/(1000000/W))>>0)/W)+(X?Y:"M")}else{if(Z>=1000){return(((Z/(1000/W))>>0)/W)+(X?Y:"K")}else{return(((Z*W)>>0)/W)+(X?Y:"%")}}}}function A(){var W={injectInto:"area",width:1000,height:130,Margin:{top:0,left:20,right:92,bottom:0},labelOffset:10,showAggregates:false,showLabels:false,type:"stacked:gradient",Label:{type:"Native",size:13,family:"Arial",color:"white"},};q=new $jit.AreaChart(W);g.color=["#C74243"];q.loadJSON(g);W.injectInto="area2";M=new $jit.AreaChart(W);O.color=["#83548B"];M.loadJSON(O);W.injectInto="area3";L=new $jit.AreaChart(W);m.color=["#222"];L.loadJSON(m);W.injectInto="area4";C=new $jit.AreaChart(W);R.color=["#9fd4ff"];C.loadJSON(R)}function H(){barChart=new $jit.BarChart({injectInto:"histogram",animate:true,orientation:"vertical",barsOffset:2,hoveredColor:"#33dddd",Margin:{top:0,left:5,right:5,bottom:0},labelOffset:5,type:"stacked",showAggregates:!window.opera&&function(W,ae,Z){var ad=w=="gdpP",aa=ad?x(ae*10,5,""):x(ae,5);if(aa.indexOf("%")>-1){aa=aa.replace("%","")}var ab=aa.match(/^([0-9]+)\.([0-9]+)(.*)$/),ac=aa.match(/^([0-9]+)(.*)$/),Y=3,X="000",af;if(ab){if(Y>ab[1].length){if(+ab[1]==0){af="."+ab[2].substr(0,Y-ab[1].length+ad&&4||1)}else{af=ab[1]+"."+ab[2].substr(0,Y-ab[1].length)+ab[3]}}else{af=ab[1]+ab[3]}}else{if(Y>ac[1].length){if(+ac[1]==0){af="."+X.substr(0,Y-ac[1].length+ad&&4||1)}else{af=ac[1]+"."+X.substr(0,Y-ac[1].length)+ac[2]}}else{af=ac[1]+ac[2]}}return af},showLabels:true,Label:{type:n,size:12,family:"Crimson Text",color:"#000"},Events:{enable:true,onClick:function(W){if(!W){return}if(e.checked){k.innerHTML=d+" - "+W.label}d=+W.label;y.innerHTML=V.innerHTML=d;T.display="block";new IO.XHR({url:"trees/"+d+".json",onSuccess:function(Y){K=JSON.parse(Y);T.display="none";if(!e.checked){icicle.op.morph(K,{type:"fade:con",duration:1000},{position:"linear","node-property":["width","height"]});return}var ab=icicle.clickedNode&&$jit.json.getSubtree(K,icicle.clickedNode.id)||K,ac=ab.data.$dim,aa=icicle.graph,Z=icicle.clickedNode||aa.getNode(K.id),X=Z.data.$dim;$jit.json.each(ab,function(af){delete af.data.$color;var ad=aa.getNode(af.id);if(ad){var ae=af.data.$dim-ad.data.$dim;if(ae<0){ad.setData("color","#f00","end");ad.setData("diffBorder","#f00")}else{if(ae>0){ad.setData("color","#0f0","end");ad.setData("diffBorder","#0f0")}else{ad.setData("color","#ccc","end");ad.removeData("diffBorder")}}}else{af.data.$color="#0f0";af.data.$diffBorder="#0f0"}});icicle.fx.animate({modes:{"node-property":"color"},duration:400,onComplete:function(){icicle.op.morph(K,{type:"fade:con",duration:1000,onComplete:function(){aa.eachNode(function(ad){ad.setData("color",b[ad._depth],"end")});icicle.fx.animate({modes:{"node-property":"color"},duration:1000})}},{position:"linear","node-property":["width","height"]})}})}}).send();t()}},Tips:{enable:true,offsetX:30,offsetY:-10,onShow:function(Y,X){Y.style.visibility="visible";var W=[];W.push((X.name=="_total"?"<b>Total budget</b>":"<b>"+X.name+"</b>")+": "+x(X.value));if(J.checked&&g.values[+X.label-1985]){W.push("<b>Debt: </b>"+x((s||g).values[+X.label-1985].values))}if(S.checked&&m.values[+X.label-1985]){W.push("<b>GDP: </b>"+x((l||m).values[+X.label-1985].values))}if(N.checked&&O.values[+X.label-1985]){W.push("<b>Inflation: </b>"+x(O.values[+X.label-1985].values))}if(E.checked&&R.values[+X.label-1985]){W.push("<b>Population Change: </b>"+x(R.values[+X.label-1985].values))}Y.innerHTML='<div class="tip-title">'+X.label+'</div><div class="tip-text"><ul><li>'+W.join("</li><li>")+"</li></ul></div>"}}});barChart.loadJSON(D);t();y.innerHTML=V.innerHTML=d;P.addEventListener("change",function(){w=["amounti","perCapitaI","gdpP"][P.selectedIndex];D.values.forEach(function(W){W.values=W[w]});barChart.updateJSON(D);switch(P.selectedIndex){case 0:l=m;s=g;L.updateJSON(m);q.updateJSON(g);B.innerHTML=u.innerHTML="USD";break;case 1:l=o;s=i;L.updateJSON(o);q.updateJSON(i);B.innerHTML=u.innerHTML="USD per capita";break;case 2:l=m;s=z;L.updateJSON(m);q.updateJSON(z);B.innerHTML="USD";u.innerHTML="&#8240; of GDP";break}},false)}function j(W,X){if(W){D=JSON.parse(W)}if(w){D.values.forEach(function(Y){Y.values=Y[w]})}barChart.updateJSON(D);t();barChart.st.graph.nodeList.setData("colorArray",[I[X._depth]])}function t(){var W=barChart.st,X=W.graph;if(window.opera){X.eachNode(function(Y){if(Y.name==String(d)){Y.setData("alpha",1)}else{Y.setData("alpha",0.8)}})}else{X.eachNode(function(Y){if(Y.name==String(d)){Y.setData("selected",true)}else{Y.setData("selected",false)}})}W.plot()}function a(){$jit.Icicle.Plot.NodeTypes.implement({"uber-rectangle":{render:function(ab,Z,ak){var aa=this.viz.config;var ad=aa.offset;var Y=ab.getData("width");var ai=ab.getData("height");var ac=ab.getData("border");var X=ab.getData("diffBorder");var ag=ab.pos.getc(true);var af=ag.x+ad/2,ae=ag.y+ad/2;var aj=Z.getCtx();aj.strokeStyle=ab.getData("color");if(Y-ad<0||ai-ad<0){return}aj.fillRect(af,ae,3*Math.max(0,Y-ad)/4,Math.max(0,ai-ad));aj.lineWidth=2;aj.strokeRect(af,ae+2,3*Math.max(0,Y-ad)/4,Math.max(0,ai-ad-4));if(X&&e.checked){aj.strokeStyle=aj.fillStyle=X;aj.lineWidth=3;aj.fillRect(af+3*Math.max(0,Y-ad)/4-3,ae,4,Math.max(0,ai-ad))}if(ab._depth==3||Y-ad<0||ai-ad<0){return}ac&&aj.clearRect(af+3*Y/4,ae,Y/4-1,ai-ad);var ah=0;ab.eachSubnode(function(al){if(ah>ai){return}aj.fillStyle=aj.strokeStyle=al.getData("color");aj.lineWidth=1;aj.beginPath();aj.moveTo(af+3*(Y)/4,ae+(ai-ad)/2);aj.lineTo(af+Y,ae+ah);aj.lineTo(af+Y,ae+ah+Math.max(0,al.getData("height")-ad));aj.lineTo(af+3*(Y)/4,ae+(ai-ad)/2);aj.fill();ah+=Math.max(0,al.getData("height"))});if(ac){aj.strokeStyle=ac;aj.lineWidth=2;aj.strokeRect(ag.x,ag.y,3*Y/4,ai)}},contains:function(Z,ab){if(this.viz.clickedNode&&!$jit.Graph.Util.isDescendantOf(Z,this.viz.clickedNode.id)){return false}var aa=Z.pos.getc(true),Y=Z.getData("width"),X=Z.getData("height");return this.nodeHelper.rectangle.contains({x:aa.x+Y/2,y:aa.y+X/2},ab,Y,X)}}});var W=$("loading");W.parentNode.removeChild(W);icicle=new $jit.Icicle({injectInto:"icicle",animate:Q,offset:0.5,cushion:true,constrained:true,levelsToShow:3,Node:{type:"uber-rectangle"},Tips:{enable:true,type:"Native",offsetX:20,offsetY:20,onShow:function(aa,X){if(!X||!X.getParents().length){aa.style.visibility="hidden";return}aa.style.visibility="visible";var Z=X.data,Y=[];for(var ab in Z){if(ab!="gdpP"&&ab[0]!="$"){if(ab=="changeP"){Y.push("<b>"+G[ab]+": </b>"+(Z[ab]>0?"+":"")+x(Z[ab]))}else{Y.push("<b>"+G[ab]+": </b>"+x(Z[ab]))}}}aa.innerHTML='<div class="tip-title">'+X.name+'</div><div class="tip-text"><ul><li>'+Y.join("</li><li>")+"</li></ul></div>"}},Events:{enable:true,onMouseEnter:function(X){X.setData("border","#33dddd");icicle.fx.plotNode(X,icicle.canvas);icicle.labels.plotLabel(icicle.canvas,X,icicle.controller)},onMouseLeave:function(X){X.removeData("border");icicle.fx.plot()},onClick:function(Y){icicle.tips.hide();if(!Y||Y._depth==3){return}if(Y){if(!icicle.busy){F.className="level"+Y._depth}f(Y);if(icicle.events.hovered){this.onMouseLeave(icicle.events.hovered)}icicle.enter(Y);var X;if(Y._depth){X="aggregates/"+(Y._depth==1?"group.":"subgroup.")+encodeURIComponent(Y.name)+".json"}else{X="aggregates/group._total.json"}new IO.XHR({url:X,onSuccess:function(Z){j(Z,Y)}}).send()}},onRightClick:function(){icicle.tips.hide();if(icicle.events.hovered){this.onMouseLeave(icicle.events.hovered)}if(icicle.clickedNode){if(!icicle.busy){F.className="level"+Math.max(icicle.clickedNode._depth-1,0)}}var X=icicle.clickedNode&&icicle.clickedNode.getParents()[0];f(X);if(X){var Y;if(X._depth){Y="aggregates/"+(X._depth==1?"group.":"subgroup.")+encodeURIComponent(X.name)+".json"}else{Y="aggregates/group._total.json"}new IO.XHR({url:Y,onSuccess:function(Z){j(Z,X)}}).send()}icicle.out()}},Label:{type:n,size:15,family:"Crimson Text"},onCreateLabel:function(Z,Y){Z.innerHTML=Y.name;var X=Z.style;X.fontSize="0.9em";X.display="";X.cursor="pointer";X.overflow="hidden"},onPlaceLabel:function(ab,aa){var Z=ab.style,Y=aa.getData("width"),X=aa.getData("height");if(Y<2||X<2){Z.display="none"}else{Z.display="";Z.width=Y+"px";Z.height=X+"px";Z.fontSize=Math.min(Math.max(5,(X/2)>>0),40)+"px"}}});icicle.reposition=function(){icicle.compute("end")};icicle.loadJSON(K);["current","start","end"].forEach(function(X){icicle.compute(X)});icicle.plot()}})();