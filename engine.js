
(function(){'use strict';const E=id=>document.getElementById(id),cv=E('canvas'),ctx=cv.getContext('2d');
const LIB={"de-DE":{"Basics":[["hallo","hello"],["ja","yes"],["nein","no"],["bitte","please"],["danke","thank you"],["gut","good"],["schlecht","bad"],["groß","big"],["klein","small"],["neu","new"],["alt","old"],["heute","today"]],"Family":[["die Mutter","mother"],["der Vater","father"],["die Schwester","sister"],["der Bruder","brother"],["die Eltern","parents"],["die Familie","family"],["die Oma","grandmother"],["der Opa","grandfather"]],"Food & Drink":[["der Apfel","apple"],["das Brot","bread"],["der Käse","cheese"],["das Wasser","water"],["die Milch","milk"],["der Reis","rice"],["das Ei","egg"],["essen","to eat"],["trinken","to drink"],["kochen","to cook"]],"School":[["die Schule","school"],["der Lehrer","teacher"],["der Schüler","student"],["das Buch","book"],["der Stift","pen"],["der Tisch","table"],["der Stuhl","chair"],["lesen","to read"],["schreiben","to write"],["lernen","to learn"]],"Common Verbs":[["sein","to be"],["haben","to have"],["gehen","to go"],["kommen","to come"],["machen","to do / make"],["sehen","to see"],["sprechen","to speak"],["essen","to eat"],["trinken","to drink"],["lesen","to read"],["schreiben","to write"],["spielen","to play"]],"Animals":[["der Hund","dog"],["die Katze","cat"],["der Vogel","bird"],["der Fisch","fish"],["das Pferd","horse"],["die Kuh","cow"],["das Schwein","pig"],["die Maus","mouse"]]},
"es-ES":{"Basics":[["hola","hello"],["sí","yes"],["no","no"],["por favor","please"],["gracias","thank you"],["bueno","good"],["malo","bad"],["grande","big"],["pequeño","small"],["nuevo","new"],["viejo","old"],["hoy","today"]],"Family":[["la madre","mother"],["el padre","father"],["la hermana","sister"],["el hermano","brother"],["los padres","parents"],["la familia","family"],["la abuela","grandmother"],["el abuelo","grandfather"]],"Food & Drink":[["la manzana","apple"],["el pan","bread"],["el queso","cheese"],["el agua","water"],["la leche","milk"],["el arroz","rice"],["el huevo","egg"],["comer","to eat"],["beber","to drink"],["cocinar","to cook"]],"School":[["la escuela","school"],["el profesor","teacher"],["el estudiante","student"],["el libro","book"],["el bolígrafo","pen"],["la mesa","table"],["la silla","chair"],["leer","to read"],["escribir","to write"],["aprender","to learn"]],"Common Verbs":[["ser","to be"],["tener","to have"],["ir","to go"],["venir","to come"],["hacer","to do / make"],["ver","to see"],["hablar","to speak"],["comer","to eat"],["beber","to drink"],["leer","to read"],["escribir","to write"],["jugar","to play"]],"Animals":[["el perro","dog"],["el gato","cat"],["el pájaro","bird"],["el pez","fish"],["el caballo","horse"],["la vaca","cow"],["el cerdo","pig"],["el ratón","mouse"]]},
"da-DK":{"Basics":[["hej","hello"],["ja","yes"],["nej","no"],["tak","thank you"],["god","good"],["dårlig","bad"],["stor","big"],["lille","small"],["ny","new"],["gammel","old"],["i dag","today"],["farvel","goodbye"]],"Family":[["mor","mother"],["far","father"],["søster","sister"],["bror","brother"],["forældre","parents"],["familie","family"],["bedstemor","grandmother"],["bedstefar","grandfather"]],"Food & Drink":[["æble","apple"],["brød","bread"],["ost","cheese"],["vand","water"],["mælk","milk"],["ris","rice"],["æg","egg"],["spise","to eat"],["drikke","to drink"],["lave mad","to cook"]],"School":[["skole","school"],["lærer","teacher"],["elev","student"],["bog","book"],["pen","pen"],["bord","table"],["stol","chair"],["læse","to read"],["skrive","to write"],["lære","to learn"]],"Common Verbs":[["være","to be"],["have","to have"],["gå","to go"],["komme","to come"],["gøre","to do"],["se","to see"],["tale","to speak"],["spise","to eat"],["drikke","to drink"],["læse","to read"],["skrive","to write"],["spille","to play"]],"Animals":[["hund","dog"],["kat","cat"],["fugl","bird"],["fisk","fish"],["hest","horse"],["ko","cow"],["gris","pig"],["mus","mouse"]]},
"en-US":{"Basics":[["hello","hola"],["yes","sí"],["no","no"],["please","por favor"],["thank you","gracias"],["good","bueno"],["bad","malo"],["big","grande"],["small","pequeño"],["new","nuevo"],["old","viejo"],["today","hoy"]],"Family":[["mother","madre"],["father","padre"],["sister","hermana"],["brother","hermano"],["parents","padres"],["family","familia"],["grandmother","abuela"],["grandfather","abuelo"]],"Food & Drink":[["apple","manzana"],["bread","pan"],["cheese","queso"],["water","agua"],["milk","leche"],["rice","arroz"],["egg","huevo"],["to eat","comer"],["to drink","beber"],["to cook","cocinar"]],"School":[["school","escuela"],["teacher","profesor"],["student","estudiante"],["book","libro"],["pen","bolígrafo"],["table","mesa"],["chair","silla"],["to read","leer"],["to write","escribir"],["to learn","aprender"]],"Common Verbs":[["to be","ser"],["to have","tener"],["to go","ir"],["to come","venir"],["to do","hacer"],["to see","ver"],["to speak","hablar"],["to eat","comer"],["to drink","beber"],["to read","leer"],["to write","escribir"],["to play","jugar"]],"Animals":[["dog","perro"],["cat","gato"],["bird","pájaro"],["fish","pez"],["horse","caballo"],["cow","vaca"],["pig","cerdo"],["mouse","ratón"]]}},EXTRA={
"de-DE":{"Home":[["das Haus","house"],["das Zimmer","room"],["die Küche","kitchen"],["das Bad","bathroom"],["das Bett","bed"],["die Tür","door"],["das Fenster","window"],["der Stuhl","chair"]],"Hobbies":[["Musik hören","to listen to music"],["Fußball spielen","to play football"],["lesen","to read"],["zeichnen","to draw"],["tanzen","to dance"],["singen","to sing"],["schwimmen","to swim"],["fotografieren","to take photos"]],"Daily Routine":[["aufstehen","to get up"],["frühstücken","to eat breakfast"],["zur Schule gehen","to go to school"],["lernen","to study"],["zu Mittag essen","to eat lunch"],["nach Hause gehen","to go home"],["zu Abend essen","to eat dinner"],["schlafen gehen","to go to bed"]],"Places":[["die Stadt","city"],["der Park","park"],["der Bahnhof","train station"],["der Supermarkt","supermarket"],["das Kino","cinema"],["das Krankenhaus","hospital"],["das Restaurant","restaurant"],["der Strand","beach"]],"Clothes":[["das Hemd","shirt"],["die Hose","trousers"],["das Kleid","dress"],["die Schuhe","shoes"],["die Jacke","jacket"],["der Pullover","sweater"],["die Mütze","hat"],["die Socken","socks"]],"Weather":[["sonnig","sunny"],["bewölkt","cloudy"],["windig","windy"],["kalt","cold"],["warm","warm"],["heiß","hot"],["es regnet","it is raining"],["es schneit","it is snowing"]],"Adjectives":[["glücklich","happy"],["traurig","sad"],["schnell","fast"],["langsam","slow"],["jung","young"],["alt","old"],["schön","beautiful"],["interessant","interesting"]],"Numbers & Time":[["eins","one"],["zwei","two"],["drei","three"],["zehn","ten"],["heute","today"],["morgen","tomorrow"],["gestern","yesterday"],["die Uhr","clock / time"]]},
"es-ES":{"Home":[["la casa","house"],["la habitación","room"],["la cocina","kitchen"],["el baño","bathroom"],["la cama","bed"],["la puerta","door"],["la ventana","window"],["la silla","chair"]],"Hobbies":[["escuchar música","to listen to music"],["jugar al fútbol","to play football"],["leer","to read"],["dibujar","to draw"],["bailar","to dance"],["cantar","to sing"],["nadar","to swim"],["hacer fotos","to take photos"]],"Daily Routine":[["levantarse","to get up"],["desayunar","to eat breakfast"],["ir a la escuela","to go to school"],["estudiar","to study"],["almorzar","to eat lunch"],["volver a casa","to go home"],["cenar","to eat dinner"],["acostarse","to go to bed"]],"Places":[["la ciudad","city"],["el parque","park"],["la estación","train station"],["el supermercado","supermarket"],["el cine","cinema"],["el hospital","hospital"],["el restaurante","restaurant"],["la playa","beach"]],"Clothes":[["la camisa","shirt"],["los pantalones","trousers"],["el vestido","dress"],["los zapatos","shoes"],["la chaqueta","jacket"],["el jersey","sweater"],["el sombrero","hat"],["los calcetines","socks"]],"Weather":[["soleado","sunny"],["nublado","cloudy"],["ventoso","windy"],["frío","cold"],["cálido","warm"],["caluroso","hot"],["llueve","it is raining"],["nieva","it is snowing"]],"Adjectives":[["feliz","happy"],["triste","sad"],["rápido","fast"],["lento","slow"],["joven","young"],["viejo","old"],["bonito","beautiful"],["interesante","interesting"]],"Numbers & Time":[["uno","one"],["dos","two"],["tres","three"],["diez","ten"],["hoy","today"],["mañana","tomorrow"],["ayer","yesterday"],["la hora","time / hour"]]},
"da-DK":{"Home":[["hus","house"],["værelse","room"],["køkken","kitchen"],["badeværelse","bathroom"],["seng","bed"],["dør","door"],["vindue","window"],["stol","chair"]],"Hobbies":[["lytte til musik","to listen to music"],["spille fodbold","to play football"],["læse","to read"],["tegne","to draw"],["danse","to dance"],["synge","to sing"],["svømme","to swim"],["tage billeder","to take photos"]],"Daily Routine":[["stå op","to get up"],["spise morgenmad","to eat breakfast"],["gå i skole","to go to school"],["studere","to study"],["spise frokost","to eat lunch"],["gå hjem","to go home"],["spise aftensmad","to eat dinner"],["gå i seng","to go to bed"]],"Places":[["by","city"],["park","park"],["station","train station"],["supermarked","supermarket"],["biograf","cinema"],["hospital","hospital"],["restaurant","restaurant"],["strand","beach"]],"Clothes":[["skjorte","shirt"],["bukser","trousers"],["kjole","dress"],["sko","shoes"],["jakke","jacket"],["trøje","sweater"],["hat","hat"],["sokker","socks"]],"Weather":[["solrigt","sunny"],["overskyet","cloudy"],["blæsende","windy"],["kold","cold"],["varm","warm"],["meget varm","hot"],["det regner","it is raining"],["det sner","it is snowing"]],"Adjectives":[["glad","happy"],["trist","sad"],["hurtig","fast"],["langsom","slow"],["ung","young"],["gammel","old"],["smuk","beautiful"],["interessant","interesting"]],"Numbers & Time":[["en","one"],["to","two"],["tre","three"],["ti","ten"],["i dag","today"],["i morgen","tomorrow"],["i går","yesterday"],["klokken","the time / clock"]]},
"en-US":{"Home":[["house","casa"],["room","habitación"],["kitchen","cocina"],["bathroom","baño"],["bed","cama"],["door","puerta"],["window","ventana"],["chair","silla"]],"Hobbies":[["listen to music","escuchar música"],["play football","jugar al fútbol"],["read","leer"],["draw","dibujar"],["dance","bailar"],["sing","cantar"],["swim","nadar"],["take photos","hacer fotos"]],"Daily Routine":[["get up","levantarse"],["eat breakfast","desayunar"],["go to school","ir a la escuela"],["study","estudiar"],["eat lunch","almorzar"],["go home","volver a casa"],["eat dinner","cenar"],["go to bed","acostarse"]],"Places":[["city","ciudad"],["park","parque"],["train station","estación"],["supermarket","supermercado"],["cinema","cine"],["hospital","hospital"],["restaurant","restaurante"],["beach","playa"]],"Clothes":[["shirt","camisa"],["trousers","pantalones"],["dress","vestido"],["shoes","zapatos"],["jacket","chaqueta"],["sweater","jersey"],["hat","sombrero"],["socks","calcetines"]],"Weather":[["sunny","soleado"],["cloudy","nublado"],["windy","ventoso"],["cold","frío"],["warm","cálido"],["hot","caluroso"],["it is raining","llueve"],["it is snowing","nieva"]],"Adjectives":[["happy","feliz"],["sad","triste"],["fast","rápido"],["slow","lento"],["young","joven"],["old","viejo"],["beautiful","bonito"],["interesting","interesante"]],"Numbers & Time":[["one","uno"],["two","dos"],["three","tres"],["ten","diez"],["today","hoy"],["tomorrow","mañana"],["yesterday","ayer"],["time","hora"]]}
};Object.keys(EXTRA).forEach(l=>Object.assign(LIB[l],EXTRA[l]));
let maze=[],dots=new Set(),pellets=new Set(),player,actors=[],vocab=[],queue=[],current,score=0,lives=3,round=1,done=0,misses={},step=.155,acc=0,last=0,raf=0,running=false,paused=false,soundOn=true,lang='de-DE',audioCtx=null,freeze=0,invuln=0,turnWanted={x:0,y:0},toastTimer=0;
const base = [
  '#########################',
  '#.......................#',
  '#o.####..#######..####.o#',
  '#.....#.....#.....#.....#',
  '#.##..####..#..####..##.#',
  '#...#....#.....#....#...#',
  '#..###..###...###..###..#',
  '.........................',
  '#..###..###...###..###..#',
  '#...#....#.....#....#...#',
  '#.##..####..#..####..##.#',
  '#.....#.....#.....#.....#',
  '#o.####..#######..####.o#',
  '#.......................#',
  '#########################'
];
const portraitBase = [
  '###########',
  '#.........#',
  '#o.......o#',
  '#.##...##.#',
  '#..#...#..#',
  '#.........#',
  '#.##...##.#',
  '#..#...#..#',
  '#.........#',
  '...........',
  '#.........#',
  '#.##...##.#',
  '#..#...#..#',
  '#.........#',
  '#.##...##.#',
  '#..#...#..#',
  '#o.......o#',
  '#.........#',
  '###########'
];
const portraitMaze=window.matchMedia('(max-width:760px) and (orientation:portrait)').matches;const board = portraitMaze ? portraitBase : base;
const C = board[0].length, R = board.length, S = 32;
const tunnelRow = Math.floor(R / 2);
cv.width=C*S;cv.height=R*S;
function parse(t){return t.replace(/\r/g,'').split('\n').map(x=>x.split('\t')).filter(x=>x.length>=2&&x[0].trim()&&x.slice(1).join('\t').trim()).map(x=>[x[0].trim(),x.slice(1).join('\t').trim()])}
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function categories(){let s=E('category'),l=E('language').value;s.innerHTML='<option value="custom">Custom / Paste your own</option>';Object.keys(LIB[l]).forEach(k=>{let o=document.createElement('option');o.value=k;o.textContent=k;s.appendChild(o)});s.value='Basics';loadCategory()}
function loadCategory(){let c=E('category').value;if(c==='custom')return;E('words').value=LIB[E('language').value][c].map(x=>x.join('\t')).join('\n');refresh()}
function refresh(){let a=parse(E('words').value);E('preview').textContent=a.length+' valid word pairs';E('setTitle').textContent=E('category').value==='custom'?'CUSTOM VOCABULARY':E('category').value.toUpperCase();E('setMeta').textContent=E('language').selectedOptions[0].text.toUpperCase()+' · '+a.length+' WORDS'}
function voice(){if(!('speechSynthesis' in window))return null;let a=speechSynthesis.getVoices(),l=E('language').value.toLowerCase();return a.find(v=>v.lang.toLowerCase()===l)||a.find(v=>v.lang.toLowerCase().split('-')[0]===l.split('-')[0])||null}
function voiceStatus(){let v=voice();E('voiceCheck').textContent=v?'✓ VOICE: '+v.name+' ('+v.lang+')':'⚠ No matching voice installed (pronunciation unavailable)'}
let subscriber;
function emit(type,payload={}){const event={type,...payload};if(subscriber)subscriber(event);else window.parent.postMessage(event,location.origin)}
function speak(t){if(soundOn)emit('BT_EATER_SPEAK',{text:t,language:lang})}
function beep(f,d){if(!soundOn)return;try{let A=window.AudioContext||window.webkitAudioContext;if(!A)return;if(!audioCtx)audioCtx=new A();if(audioCtx.state==='suspended')audioCtx.resume();let o=audioCtx.createOscillator(),g=audioCtx.createGain();o.type='square';o.frequency.value=f;g.gain.setValueAtTime(.035,audioCtx.currentTime);g.gain.exponentialRampToValueAtTime(.001,audioCtx.currentTime+d);o.connect(g);g.connect(audioCtx.destination);o.start();o.stop(audioCtx.currentTime+d)}catch(e){}}
function flash(t,ok){E('toast').textContent=t;E('toast').style.color=ok?'#7fff75':'#ff7796';clearTimeout(toastTimer);toastTimer=setTimeout(()=>E('toast').textContent='',1100)}
function valid(x,y){if(y<0||y>=R)return false;if(x<0||x>=C)return y===tunnelRow&&maze[y][(x+C)%C]!== '#';return maze[y][x]!== '#'}
function adj(p){return [[1,0],[-1,0],[0,1],[0,-1]].filter(d=>valid(p.x+d[0],p.y+d[1])).map(d=>({x:d[0],y:d[1]}))}
function nextPos(p,d){return{x:(p.x+d.x+C)%C,y:p.y+d.y}}
function key(p){return p.x+','+p.y}
function openTiles(){let a=[],seen=new Set([key(player)]),todo=[{x:player.x,y:player.y}];while(todo.length){let p=todo.shift();a.push(p);for(let d of adj(p)){let q=nextPos(p,d),k=key(q);if(!seen.has(k)){seen.add(k);todo.push(q)}}}return a}
function distance(a,b){return Math.abs(a.x-b.x)+Math.abs(a.y-b.y)}
function startMaze(){maze=board.map(s=>s.split(''));dots.clear();pellets.clear();for(let y=0;y<R;y++)for(let x=0;x<C;x++){if(maze[y][x]==='.'||maze[y][x]==='o'){(maze[y][x]==='o'?pellets:dots).add(x+','+y);maze[y][x]=' '}}}
function buildQueue(){queue=shuffle(vocab).concat(shuffle(vocab.filter(v=>(misses[v.id]||0)>0)));done=0}
function newQuestion(){if(!queue.length){round++;step=Math.max(.29,step*.97);buildQueue();flash('ROUND '+round+' · NEXT LEVEL!',true)}current=queue.shift();let pool=shuffle(vocab.filter(v=>v.id!==current.id&&v.target!==current.target));if(pool.length<3){end('NOT ENOUGH DISTINCT WORDS');return}let choices=shuffle([current,...pool.slice(0,3)]);let tiles=shuffle(openTiles().filter(p=>distance(p,player)>7&&p.y>1&&p.y<R-1));actors=choices.map((pair,i)=>({pair,correct:pair.id===current.id,x:tiles[i].x,y:tiles[i].y,dir:{x:0,y:0},color:['#ed6799','#62d7ef','#ff9d56','#a990ff'][i]}));freeze=.55;hud()}
function hud(){E('score').textContent=score;E('lives').textContent='♥'.repeat(Math.max(0,lives));E('progress').textContent='ROUND '+round+' · '+Math.min(done,vocab.length)+'/'+vocab.length;E('target').textContent='FIND: '+(current?current.prompt.toUpperCase():'')}
let answerFeedback='',answerFeedbackLeft=0;
function resetPlayer(){stopSwipeMovement();player={x:Math.floor(C / 2),y:tunnelRow,dir:{x:0,y:0}};turnWanted={x:0,y:0};invuln=1.3}
function start(pairs,language){let a=pairs??parse(E('words').value);if(a.length<5||new Set(a.map(v=>v[1].toLowerCase())).size<4){E('error').textContent='Use at least 5 pairs with 4 distinct answers.';window.parent.postMessage({type:'BT_EATER_START_FAILED'},location.origin);return}E('error').textContent='';stopHold();clearTimeout(toastTimer);E('toast').textContent='';emit('BT_EATER_CANCEL_SPEECH');lang=language??E('language').value;vocab=a.map((v,i)=>({id:i,target:v[1],prompt:v[0]}));score=0;lives=3;round=1;misses={};step=.42;acc=0;last=0;freeze=0;invuln=0;answerFeedback='';answerFeedbackLeft=0;running=true;paused=false;startMaze();resetPlayer();buildQueue();newQuestion();E('menu').classList.remove('active');E('game').classList.add('active');E('gameOver').classList.remove('show');E('pauseOverlay').classList.remove('show');E('pause').textContent='PAUSE';cancelAnimationFrame(raf);raf=requestAnimationFrame(loop)}
function end(msg){running=false;E('finalScore').textContent=(msg||'SCORE')+': '+score;E('gameOver').classList.add('show');emitState()}
function hurt(t){if(invuln>0)return;lives--;beep(140,.23);flash(t,false);if(lives<=0){hud();end('FINAL SCORE');return}resetPlayer();freeze=.6;hud()}
function check(){if(!running||answerFeedbackLeft>0)return;let k=key(player);if(dots.delete(k)){score+=1;beep(350,.018)}if(pellets.delete(k)){score+=5;freeze=5;flash('POWER PELLET · GHOSTS FROZEN!',true);beep(750,.13)}for(let a of actors){if(a.x!==player.x||a.y!==player.y)continue;if(a.correct){score+=10;done++;misses[current.id]=Math.max(0,(misses[current.id]||0)-1);beep(880,.16);speak(a.pair.target);answerFeedback=a.pair.target.toUpperCase();answerFeedbackLeft=1.5;flash('✓ '+answerFeedback,true);hud();return}else{misses[current.id]=Math.min(2,(misses[current.id]||0)+1);hurt('NOPE · '+a.pair.target.toUpperCase());return}}if(dots.size+pellets.size===0){startMaze();round++;step=Math.max(.29,step*.97);flash('MAZE CLEARED!',true)}hud()}
function moveActor(a){let options=adj(a);if(!options.length)return;let reverse={x:-a.dir.x,y:-a.dir.y};let forward=options.find(d=>d.x===a.dir.x&&d.y===a.dir.y);let candidates=options.filter(d=>!(d.x===reverse.x&&d.y===reverse.y));if(!candidates.length)candidates=options;let chosen=forward&&Math.random()<.63?forward:candidates[Math.floor(Math.random()*candidates.length)];let p=nextPos(a,chosen);a.x=p.x;a.y=p.y;a.dir=chosen}
function tick(){if(!running||answerFeedbackLeft>0)return;if(freeze<=0){for(let a of actors)moveActor(a);check()}}
function draw(){ctx.fillStyle='#090d24';ctx.fillRect(0,0,C*S,R*S);for(let y=0;y<R;y++)for(let x=0;x<C;x++){if(maze[y][x]==='#'){ctx.fillStyle='#1436a2';ctx.fillRect(x*S+1,y*S+1,S-2,S-2);ctx.strokeStyle='#56a4ff';ctx.lineWidth=1.5;ctx.strokeRect(x*S+4,y*S+4,S-8,S-8)}}for(let k of dots){let [x,y]=k.split(',').map(Number);ctx.fillStyle='#f4dfab';ctx.fillRect(x*S+14,y*S+14,4,4)}for(let k of pellets){let [x,y]=k.split(',').map(Number);ctx.fillStyle='#ffdc75';ctx.beginPath();ctx.arc(x*S+16,y*S+16,7,0,Math.PI*2);ctx.fill()}actors.forEach(a=>{let px=a.x*S+16,py=a.y*S+16;ctx.save();ctx.globalAlpha=freeze>0&&!a.correct?.55:1;ctx.fillStyle=a.color;ctx.beginPath();ctx.arc(px,py-2,12,Math.PI,0);ctx.lineTo(px+12,py+11);for(let i=0;i<4;i++)ctx.lineTo(px+12-i*8,py+7+(i%2)*5);ctx.closePath();ctx.fill();ctx.fillStyle='#fff';ctx.fillRect(px-7,py-5,5,6);ctx.fillRect(px+3,py-5,5,6);ctx.fillStyle='#0d193b';ctx.fillRect(px-5,py-3,2,3);ctx.fillRect(px+5,py-3,2,3);ctx.restore();let label=a.pair.target;ctx.font='bold '+(portraitMaze?19:16)+'px Courier New';let w=Math.max(52,Math.min(portraitMaze?235:205,ctx.measureText(label).width+12));let lx=Math.max(2,Math.min(C*S-w-2,px-w/2)),ly=Math.max(1,Math.min(R*S-25,py+12));ctx.fillStyle='#101735';ctx.fillRect(lx-2,ly-2,w+4,26);ctx.fillStyle='#f6e8c1';ctx.fillRect(lx,ly,w,22);ctx.fillStyle='#17264d';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(label,lx+w/2,ly+11,w-6)});if(player){let x=player.x*S+16,y=player.y*S+16;ctx.save();if(invuln>0&&Math.floor(invuln*10)%2===0)ctx.globalAlpha=.35;ctx.fillStyle='#ffe04d';let angle=player.dir.x>0?0:player.dir.x<0?Math.PI:player.dir.y<0?-Math.PI/2:Math.PI/2;let mouth=(Math.sin(performance.now()/90)+1)*.20+.08;ctx.beginPath();ctx.moveTo(x,y);ctx.arc(x,y,13,angle+mouth,angle+Math.PI*2-mouth);ctx.closePath();ctx.fill();ctx.restore();if(current){let label=current.prompt;ctx.font='bold '+(portraitMaze?19:16)+'px Courier New';let w=Math.max(62,Math.min(portraitMaze?240:225,ctx.measureText(label).width+18));let lx=Math.max(3,Math.min(C*S-w-3,x-w/2));let ly=Math.max(3,Math.min(R*S-24,y-41));ctx.fillStyle='#121b3d';ctx.fillRect(lx-3,ly-3,w+6,28);ctx.fillStyle='#ffe04d';ctx.fillRect(lx,ly,w,22);ctx.fillStyle='#17264d';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(label,lx+w/2,ly+11,w-8);ctx.strokeStyle='#ffe04d';ctx.beginPath();ctx.moveTo(x,ly+22);ctx.lineTo(x,y-14);ctx.stroke()}}if(answerFeedbackLeft>0&&answerFeedback){ctx.fillStyle='rgba(6,12,34,.78)';ctx.fillRect(0,R*S*.35,C*S,R*S*.3);ctx.textAlign='center';ctx.textBaseline='middle';ctx.font='bold '+Math.min(70,Math.max(30,Math.floor(C*S/(answerFeedback.length*.72))))+'px Courier New';ctx.fillStyle='#ffe04d';ctx.fillText('✓ '+answerFeedback,C*S/2,R*S/2,C*S-40);}}
function loop(t){if(!running||paused)return;if(!last)last=t;let dt=Math.min(.05,(t-last)/1000);last=t;freeze=Math.max(0,freeze-dt);invuln=Math.max(0,invuln-dt);if(answerFeedbackLeft>0){answerFeedbackLeft=Math.max(0,answerFeedbackLeft-dt);if(answerFeedbackLeft===0){answerFeedback='';newQuestion();acc=0;}}else {acc+=dt;advanceSwipe(dt);}while(acc>=step&&running){acc-=step;tick()}draw();if(running)raf=requestAnimationFrame(loop)}
let holdTimer=null,holdDelay=null,heldKey=null;function stopHold(){clearInterval(holdTimer);clearTimeout(holdDelay);holdTimer=null;holdDelay=null;heldKey=null}function beginHold(x,y,key){if(heldKey===key)return;stopHold();stopSwipeMovement();heldKey=key;steer(x,y);holdDelay=setTimeout(()=>{holdTimer=setInterval(()=>steer(x,y),205)},340)}function steer(x,y){if(!running||paused||answerFeedbackLeft>0)return;player.dir={x,y};if(valid(player.x+x,player.y+y)){Object.assign(player,nextPos(player,{x,y}));check()}draw()}
function pause(){stopHold();stopSwipeMovement();if(!running)return;paused=!paused;E('pauseOverlay').classList.toggle('show',paused);E('pause').textContent=paused?'RESUME':'PAUSE';cancelAnimationFrame(raf);if(!paused){last=0;raf=requestAnimationFrame(loop)}emitState()}
E('language').onchange=()=>{categories();voiceStatus()};E('category').onchange=loadCategory;E('words').oninput=()=>{E('category').value='custom';refresh()};E('swap').onclick=()=>{E('words').value=parse(E('words').value).map(x=>x.reverse().join('\t')).join('\n');refresh()};E('testVoice').onclick=()=>{voiceStatus();let v=voice();if(v)speak({'de-DE':'Guten Morgen','es-ES':'Buenos días','da-DK':'Godmorgen','en-US':'Good morning'}[E('language').value])};E('play').onclick=()=>start();E('again').onclick=()=>start();E('restart').onclick=()=>start();E('pause').onclick=pause;function menu(){stopHold();running=false;paused=false;cancelAnimationFrame(raf);E('game').classList.remove('active');window.parent.postMessage({type:'BT_EATER_CANCEL_SPEECH'},location.origin);window.parent.postMessage({type:'BT_EATER_MENU'},location.origin)}E('mainMenu').onclick=menu;E('overMenu').onclick=menu;E('sound').onclick=()=>{soundOn=!soundOn;E('sound').textContent=soundOn?'SOUND ON':'SOUND OFF'};
window.addEventListener('keydown',e=>{if(!E('game').classList.contains('active'))return;let k=e.key.toLowerCase(),dirs={arrowup:[0,-1],w:[0,-1],arrowdown:[0,1],s:[0,1],arrowleft:[-1,0],a:[-1,0],arrowright:[1,0],d:[1,0]};if(dirs[k]){e.preventDefault();e.stopPropagation();beginHold(...dirs[k],k)}if(k==='p'&&!e.repeat)pause()},{passive:false});window.addEventListener('keyup',e=>{if(e.key.toLowerCase()===heldKey)stopHold()});[['touchUp',0,-1],['touchDown',0,1],['touchLeft',-1,0],['touchRight',1,0]].forEach(([id,x,y])=>{let el=E(id);el.addEventListener('pointerdown',e=>{e.preventDefault();el.setPointerCapture(e.pointerId);beginHold(x,y,id)},{passive:false});['pointerup','pointercancel','lostpointercapture'].forEach(type=>el.addEventListener(type,stopHold))});let swipe = null, swipeDirection = null, swipeElapsed = 0;
function stopSwipeMovement(){
 swipe = null;
 swipeDirection = null;
 swipeElapsed = 0;
}
function advanceSwipe(dt){
 if(!swipeDirection)return;
 swipeElapsed += dt;
 if(swipeElapsed < .205)return;
 swipeElapsed -= .205;
 const {x,y}=swipeDirection;
 steer(x,y);
}
cv.addEventListener('pointerdown',event=>{
 if(event.pointerType==='mouse'||swipe||!running||paused)return;
 swipe={id:event.pointerId,x:event.clientX,y:event.clientY};
 cv.setPointerCapture(event.pointerId);
});
cv.addEventListener('pointerup',event=>{
 if(swipe?.id!==event.pointerId)return;
 const dx=event.clientX-swipe.x,dy=event.clientY-swipe.y;
 stopSwipeMovement();
 if(Math.max(Math.abs(dx),Math.abs(dy))<20)return;
 stopHold();
 swipeDirection=Math.abs(dx)>Math.abs(dy)?{x:Math.sign(dx),y:0}:{x:0,y:Math.sign(dy)};
 steer(swipeDirection.x,swipeDirection.y);
});
function cancelGesture(event){if(swipe?.id===event.pointerId)swipe=null;}
cv.addEventListener('pointercancel',cancelGesture);
cv.addEventListener('lostpointercapture',cancelGesture);
document.addEventListener('visibilitychange',()=>{if(document.hidden&&running&&!paused)pause()});window.addEventListener('blur',()=>{stopHold();if(running&&!paused)pause()});if('speechSynthesis'in window){speechSynthesis.addEventListener('voiceschanged',voiceStatus);setTimeout(voiceStatus,400)}
window.addEventListener('message',e=>{
 if(e.origin!==location.origin||e.source!==window.parent)return;
 const d=e.data||{};
 if(d.type==='BT_EATER_PING'){window.parent.postMessage({type:'BT_EATER_READY'},location.origin);}
 if(d.type==='BT_EATER_START'){
  if(!Array.isArray(d.pairs)||d.pairs.length<5||d.pairs.length>500||!['de-DE','es-ES','da-DK','en-US','fr-FR','it-IT'].includes(d.language)){window.parent.postMessage({type:'BT_EATER_START_FAILED'},location.origin);return;}
  const pairs=d.pairs.filter(p=>Array.isArray(p)&&p.length>=2&&typeof p[0]==='string'&&typeof p[1]==='string'&&p[0].trim()&&p[1].trim()).map(p=>[p[0].trim(),p[1].trim()]);
  if(pairs.length!==d.pairs.length||new Set(pairs.map(p=>p[1].toLowerCase())).size<4){window.parent.postMessage({type:'BT_EATER_START_FAILED'},location.origin);return;}
  if(!Array.from(E('language').options).some(o=>o.value===d.language)){const opt=document.createElement('option');opt.value=d.language;opt.textContent=({'fr-FR':'French','it-IT':'Italian'})[d.language]||d.language;E('language').appendChild(opt)}E('language').value=d.language;E('words').value=pairs.map(p=>p.join('\t')).join('\n');start();if(running)window.parent.postMessage({type:'BT_EATER_STARTED'},location.origin);
 }
});
function state(){return {status:disposed?'disposed':!running?'ended':paused?'paused':'running',soundOn,score,lives,round,done}}
function emitState(){if(subscriber)emit('BT_EATER_STATE',state())}
let sessionSet,disposed=false;
window.BTEater={
 subscribe(listener){if(subscriber)return false;subscriber=listener;return true},
 setShellManaged(value){document.body.classList.toggle('shell-managed',value);return true},
 initialize(set){
  const pairs=set.pairs;
  if(!Array.isArray(pairs)||pairs.length<5||pairs.length>500||
     !pairs.every(pair=>Array.isArray(pair)&&pair.length===2&&pair.every(word=>typeof word==='string'&&word.trim()))||
     new Set(pairs.map(pair=>pair[1].trim().toLowerCase())).size<4)return false;
  sessionSet={pairs:pairs.map(pair=>pair.map(word=>word.trim())),language:set.language};
  start(sessionSet.pairs,sessionSet.language);pause();draw();return running;
 },
 resume(){if(!running)return false;if(paused)pause();return true},
 pause(){if(!running)return false;if(!paused)pause();return true},
 restart(){if(!sessionSet)return false;start(sessionSet.pairs,sessionSet.language);return running},
 setSound(value){if(typeof value!=='boolean')return false;soundOn=value;if(!value)emit('BT_EATER_CANCEL_SPEECH');return true},
 resize(){if(player)draw()},
 state,
 dispose(){disposed=true;running=false;stopHold();stopSwipeMovement();cancelAnimationFrame(raf);clearTimeout(toastTimer);void audioCtx?.close();subscriber=null}
};
categories();
window.parent.postMessage({type:'BT_EATER_READY'},location.origin);
})();