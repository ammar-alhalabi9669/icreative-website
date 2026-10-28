var h0=0,hd=1,u0=2;var Cl=1,Nh=2,ra=3,Ts=0,Vn=1,ui=2,Pr=0,sa=1,fi=2,ud=3,fd=4,f0=5;var Ks=100,d0=101,p0=102,m0=103,g0=104,_0=200,x0=201,y0=202,v0=203,dd=204,pd=205,S0=206,M0=207,b0=208,w0=209,T0=210,A0=211,E0=212,C0=213,R0=214,jc=0,th=1,eh=2,Ho=3,nh=4,ih=5,rh=6,sh=7,Uh=0,P0=1,I0=2,Oi=0,md=1,gd=2,_d=3,xd=4,yd=5,vd=6,Sd=7;var Md=300,As=301,Qs=302,Fh=303,Oh=304,Rl=306,Wo=1e3,Ji=1001,Xo=1002,Un=1003,L0=1004;var Pl=1005;var En=1006,Bh=1007;var Ir=1008;var bi=1009,bd=1010,wd=1011,oa=1012,zh=1013,mr=1014,Ki=1015,gr=1016,kh=1017,Vh=1018,aa=1020,Td=35902,Ad=35899,Ed=1021,Cd=1022,Qi=1023,Tr=1026,Es=1027,Gh=1028,Hh=1029,Cs=1030,Wh=1031;var Xh=1033,Il=33776,Ll=33777,Dl=33778,Nl=33779,qh=35840,Yh=35841,Zh=35842,Jh=35843,$h=36196,Kh=37492,Qh=37496,jh=37488,tu=37489,Ul=37490,eu=37491,nu=37808,iu=37809,ru=37810,su=37811,ou=37812,au=37813,lu=37814,cu=37815,hu=37816,uu=37817,fu=37818,du=37819,pu=37820,mu=37821,gu=36492,_u=36494,xu=36495,yu=36283,vu=36284,Fl=36285,Su=36286;var Ka=2300,oh=2301,Kc=2302,Zf=2303,Jf=2400,$f=2401,Kf=2402;var D0=3200;var Ol=0,N0=1,es="",en="srgb",Qa="srgb-linear",ja="linear",Oe="srgb";var Qc=7680;var U0=519,F0=512,O0=513,B0=514,Mu=515,z0=516,k0=517,bu=518,V0=519,Rd=35044;var Pd="300 es",ur=2e3,qo=2001;function Vx(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Gx(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function tl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function G0(){let r=tl("canvas");return r.style.display="block",r}var Am={},Yo=null;function el(...r){let t="THREE."+r.shift();Yo?Yo("log",t,...r):console.log(t,...r)}function H0(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function oe(...r){r=H0(r);let t="THREE."+r.shift();if(Yo)Yo("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function le(...r){r=H0(r);let t="THREE."+r.shift();if(Yo)Yo("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function Xs(...r){let t=r.join(" ");t in Am||(Am[t]=!0,oe(...r))}function W0(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var X0={[jc]:th,[eh]:rh,[nh]:sh,[Ho]:ih,[th]:jc,[rh]:eh,[sh]:nh,[ih]:Ho},Ar=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},Jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Em=1234567,Ya=Math.PI/180,Zo=180/Math.PI;function wr(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Jn[r&255]+Jn[r>>8&255]+Jn[r>>16&255]+Jn[r>>24&255]+"-"+Jn[t&255]+Jn[t>>8&255]+"-"+Jn[t>>16&15|64]+Jn[t>>24&255]+"-"+Jn[e&63|128]+Jn[e>>8&255]+"-"+Jn[e>>16&255]+Jn[e>>24&255]+Jn[n&255]+Jn[n>>8&255]+Jn[n>>16&255]+Jn[n>>24&255]).toLowerCase()}function ye(r,t,e){return Math.max(t,Math.min(e,r))}function Id(r,t){return(r%t+t)%t}function Hx(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Wx(r,t,e){return r!==t?(e-r)/(t-r):0}function Za(r,t,e){return(1-e)*r+e*t}function Xx(r,t,e,n){return Za(r,t,1-Math.exp(-e*n))}function qx(r,t=1){return t-Math.abs(Id(r,t*2)-t)}function Yx(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Zx(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Jx(r,t){return r+Math.floor(Math.random()*(t-r+1))}function $x(r,t){return r+Math.random()*(t-r)}function Kx(r){return r*(.5-Math.random())}function Qx(r){r!==void 0&&(Em=r);let t=Em+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function jx(r){return r*Ya}function ty(r){return r*Zo}function ey(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function ny(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function iy(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ry(r,t,e,n,i){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),f=s((t-n)/2),u=o((t-n)/2),d=s((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*f,l*u,a*c);break;case"YZY":r.set(l*u,a*h,l*f,a*c);break;case"ZXZ":r.set(l*f,l*u,a*h,a*c);break;case"XZX":r.set(a*h,l*p,l*d,a*c);break;case"YXY":r.set(l*d,a*h,l*p,a*c);break;case"ZYZ":r.set(l*p,l*d,a*h,a*c);break;default:oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function hr(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function We(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ue={DEG2RAD:Ya,RAD2DEG:Zo,generateUUID:wr,clamp:ye,euclideanModulo:Id,mapLinear:Hx,inverseLerp:Wx,lerp:Za,damp:Xx,pingpong:qx,smoothstep:Yx,smootherstep:Zx,randInt:Jx,randFloat:$x,randFloatSpread:Kx,seededRandom:Qx,degToRad:jx,radToDeg:ty,isPowerOfTwo:ey,ceilPowerOfTwo:ny,floorPowerOfTwo:iy,setQuaternionFromProperEuler:ry,normalize:We,denormalize:hr},Od=class Od{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ye(this.x,t.x,e.x),this.y=ye(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ye(this.x,t,e),this.y=ye(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ye(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Od.prototype.isVector2=!0;var vt=Od,gn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=s[o+0],d=s[o+1],p=s[o+2],_=s[o+3];if(f!==_||l!==u||c!==d||h!==p){let m=l*u+c*d+h*p+f*_;m<0&&(u=-u,d=-d,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){let T=Math.acos(m),A=Math.sin(T);g=Math.sin(g*T)/A,a=Math.sin(a*T)/A,l=l*g+u*a,c=c*g+d*a,h=h*g+p*a,f=f*g+_*a}else{l=l*g+u*a,c=c*g+d*a,h=h*g+p*a,f=f*g+_*a;let T=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=T,c*=T,h*=T,f*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=s[o],u=s[o+1],d=s[o+2],p=s[o+3];return t[e]=a*p+h*f+l*d-c*u,t[e+1]=l*p+h*u+c*f-a*d,t[e+2]=c*p+h*d+a*u-l*f,t[e+3]=h*p-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(s/2),u=l(n/2),d=l(i/2),p=l(s/2);switch(o){case"XYZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"YXZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"ZXY":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"ZYX":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"YZX":this._x=u*h*f+c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f-u*d*p;break;case"XZY":this._x=u*h*f-c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f+u*d*p;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Bd=class Bd{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cm.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-s*f,this.z=i+l*f+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ye(this.x,t.x,e.x),this.y=ye(this.y,t.y,e.y),this.z=ye(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ye(this.x,t,e),this.y=ye(this.y,t,e),this.z=ye(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ye(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return bf.copy(this).projectOnVector(t),this.sub(bf)}reflect(t){return this.sub(bf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bd.prototype.isVector3=!0;var G=Bd,bf=new G,Cm=new gn,zd=class zd{constructor(t,e,n,i,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],p=n[8],_=i[0],m=i[3],g=i[6],T=i[1],A=i[4],y=i[7],M=i[2],w=i[5],C=i[8];return s[0]=o*_+a*T+l*M,s[3]=o*m+a*A+l*w,s[6]=o*g+a*y+l*C,s[1]=c*_+h*T+f*M,s[4]=c*m+h*A+f*w,s[7]=c*g+h*y+f*C,s[2]=u*_+d*T+p*M,s[5]=u*m+d*A+p*w,s[8]=u*g+d*y+p*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*s,d=c*s-o*l,p=e*f+n*u+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=f*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Xs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wf.makeScale(t,e)),this}rotate(t){return Xs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wf.makeRotation(-t)),this}translate(t,e){return Xs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wf.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};zd.prototype.isMatrix3=!0;var re=zd,wf=new re,Rm=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pm=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sy(){let r={enabled:!0,workingColorSpace:Qa,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Oe&&(i.r=Kr(i.r),i.g=Kr(i.g),i.b=Kr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Oe&&(i.r=Go(i.r),i.g=Go(i.g),i.b=Go(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===es?ja:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Xs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Xs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Qa]:{primaries:t,whitePoint:n,transfer:ja,toXYZ:Rm,fromXYZ:Pm,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:t,whitePoint:n,transfer:Oe,toXYZ:Rm,fromXYZ:Pm,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),r}var Te=sy();function Kr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Go(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var wo,ah=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{wo===void 0&&(wo=tl("canvas")),wo.width=t.width,wo.height=t.height;let i=wo.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=wo}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=tl("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Kr(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Kr(e[n]/255)*255):e[n]=Kr(e[n]);return{data:e,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},oy=0,Jo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=wr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Tf(i[o].image)):s.push(Tf(i[o]))}else s=Tf(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Tf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ah.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}var ay=0,Af=new G,hi=class r extends Ar{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Ji,i=Ji,s=En,o=Ir,a=Qi,l=bi,c=r.DEFAULT_ANISOTROPY,h=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=wr(),this.name="",this.source=new Jo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Af).x}get height(){return this.source.getSize(Af).y}get depth(){return this.source.getSize(Af).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){oe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){oe(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Md)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wo:t.x=t.x-Math.floor(t.x);break;case Ji:t.x=t.x<0?0:1;break;case Xo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wo:t.y=t.y-Math.floor(t.y);break;case Ji:t.y=t.y<0?0:1;break;case Xo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};hi.DEFAULT_IMAGE=null;hi.DEFAULT_MAPPING=Md;hi.DEFAULT_ANISOTROPY=1;var kd=class kd{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,y=(d+1)/2,M=(g+1)/2,w=(h+u)/4,C=(f+_)/4,x=(p+m)/4;return A>y&&A>M?A<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(A),i=w/n,s=C/n):y>M?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=w/i,s=x/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=C/s,i=x/s),this.set(n,i,s,e),this}let T=Math.sqrt((m-p)*(m-p)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(m-p)/T,this.y=(f-_)/T,this.z=(u-h)/T,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ye(this.x,t.x,e.x),this.y=ye(this.y,t.y,e.y),this.z=ye(this.z,t.z,e.z),this.w=ye(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ye(this.x,t,e),this.y=ye(this.y,t,e),this.z=ye(this.z,t,e),this.w=ye(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ye(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};kd.prototype.isVector4=!0;var nn=kd,lh=class extends Ar{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new nn(0,0,t,e),this.scissorTest=!1,this.viewport=new nn(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new hi(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Jo(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qn=class extends lh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},nl=class extends hi{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ch=class extends hi{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Dh=class Dh{constructor(t,e,n,i,s,o,a,l,c,h,f,u,d,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,f,u,d,p,_,m)}set(t,e,n,i,s,o,a,l,c,h,f,u,d,p,_,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=u,g[3]=d,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dh().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/To.setFromMatrixColumn(t,0).length(),s=1/To.setFromMatrixColumn(t,1).length(),o=1/To.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){let u=o*h,d=o*f,p=a*h,_=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+p*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,p=c*h,_=c*f;e[0]=u+_*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,p=c*h,_=c*f;e[0]=u-_*a,e[4]=-o*f,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,d=o*f,p=a*h,_=a*f;e[0]=l*h,e[4]=p*c-d,e[8]=u*c+_,e[1]=l*f,e[5]=_*c+u,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,d=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=_-u*f,e[8]=p*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*f+p,e[10]=u-_*f}else if(t.order==="XZY"){let u=o*l,d=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+_,e[5]=o*h,e[9]=d*f-p,e[2]=p*f-d,e[6]=a*h,e[10]=_*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ly,t,cy)}lookAt(t,e,n){let i=this.elements;return Ii.subVectors(t,e),Ii.lengthSq()===0&&(Ii.z=1),Ii.normalize(),ds.crossVectors(n,Ii),ds.lengthSq()===0&&(Math.abs(n.z)===1?Ii.x+=1e-4:Ii.z+=1e-4,Ii.normalize(),ds.crossVectors(n,Ii)),ds.normalize(),wc.crossVectors(Ii,ds),i[0]=ds.x,i[4]=wc.x,i[8]=Ii.x,i[1]=ds.y,i[5]=wc.y,i[9]=Ii.y,i[2]=ds.z,i[6]=wc.z,i[10]=Ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],p=n[2],_=n[6],m=n[10],g=n[14],T=n[3],A=n[7],y=n[11],M=n[15],w=i[0],C=i[4],x=i[8],b=i[12],R=i[1],k=i[5],L=i[9],Y=i[13],O=i[2],W=i[6],et=i[10],X=i[14],Z=i[3],tt=i[7],D=i[11],st=i[15];return s[0]=o*w+a*R+l*O+c*Z,s[4]=o*C+a*k+l*W+c*tt,s[8]=o*x+a*L+l*et+c*D,s[12]=o*b+a*Y+l*X+c*st,s[1]=h*w+f*R+u*O+d*Z,s[5]=h*C+f*k+u*W+d*tt,s[9]=h*x+f*L+u*et+d*D,s[13]=h*b+f*Y+u*X+d*st,s[2]=p*w+_*R+m*O+g*Z,s[6]=p*C+_*k+m*W+g*tt,s[10]=p*x+_*L+m*et+g*D,s[14]=p*b+_*Y+m*X+g*st,s[3]=T*w+A*R+y*O+M*Z,s[7]=T*C+A*k+y*W+M*tt,s[11]=T*x+A*L+y*et+M*D,s[15]=T*b+A*Y+y*X+M*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],p=t[3],_=t[7],m=t[11],g=t[15],T=l*d-c*u,A=a*d-c*f,y=a*u-l*f,M=o*d-c*h,w=o*u-l*h,C=o*f-a*h;return e*(_*T-m*A+g*y)-n*(p*T-m*M+g*w)+i*(p*A-_*M+g*C)-s*(p*y-_*w+m*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(s*h-a*l)+i*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],p=t[12],_=t[13],m=t[14],g=t[15],T=e*a-n*o,A=e*l-i*o,y=e*c-s*o,M=n*l-i*a,w=n*c-s*a,C=i*c-s*l,x=h*_-f*p,b=h*m-u*p,R=h*g-d*p,k=f*m-u*_,L=f*g-d*_,Y=u*g-d*m,O=T*Y-A*L+y*k+M*R-w*b+C*x;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/O;return t[0]=(a*Y-l*L+c*k)*W,t[1]=(i*L-n*Y-s*k)*W,t[2]=(_*C-m*w+g*M)*W,t[3]=(u*w-f*C-d*M)*W,t[4]=(l*R-o*Y-c*b)*W,t[5]=(e*Y-i*R+s*b)*W,t[6]=(m*y-p*C-g*A)*W,t[7]=(h*C-u*y+d*A)*W,t[8]=(o*L-a*R+c*x)*W,t[9]=(n*R-e*L-s*x)*W,t[10]=(p*w-_*y+g*T)*W,t[11]=(f*y-h*w-d*T)*W,t[12]=(a*b-o*k-l*x)*W,t[13]=(e*k-n*b+i*x)*W,t[14]=(_*A-p*M-m*T)*W,t[15]=(h*M-f*A+u*T)*W,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,f=a+a,u=s*c,d=s*h,p=s*f,_=o*h,m=o*f,g=a*f,T=l*c,A=l*h,y=l*f,M=n.x,w=n.y,C=n.z;return i[0]=(1-(_+g))*M,i[1]=(d+y)*M,i[2]=(p-A)*M,i[3]=0,i[4]=(d-y)*w,i[5]=(1-(u+g))*w,i[6]=(m+T)*w,i[7]=0,i[8]=(p+A)*C,i[9]=(m-T)*C,i[10]=(1-(u+_))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=To.set(i[0],i[1],i[2]).length(),a=To.set(i[4],i[5],i[6]).length(),l=To.set(i[8],i[9],i[10]).length();s<0&&(o=-o),ar.copy(this);let c=1/o,h=1/a,f=1/l;return ar.elements[0]*=c,ar.elements[1]*=c,ar.elements[2]*=c,ar.elements[4]*=h,ar.elements[5]*=h,ar.elements[6]*=h,ar.elements[8]*=f,ar.elements[9]*=f,ar.elements[10]*=f,e.setFromRotationMatrix(ar),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,s,o,a=ur,l=!1){let c=this.elements,h=2*s/(e-t),f=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),p,_;if(l)p=s/(o-s),_=o*s/(o-s);else if(a===ur)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===qo)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=ur,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-i),u=-(e+t)/(e-t),d=-(n+i)/(n-i),p,_;if(l)p=1/(o-s),_=o/(o-s);else if(a===ur)p=-2/(o-s),_=-(o+s)/(o-s);else if(a===qo)p=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Dh.prototype.isMatrix4=!0;var Be=Dh,To=new G,ar=new Be,ly=new G(0,0,0),cy=new G(1,1,1),ds=new G,wc=new G,Ii=new G,Im=new Be,Lm=new gn,Ni=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Im.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Im,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lm.setFromEuler(this),this.setFromQuaternion(Lm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ni.DEFAULT_ORDER="XYZ";var $o=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},hy=0,Dm=new G,Ao=new gn,Wr=new Be,Tc=new G,Oa=new G,uy=new G,fy=new gn,Nm=new G(1,0,0),Um=new G(0,1,0),Fm=new G(0,0,1),Om={type:"added"},dy={type:"removed"},Eo={type:"childadded",child:null},Ef={type:"childremoved",child:null},_n=class r extends Ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new G,e=new Ni,n=new gn,i=new G(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Be},normalMatrix:{value:new re}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ao.setFromAxisAngle(t,e),this.quaternion.multiply(Ao),this}rotateOnWorldAxis(t,e){return Ao.setFromAxisAngle(t,e),this.quaternion.premultiply(Ao),this}rotateX(t){return this.rotateOnAxis(Nm,t)}rotateY(t){return this.rotateOnAxis(Um,t)}rotateZ(t){return this.rotateOnAxis(Fm,t)}translateOnAxis(t,e){return Dm.copy(t).applyQuaternion(this.quaternion),this.position.add(Dm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nm,t)}translateY(t){return this.translateOnAxis(Um,t)}translateZ(t){return this.translateOnAxis(Fm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wr.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Tc.copy(t):Tc.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wr.lookAt(Oa,Tc,this.up):Wr.lookAt(Tc,Oa,this.up),this.quaternion.setFromRotationMatrix(Wr),i&&(Wr.extractRotation(i.matrixWorld),Ao.setFromRotationMatrix(Wr),this.quaternion.premultiply(Ao.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Om),Eo.child=t,this.dispatchEvent(Eo),Eo.child=null):le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(dy),Ef.child=t,this.dispatchEvent(Ef),Ef.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wr.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Om),Eo.child=t,this.dispatchEvent(Eo),Eo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,t,uy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,fy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};_n.DEFAULT_UP=new G(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kn=class extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}},py={type:"move"},Ko=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&u>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(py)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Kn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},q0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},Ac={h:0,s:0,l:0};function Cf(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Te.workingColorSpace){return this.r=t,this.g=e,this.b=n,Te.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Te.workingColorSpace){if(t=Id(t,1),e=ye(e,0,1),n=ye(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Cf(o,s,t+1/3),this.g=Cf(o,s,t),this.b=Cf(o,s,t-1/3)}return Te.colorSpaceToWorking(this,i),this}setStyle(t,e=en){function n(s){s!==void 0&&parseFloat(s)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:oe("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){let n=q0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kr(t.r),this.g=Kr(t.g),this.b=Kr(t.b),this}copyLinearToSRGB(t){return this.r=Go(t.r),this.g=Go(t.g),this.b=Go(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return Te.workingToColorSpace($n.copy(this),t),Math.round(ye($n.r*255,0,255))*65536+Math.round(ye($n.g*255,0,255))*256+Math.round(ye($n.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Te.workingColorSpace){Te.workingToColorSpace($n.copy(this),e);let n=$n.r,i=$n.g,s=$n.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Te.workingColorSpace){return Te.workingToColorSpace($n.copy(this),e),t.r=$n.r,t.g=$n.g,t.b=$n.b,t}getStyle(t=en){Te.workingToColorSpace($n.copy(this),t);let e=$n.r,n=$n.g,i=$n.b;return t!==en?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ps),this.setHSL(ps.h+t,ps.s+e,ps.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ps),t.getHSL(Ac);let n=Za(ps.h,Ac.h,e),i=Za(ps.s,Ac.s,e),s=Za(ps.l,Ac.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$n=new Kt;Kt.NAMES=q0;var Qr=class extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},lr=new G,Xr=new G,Rf=new G,qr=new G,Co=new G,Ro=new G,Bm=new G,Pf=new G,If=new G,Lf=new G,Df=new nn,Nf=new nn,Uf=new nn,$r=class r{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),lr.subVectors(t,e),i.cross(lr);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){lr.subVectors(i,e),Xr.subVectors(n,e),Rf.subVectors(t,e);let o=lr.dot(lr),a=lr.dot(Xr),l=lr.dot(Rf),c=Xr.dot(Xr),h=Xr.dot(Rf),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let u=1/f,d=(c*l-a*h)*u,p=(o*h-a*l)*u;return s.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,qr)===null?!1:qr.x>=0&&qr.y>=0&&qr.x+qr.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,qr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,qr.x),l.addScaledVector(o,qr.y),l.addScaledVector(a,qr.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Df.setScalar(0),Nf.setScalar(0),Uf.setScalar(0),Df.fromBufferAttribute(t,e),Nf.fromBufferAttribute(t,n),Uf.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Df,s.x),o.addScaledVector(Nf,s.y),o.addScaledVector(Uf,s.z),o}static isFrontFacing(t,e,n,i){return lr.subVectors(n,e),Xr.subVectors(t,e),lr.cross(Xr).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return lr.subVectors(this.c,this.b),Xr.subVectors(this.a,this.b),lr.cross(Xr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;Co.subVectors(i,n),Ro.subVectors(s,n),Pf.subVectors(t,n);let l=Co.dot(Pf),c=Ro.dot(Pf);if(l<=0&&c<=0)return e.copy(n);If.subVectors(t,i);let h=Co.dot(If),f=Ro.dot(If);if(h>=0&&f<=h)return e.copy(i);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Co,o);Lf.subVectors(t,s);let d=Co.dot(Lf),p=Ro.dot(Lf);if(p>=0&&d<=p)return e.copy(s);let _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Ro,a);let m=h*p-d*f;if(m<=0&&f-h>=0&&d-p>=0)return Bm.subVectors(s,i),a=(f-h)/(f-h+(d-p)),e.copy(i).addScaledVector(Bm,a);let g=1/(m+_+u);return o=_*g,a=u*g,e.copy(n).addScaledVector(Co,o).addScaledVector(Ro,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Er=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cr.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cr.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=cr.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,cr):cr.fromBufferAttribute(s,o),cr.applyMatrix4(t.matrixWorld),this.expandByPoint(cr);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ec.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ec.copy(n.boundingBox)),Ec.applyMatrix4(t.matrixWorld),this.union(Ec)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cr),cr.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ba),Cc.subVectors(this.max,Ba),Po.subVectors(t.a,Ba),Io.subVectors(t.b,Ba),Lo.subVectors(t.c,Ba),ms.subVectors(Io,Po),gs.subVectors(Lo,Io),Vs.subVectors(Po,Lo);let e=[0,-ms.z,ms.y,0,-gs.z,gs.y,0,-Vs.z,Vs.y,ms.z,0,-ms.x,gs.z,0,-gs.x,Vs.z,0,-Vs.x,-ms.y,ms.x,0,-gs.y,gs.x,0,-Vs.y,Vs.x,0];return!Ff(e,Po,Io,Lo,Cc)||(e=[1,0,0,0,1,0,0,0,1],!Ff(e,Po,Io,Lo,Cc))?!1:(Rc.crossVectors(ms,gs),e=[Rc.x,Rc.y,Rc.z],Ff(e,Po,Io,Lo,Cc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cr).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cr).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Yr=[new G,new G,new G,new G,new G,new G,new G,new G],cr=new G,Ec=new Er,Po=new G,Io=new G,Lo=new G,ms=new G,gs=new G,Vs=new G,Ba=new G,Cc=new G,Rc=new G,Gs=new G;function Ff(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Gs.fromArray(r,s);let a=i.x*Math.abs(Gs.x)+i.y*Math.abs(Gs.y)+i.z*Math.abs(Gs.z),l=t.dot(Gs),c=e.dot(Gs),h=n.dot(Gs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var bn=new G,Pc=new vt,my=0,Mi=class extends Ar{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:my++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Rd,this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Pc.fromBufferAttribute(this,e),Pc.applyMatrix3(t),this.setXY(e,Pc.x,Pc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyMatrix3(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyMatrix4(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyNormalMatrix(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.transformDirection(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hr(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hr(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hr(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),i=We(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),i=We(i,this.array),s=We(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var il=class extends Mi{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var rl=class extends Mi{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ae=class extends Mi{constructor(t,e,n){super(new Float32Array(t),e,n)}},gy=new Er,za=new G,Of=new G,jr=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):gy.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;za.subVectors(t,this.center);let e=za.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(za,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Of.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(za.copy(t.center).add(Of)),this.expandByPoint(za.copy(t.center).sub(Of))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},_y=0,Zi=new Be,Bf=new _n,Do=new G,Li=new Er,ka=new Er,Dn=new G,xn=class r extends Ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=wr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vx(t)?rl:il)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new re().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Zi.makeRotationFromQuaternion(t),this.applyMatrix4(Zi),this}rotateX(t){return Zi.makeRotationX(t),this.applyMatrix4(Zi),this}rotateY(t){return Zi.makeRotationY(t),this.applyMatrix4(Zi),this}rotateZ(t){return Zi.makeRotationZ(t),this.applyMatrix4(Zi),this}translate(t,e,n){return Zi.makeTranslation(t,e,n),this.applyMatrix4(Zi),this}scale(t,e,n){return Zi.makeScale(t,e,n),this.applyMatrix4(Zi),this}lookAt(t){return Bf.lookAt(t),Bf.updateMatrix(),this.applyMatrix4(Bf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Do).negate(),this.translate(Do.x,Do.y,Do.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ae(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Er);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];Li.setFromBufferAttribute(s),this.morphTargetsRelative?(Dn.addVectors(this.boundingBox.min,Li.min),this.boundingBox.expandByPoint(Dn),Dn.addVectors(this.boundingBox.max,Li.max),this.boundingBox.expandByPoint(Dn)):(this.boundingBox.expandByPoint(Li.min),this.boundingBox.expandByPoint(Li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(Li.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];ka.setFromBufferAttribute(a),this.morphTargetsRelative?(Dn.addVectors(Li.min,ka.min),Li.expandByPoint(Dn),Dn.addVectors(Li.max,ka.max),Li.expandByPoint(Dn)):(Li.expandByPoint(ka.min),Li.expandByPoint(ka.max))}Li.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Dn.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Dn));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Dn.fromBufferAttribute(a,c),l&&(Do.fromBufferAttribute(t,c),Dn.add(Do)),i=Math.max(i,n.distanceToSquared(Dn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Mi(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<n.count;x++)a[x]=new G,l[x]=new G;let c=new G,h=new G,f=new G,u=new vt,d=new vt,p=new vt,_=new G,m=new G;function g(x,b,R){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,b),f.fromBufferAttribute(n,R),u.fromBufferAttribute(s,x),d.fromBufferAttribute(s,b),p.fromBufferAttribute(s,R),h.sub(c),f.sub(c),d.sub(u),p.sub(u);let k=1/(d.x*p.y-p.x*d.y);isFinite(k)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(k),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(k),a[x].add(_),a[b].add(_),a[R].add(_),l[x].add(m),l[b].add(m),l[R].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let x=0,b=T.length;x<b;++x){let R=T[x],k=R.start,L=R.count;for(let Y=k,O=k+L;Y<O;Y+=3)g(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}let A=new G,y=new G,M=new G,w=new G;function C(x){M.fromBufferAttribute(i,x),w.copy(M);let b=a[x];A.copy(b),A.sub(M.multiplyScalar(M.dot(b))).normalize(),y.crossVectors(w,b);let k=y.dot(l[x])<0?-1:1;o.setXYZW(x,A.x,A.y,A.z,k)}for(let x=0,b=T.length;x<b;++x){let R=T[x],k=R.start,L=R.count;for(let Y=k,O=k+L;Y<O;Y+=3)C(t.getX(Y+0)),C(t.getX(Y+1)),C(t.getX(Y+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Mi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let i=new G,s=new G,o=new G,a=new G,l=new G,c=new G,h=new G,f=new G;if(t)for(let u=0,d=t.count;u<d;u+=3){let p=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,p),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Dn.fromBufferAttribute(t,e),Dn.normalize(),t.setXYZ(e,Dn.x,Dn.y,Dn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),d=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let g=0;g<h;g++)u[p++]=c[d++]}return new Mi(u,h,f)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],f=s[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},hh=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Rd,this.updateRanges=[],this.version=0,this.uuid=wr()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},ci=new G,sl=class r{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ci.fromBufferAttribute(this,e),ci.applyMatrix4(t),this.setXYZ(e,ci.x,ci.y,ci.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ci.fromBufferAttribute(this,e),ci.applyNormalMatrix(t),this.setXYZ(e,ci.x,ci.y,ci.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ci.fromBufferAttribute(this,e),ci.transformDirection(t),this.setXYZ(e,ci.x,ci.y,ci.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=hr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=We(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=hr(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=hr(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=hr(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=hr(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=We(e,this.array),n=We(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=We(e,this.array),n=We(n,this.array),i=We(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=We(e,this.array),n=We(n,this.array),i=We(i,this.array),s=We(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){el("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Mi(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){el("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},zf=new G,xy=new G,yy=new re,Di=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=zf.subVectors(n,e).cross(xy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(zf),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||yy.getNormalMatrix(t),i=this.coplanarPoint(zf).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},vy=0,fr=class extends Ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=wr(),this.name="",this.type="Material",this.blending=sa,this.side=Ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dd,this.blendDst=pd,this.blendEquation=Ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=U0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qc,this.stencilZFail=Qc,this.stencilZPass=Qc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){oe(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){oe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Di().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new vt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new vt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},dr=class extends fr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},No,Va=new G,Uo=new G,Fo=new G,Oo=new vt,Ga=new vt,Y0=new Be,Ic=new G,Ha=new G,Lc=new G,zm=new vt,kf=new vt,km=new vt,Cr=class extends _n{constructor(t=new dr){if(super(),this.isSprite=!0,this.type="Sprite",No===void 0){No=new xn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new hh(e,5);No.setIndex([0,1,2,0,2,3]),No.setAttribute("position",new sl(n,3,0,!1)),No.setAttribute("uv",new sl(n,2,3,!1))}this.geometry=No,this.material=t,this.center=new vt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&le('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Uo.setFromMatrixScale(this.matrixWorld),Y0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Fo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Uo.multiplyScalar(-Fo.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;Dc(Ic.set(-.5,-.5,0),Fo,o,Uo,i,s),Dc(Ha.set(.5,-.5,0),Fo,o,Uo,i,s),Dc(Lc.set(.5,.5,0),Fo,o,Uo,i,s),zm.set(0,0),kf.set(1,0),km.set(1,1);let a=t.ray.intersectTriangle(Ic,Ha,Lc,!1,Va);if(a===null&&(Dc(Ha.set(-.5,.5,0),Fo,o,Uo,i,s),kf.set(0,1),a=t.ray.intersectTriangle(Ic,Lc,Ha,!1,Va),a===null))return;let l=t.ray.origin.distanceTo(Va);l<t.near||l>t.far||e.push({distance:l,point:Va.clone(),uv:$r.getInterpolation(Va,Ic,Ha,Lc,zm,kf,km,new vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Dc(r,t,e,n,i,s){Oo.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Ga.x=s*Oo.x-i*Oo.y,Ga.y=i*Oo.x+s*Oo.y):Ga.copy(Oo),r.copy(t),r.x+=Ga.x,r.y+=Ga.y,r.applyMatrix4(Y0)}var Zr=new G,Vf=new G,Nc=new G,Uc=new G,Qo=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Zr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zr.copy(this.origin).addScaledVector(this.direction,e),Zr.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Vf.copy(t).add(e).multiplyScalar(.5),Nc.copy(e).sub(t).normalize(),Uc.copy(this.origin).sub(Vf);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Nc),a=Uc.dot(this.direction),l=-Uc.dot(Nc),c=Uc.lengthSq(),h=Math.abs(1-o*o),f,u,d,p;if(h>0)if(f=o*l-a,u=o*a-l,p=s*h,f>=0)if(u>=-p)if(u<=p){let _=1/h;f*=_,u*=_,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-p?(f=Math.max(0,-(-o*s+a)),u=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c):u<=p?(f=0,u=Math.min(Math.max(-s,-l),s),d=u*(u+2*l)+c):(f=Math.max(0,-(o*s+a)),u=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c);else u=o>0?-s:s,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Vf).addScaledVector(Nc,u),d}intersectSphere(t,e){if(t.radius<0)return null;Zr.subVectors(t.center,this.origin);let n=Zr.dot(this.direction),i=Zr.dot(Zr)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Zr)!==null}intersectTriangle(t,e,n,i,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=t.x-o.x,u=t.y-o.y,d=t.z-o.z,p=e.x-o.x,_=e.y-o.y,m=e.z-o.z,g=n.x-o.x,T=n.y-o.y,A=n.z-o.z,y=Math.abs(l),M=Math.abs(c),w=Math.abs(h),C,x,b,R,k,L,Y,O,W,et,X,Z;if(y>=M&&y>=w?(b=l,L=f,W=p,Z=g,l>=0?(C=c,x=h,R=u,k=d,Y=_,O=m,et=T,X=A):(C=h,x=c,R=d,k=u,Y=m,O=_,et=A,X=T)):M>=w?(b=c,L=u,W=_,Z=T,c>=0?(C=h,x=l,R=d,k=f,Y=m,O=p,et=A,X=g):(C=l,x=h,R=f,k=d,Y=p,O=m,et=g,X=A)):(b=h,L=d,W=m,Z=A,h>=0?(C=l,x=c,R=f,k=u,Y=p,O=_,et=g,X=T):(C=c,x=l,R=u,k=f,Y=_,O=p,et=T,X=g)),b===0)return null;let tt=C/b,D=x/b,st=1/b,gt=R-tt*L,yt=k-D*L,Et=Y-tt*W,Bt=O-D*W,Lt=et-tt*Z,z=X-D*Z,B=Lt*Bt-z*Et,F=gt*z-yt*Lt,N=Et*yt-Bt*gt;if(i){if(B<0||F<0||N<0)return null}else if((B<0||F<0||N<0)&&(B>0||F>0||N>0))return null;let V=B+F+N;if(V===0)return null;let rt=st*(B*L+F*W+N*Z);return(V>0?rt<0:rt>0)?null:this.at(rt/V,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},kn=class extends fr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Vm=new Be,Hs=new Qo,Fc=new jr,Gm=new G,Oc=new G,Bc=new G,zc=new G,Gf=new G,kc=new G,Hm=new G,Vc=new G,Ie=class extends _n{constructor(t=new xn,e=new kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){kc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],f=s[l];h!==0&&(Gf.fromBufferAttribute(f,t),o?kc.addScaledVector(Gf,h):kc.addScaledVector(Gf.sub(e),h))}e.add(kc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fc.copy(n.boundingSphere),Fc.applyMatrix4(s),Hs.copy(t.ray).recast(t.near),!(Fc.containsPoint(Hs.origin)===!1&&(Hs.intersectSphere(Fc,Gm)===null||Hs.origin.distanceToSquared(Gm)>(t.far-t.near)**2))&&(Vm.copy(s).invert(),Hs.copy(t.ray).applyMatrix4(Vm),!(n.boundingBox!==null&&Hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hs)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let m=u[p],g=o[m.materialIndex],T=Math.max(m.start,d.start),A=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=T,M=A;y<M;y+=3){let w=a.getX(y),C=a.getX(y+1),x=a.getX(y+2);i=Gc(this,g,t,n,c,h,f,w,C,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){let T=a.getX(m),A=a.getX(m+1),y=a.getX(m+2);i=Gc(this,o,t,n,c,h,f,T,A,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let m=u[p],g=o[m.materialIndex],T=Math.max(m.start,d.start),A=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=T,M=A;y<M;y+=3){let w=y,C=y+1,x=y+2;i=Gc(this,g,t,n,c,h,f,w,C,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){let T=m,A=m+1,y=m+2;i=Gc(this,o,t,n,c,h,f,T,A,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Sy(r,t,e,n,i,s,o,a){let l;if(t.side===Vn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Ts,a),l===null)return null;Vc.copy(a),Vc.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Vc);return c<e.near||c>e.far?null:{distance:c,point:Vc.clone(),object:r}}function Gc(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Oc),r.getVertexPosition(l,Bc),r.getVertexPosition(c,zc);let h=Sy(r,t,e,n,Oc,Bc,zc,Hm);if(h){let f=new G;$r.getBarycoord(Hm,Oc,Bc,zc,f),i&&(h.uv=$r.getInterpolatedAttribute(i,a,l,c,f,new vt)),s&&(h.uv1=$r.getInterpolatedAttribute(s,a,l,c,f,new vt)),o&&(h.normal=$r.getInterpolatedAttribute(o,a,l,c,f,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new G,materialIndex:0};$r.getNormal(Oc,Bc,zc,u.normal),h.face=u,h.barycoord=f}return h}var ol=class extends hi{constructor(t=null,e=1,n=1,i,s,o,a,l,c=Un,h=Un,f,u){super(null,o,a,l,c,h,i,s,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var al=class extends Mi{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Bo=new Be,Wm=new Be,Hc=[],Xm=new Er,My=new Be,Wa=new Ie,Xa=new jr,ll=class extends Ie{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new al(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,My)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Er),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bo),Xm.copy(t.boundingBox).applyMatrix4(Bo),this.boundingBox.union(Xm)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new jr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bo),Xa.copy(t.boundingSphere).applyMatrix4(Bo),this.boundingSphere.union(Xa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Wa.geometry=this.geometry,Wa.material=this.material,Wa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xa.copy(this.boundingSphere),Xa.applyMatrix4(n),t.ray.intersectsSphere(Xa)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Bo),Wm.multiplyMatrices(n,Bo),Wa.matrixWorld=Wm,Wa.raycast(t,Hc);for(let o=0,a=Hc.length;o<a;o++){let l=Hc[o];l.instanceId=s,l.object=this,e.push(l)}Hc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new al(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ol(new Float32Array(i*this.count),i,this.count,Gh,Ki));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ws=new jr,by=new vt(.5,.5),Wc=new G,jo=class{constructor(t=new Di,e=new Di,n=new Di,i=new Di,s=new Di,o=new Di){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ur,n=!1){let i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],f=s[5],u=s[6],d=s[7],p=s[8],_=s[9],m=s[10],g=s[11],T=s[12],A=s[13],y=s[14],M=s[15];if(i[0].setComponents(c-o,d-h,g-p,M-T).normalize(),i[1].setComponents(c+o,d+h,g+p,M+T).normalize(),i[2].setComponents(c+a,d+f,g+_,M+A).normalize(),i[3].setComponents(c-a,d-f,g-_,M-A).normalize(),n)i[4].setComponents(l,u,m,y).normalize(),i[5].setComponents(c-l,d-u,g-m,M-y).normalize();else if(i[4].setComponents(c-l,d-u,g-m,M-y).normalize(),e===ur)i[5].setComponents(c+l,d+u,g+m,M+y).normalize();else if(e===qo)i[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ws.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ws.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ws)}intersectsSprite(t){Ws.center.set(0,0,0);let e=by.distanceTo(t.center);return Ws.radius=.7071067811865476+e,Ws.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ws)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Wc.x=i.normal.x>0?t.max.x:t.min.x,Wc.y=i.normal.y>0?t.max.y:t.min.y,Wc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Wc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var uh=class extends fr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},qm=new Be,Qf=new Qo,Xc=new jr,qc=new G,qs=class extends _n{constructor(t=new xn,e=new uh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xc.copy(n.boundingSphere),Xc.applyMatrix4(i),Xc.radius+=s,t.ray.intersectsSphere(Xc)===!1)return;qm.copy(i).invert(),Qf.copy(t.ray).applyMatrix4(qm);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=u,_=d;p<_;p++){let m=c.getX(p);qc.fromBufferAttribute(f,m),Ym(qc,m,l,i,t,e,this)}}else{let u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let p=u,_=d;p<_;p++)qc.fromBufferAttribute(f,p),Ym(qc,p,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Ym(r,t,e,n,i,s,o){let a=Qf.distanceSqToPoint(r);if(a<e){let l=new G;Qf.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var cl=class extends hi{constructor(t=[],e=As,n,i,s,o,a,l,c,h){super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},$i=class extends hi{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var xs=class extends hi{constructor(t,e,n=mr,i,s,o,a=Un,l=Un,c,h=Tr,f=1){if(h!==Tr&&h!==Es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Jo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},fh=class extends xs{constructor(t,e=mr,n=As,i,s,o=Un,a=Un,l,c=Tr){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,i,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},hl=class extends hi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ys=class r extends xn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,d=0;p("z","y","x",-1,-1,n,e,t,o,s,0),p("z","y","x",1,-1,n,e,-t,o,s,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,s,4),p("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(f,2));function p(_,m,g,T,A,y,M,w,C,x,b){let R=y/C,k=M/x,L=y/2,Y=M/2,O=w/2,W=C+1,et=x+1,X=0,Z=0,tt=new G;for(let D=0;D<et;D++){let st=D*k-Y;for(let gt=0;gt<W;gt++){let yt=gt*R-L;tt[_]=yt*T,tt[m]=st*A,tt[g]=O,c.push(tt.x,tt.y,tt.z),tt[_]=0,tt[m]=0,tt[g]=w>0?1:-1,h.push(tt.x,tt.y,tt.z),f.push(gt/C),f.push(1-D/x),X+=1}}for(let D=0;D<x;D++)for(let st=0;st<C;st++){let gt=u+st+W*D,yt=u+st+W*(D+1),Et=u+(st+1)+W*(D+1),Bt=u+(st+1)+W*D;l.push(gt,yt,Bt),l.push(yt,Et,Bt),Z+=6}a.addGroup(d,Z,b),d+=Z,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ul=class r extends xn{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],f=[],u=[],d=[],p=0,_=[],m=n/2,g=0;T(),o===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new Ae(f,3)),this.setAttribute("normal",new Ae(u,3)),this.setAttribute("uv",new Ae(d,2));function T(){let y=new G,M=new G,w=0,C=(e-t)/n;for(let x=0;x<=s;x++){let b=[],R=x/s,k=R*(e-t)+t;for(let L=0;L<=i;L++){let Y=L/i,O=Y*l+a,W=Math.sin(O),et=Math.cos(O);M.x=k*W,M.y=-R*n+m,M.z=k*et,f.push(M.x,M.y,M.z),y.set(W,C,et).normalize(),u.push(y.x,y.y,y.z),d.push(Y,1-R),b.push(p++)}_.push(b)}for(let x=0;x<i;x++)for(let b=0;b<s;b++){let R=_[b][x],k=_[b+1][x],L=_[b+1][x+1],Y=_[b][x+1];(t>0||b!==0)&&(h.push(R,k,Y),w+=3),(e>0||b!==s-1)&&(h.push(k,L,Y),w+=3)}c.addGroup(g,w,0),g+=w}function A(y){let M=p,w=new vt,C=new G,x=0,b=y===!0?t:e,R=y===!0?1:-1;for(let L=1;L<=i;L++)f.push(0,m*R,0),u.push(0,R,0),d.push(.5,.5),p++;let k=p;for(let L=0;L<=i;L++){let O=L/i*l+a,W=Math.cos(O),et=Math.sin(O);C.x=b*et,C.y=m*R,C.z=b*W,f.push(C.x,C.y,C.z),u.push(0,R,0),w.x=W*.5+.5,w.y=et*.5*R+.5,d.push(w.x,w.y),p++}for(let L=0;L<i;L++){let Y=M+L,O=k+L;y===!0?h.push(O,O+1,Y):h.push(O+1,O,Y),x+=3}c.addGroup(g,x,y===!0?1:2),g+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ui=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){oe("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],u=n[i+1]-h,d=(o-h)/u;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new vt:new G);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new G,i=[],s=[],o=[],a=new G,l=new Be;for(let d=0;d<=t;d++){let p=d/t;i[d]=this.getTangentAt(p,new G)}s[0]=new G,o[0]=new G;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ye(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(ye(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ta=class extends Ui{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new vt){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},dh=class extends ta{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ld(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,f){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,d*=h,i(o,a,u,d)},calc:function(s){let o=s*s,a=o*s;return r+t*s+e*o+n*a}}}var Zm=new G,Jm=new G,Hf=new Ld,Wf=new Ld,Xf=new Ld,ph=class extends Ui{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new G){let n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Jm.subVectors(i[0],i[1]).add(i[0]),c=Jm);let f=i[a%s],u=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Zm.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Zm),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),Hf.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,p,_,m),Wf.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,p,_,m),Xf.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(Hf.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Wf.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Xf.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Hf.calc(l),Wf.calc(l),Xf.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new G().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function $m(r,t,e,n,i){let s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function wy(r,t){let e=1-r;return e*e*t}function Ty(r,t){return 2*(1-r)*r*t}function Ay(r,t){return r*r*t}function Ja(r,t,e,n){return wy(r,t)+Ty(r,e)+Ay(r,n)}function Ey(r,t){let e=1-r;return e*e*e*t}function Cy(r,t){let e=1-r;return 3*e*e*r*t}function Ry(r,t){return 3*(1-r)*r*r*t}function Py(r,t){return r*r*r*t}function $a(r,t,e,n,i){return Ey(r,t)+Cy(r,e)+Ry(r,n)+Py(r,i)}var fl=class extends Ui{constructor(t=new vt,e=new vt,n=new vt,i=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new vt){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set($a(t,i.x,s.x,o.x,a.x),$a(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},mh=class extends Ui{constructor(t=new G,e=new G,n=new G,i=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new G){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set($a(t,i.x,s.x,o.x,a.x),$a(t,i.y,s.y,o.y,a.y),$a(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},dl=class extends Ui{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gh=class extends Ui{constructor(t=new G,e=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new G){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new G){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pl=class extends Ui{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Ja(t,i.x,s.x,o.x),Ja(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_h=class extends Ui{constructor(t=new G,e=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new G){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Ja(t,i.x,s.x,o.x),Ja(t,i.y,s.y,o.y),Ja(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ml=class extends Ui{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){let n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set($m(a,l.x,c.x,h.x,f.x),$m(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new vt().fromArray(i))}return this}},jf=Object.freeze({__proto__:null,ArcCurve:dh,CatmullRomCurve3:ph,CubicBezierCurve:fl,CubicBezierCurve3:mh,EllipseCurve:ta,LineCurve:dl,LineCurve3:gh,QuadraticBezierCurve:pl,QuadraticBezierCurve3:_h,SplineCurve:ml}),xh=class extends Ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jf[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new jf[i.type]().fromJSON(i))}return this}},Rr=class extends xh{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new dl(this.currentPoint.clone(),new vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new pl(this.currentPoint.clone(),new vt(t,e),new vt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){let a=new fl(this.currentPoint.clone(),new vt(t,e),new vt(n,i),new vt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ml(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){let c=new ta(t,e,n,i,s,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},gl=class extends Rr{constructor(t){super(t),this.uuid=wr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Rr().fromJSON(i))}return this}};function Iy(r,t,e=2){let n=t&&t.length,i=n?t[0]*e:r.length,s=Z0(r,0,i,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=Fy(r,t,s,e)),r.length>80*e){a=r[0],l=r[1];let h=a,f=l;for(let u=e;u<i;u+=e){let d=r[u],p=r[u+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>f&&(f=p)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return _l(s,o,e,a,l,c,0),o}function Z0(r,t,e,n,i){let s;if(i===Yy(r,t,e,n)>0)for(let o=t;o<e;o+=n)s=Km(o/n|0,r[o],r[o+1],s);else for(let o=e-n;o>=t;o-=n)s=Km(o/n|0,r[o],r[o+1],s);return s&&ea(s,s.next)&&(yl(s),s=s.next),s}function Ys(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(ea(e,e.next)||sn(e.prev,e,e.next)===0)){if(yl(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function _l(r,t,e,n,i,s,o){if(!r)return;!o&&s&&Vy(r,n,i,s);let a=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?Dy(r,n,i,s):Ly(r)){t.push(l.i,r.i,c.i),yl(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=Ny(Ys(r),t),_l(r,t,e,n,i,s,2)):o===2&&Uy(r,t,e,n,i,s):_l(Ys(r),t,e,n,i,s,1);break}}}function Ly(r){let t=r.prev,e=r,n=r.next;if(sn(t,e,n)>=0)return!1;let i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,s,o),f=Math.min(a,l,c),u=Math.max(i,s,o),d=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=f&&p.y<=d&&qa(i,a,s,l,o,c,p.x,p.y)&&sn(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Dy(r,t,e,n){let i=r.prev,s=r,o=r.next;if(sn(i,s,o)>=0)return!1;let a=i.x,l=s.x,c=o.x,h=i.y,f=s.y,u=o.y,d=Math.min(a,l,c),p=Math.min(h,f,u),_=Math.max(a,l,c),m=Math.max(h,f,u),g=td(d,p,t,e,n),T=td(_,m,t,e,n),A=r.prevZ,y=r.nextZ;for(;A&&A.z>=g&&y&&y.z<=T;){if(A.x>=d&&A.x<=_&&A.y>=p&&A.y<=m&&A!==i&&A!==o&&qa(a,h,l,f,c,u,A.x,A.y)&&sn(A.prev,A,A.next)>=0||(A=A.prevZ,y.x>=d&&y.x<=_&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&qa(a,h,l,f,c,u,y.x,y.y)&&sn(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;A&&A.z>=g;){if(A.x>=d&&A.x<=_&&A.y>=p&&A.y<=m&&A!==i&&A!==o&&qa(a,h,l,f,c,u,A.x,A.y)&&sn(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;y&&y.z<=T;){if(y.x>=d&&y.x<=_&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&qa(a,h,l,f,c,u,y.x,y.y)&&sn(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Ny(r,t){let e=r;do{let n=e.prev,i=e.next.next;!ea(n,i)&&$0(n,e,e.next,i)&&xl(n,i)&&xl(i,n)&&(t.push(n.i,e.i,i.i),yl(e),yl(e.next),e=r=i),e=e.next}while(e!==r);return Ys(e)}function Uy(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Wy(o,a)){let l=K0(o,a);o=Ys(o,o.next),l=Ys(l,l.next),_l(o,t,e,n,i,s,0),_l(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function Fy(r,t,e,n){let i=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=Z0(r,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Hy(c))}i.sort(Oy);for(let s=0;s<i.length;s++)e=By(i[s],e);return e}function Oy(r,t){let e=r.x-t.x;if(e===0&&(e=r.y-t.y,e===0)){let n=(r.next.y-r.y)/(r.next.x-r.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function By(r,t){let e=zy(r,t);if(!e)return t;let n=K0(e,r);return Ys(n,n.next),Ys(e,e.next)}function zy(r,t){let e=t,n=r.x,i=r.y,s=-1/0,o;if(ea(r,e))return e;do{if(ea(r,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let f=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>s&&(s=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&J0(i<c?n:s,i,l,c,i<c?s:n,i,e.x,e.y)){let f=Math.abs(i-e.y)/(n-e.x);xl(e,r)&&(f<h||f===h&&(e.x>o.x||e.x===o.x&&ky(o,e)))&&(o=e,h=f)}e=e.next}while(e!==a);return o}function ky(r,t){return sn(r.prev,r,t.prev)<0&&sn(t.next,r,r.next)<0}function Vy(r,t,e,n){let i=r;do i.z===0&&(i.z=td(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Gy(i)}function Gy(r){let t,e=1;do{let n=r,i;r=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,e*=2}while(t>1);return r}function td(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Hy(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function J0(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function qa(r,t,e,n,i,s,o,a){return!(r===o&&t===a)&&J0(r,t,e,n,i,s,o,a)}function Wy(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Xy(r,t)&&(xl(r,t)&&xl(t,r)&&qy(r,t)&&(sn(r.prev,r,t.prev)||sn(r,t.prev,t))||ea(r,t)&&sn(r.prev,r,r.next)>0&&sn(t.prev,t,t.next)>0)}function sn(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function ea(r,t){return r.x===t.x&&r.y===t.y}function $0(r,t,e,n){let i=Zc(sn(r,t,e)),s=Zc(sn(r,t,n)),o=Zc(sn(e,n,r)),a=Zc(sn(e,n,t));return!!(i!==s&&o!==a||i===0&&Yc(r,e,t)||s===0&&Yc(r,n,t)||o===0&&Yc(e,r,n)||a===0&&Yc(e,t,n))}function Yc(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Zc(r){return r>0?1:r<0?-1:0}function Xy(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&$0(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function xl(r,t){return sn(r.prev,r,r.next)<0?sn(r,t,r.next)>=0&&sn(r,r.prev,t)>=0:sn(r,t,r.prev)<0||sn(r,r.next,t)<0}function qy(r,t){let e=r,n=!1,i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function K0(r,t){let e=ed(r.i,r.x,r.y),n=ed(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Km(r,t,e,n){let i=ed(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function yl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ed(r,t,e){return{i:r,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Yy(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var nd=class{static triangulate(t,e,n=2){return Iy(t,e,n)}},br=class r{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];Qm(t),jm(n,t);let o=t.length;e.forEach(Qm);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,jm(n,e[l]);let a=nd.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Qm(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function jm(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var vl=class r extends xn{constructor(t=new gl([new vt(.5,.5),new vt(-.5,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Ae(i,3)),this.setAttribute("uv",new Ae(s,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:Zy,A,y=!1,M,w,C,x;if(g){A=g.getSpacedPoints(h),y=!0,u=!1;let I=g.isCatmullRomCurve3?g.closed:!1;M=g.computeFrenetFrames(h,I),w=new G,C=new G,x=new G}u||(m=0,d=0,p=0,_=0);let b=a.extractPoints(c),R=b.shape,k=b.holes;if(!br.isClockWise(R)){R=R.reverse();for(let I=0,q=k.length;I<q;I++){let H=k[I];br.isClockWise(H)&&(k[I]=H.reverse())}}function Y(I){let H=10000000000000001e-36,P=I[0];for(let it=1;it<=I.length;it++){let ut=it%I.length,St=I[ut],Q=St.x-P.x,J=St.y-P.y,S=Q*Q+J*J,At=Math.max(Math.abs(St.x),Math.abs(St.y),Math.abs(P.x),Math.abs(P.y)),Dt=H*At*At;if(S<=Dt){I.splice(ut,1),it--;continue}P=St}}Y(R),k.forEach(Y);let O=k.length,W=R;for(let I=0;I<O;I++){let q=k[I];R=R.concat(q)}function et(I,q,H){return q||le("ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(q,H)}let X=R.length;function Z(I,q,H){let P,it,ut,St=I.x-q.x,Q=I.y-q.y,J=H.x-I.x,S=H.y-I.y,At=St*St+Q*Q,Dt=St*S-Q*J;if(Math.abs(Dt)>Number.EPSILON){let U=Math.sqrt(At),v=Math.sqrt(J*J+S*S),K=q.x-Q/U,nt=q.y+St/U,ft=H.x-S/v,wt=H.y+J/v,bt=((ft-K)*S-(wt-nt)*J)/(St*S-Q*J);P=K+St*bt-I.x,it=nt+Q*bt-I.y;let dt=P*P+it*it;if(dt<=2)return new vt(P,it);ut=Math.sqrt(dt/2)}else{let U=!1;St>Number.EPSILON?J>Number.EPSILON&&(U=!0):St<-Number.EPSILON?J<-Number.EPSILON&&(U=!0):Math.sign(Q)===Math.sign(S)&&(U=!0),U?(P=-Q,it=St,ut=Math.sqrt(At)):(P=St,it=Q,ut=Math.sqrt(At/2))}return new vt(P/ut,it/ut)}let tt=[];for(let I=0,q=W.length,H=q-1,P=I+1;I<q;I++,H++,P++)H===q&&(H=0),P===q&&(P=0),tt[I]=Z(W[I],W[H],W[P]);let D=[],st,gt=tt.concat();for(let I=0,q=O;I<q;I++){let H=k[I];st=[];for(let P=0,it=H.length,ut=it-1,St=P+1;P<it;P++,ut++,St++)ut===it&&(ut=0),St===it&&(St=0),st[P]=Z(H[P],H[ut],H[St]);D.push(st),gt=gt.concat(st)}let yt;if(m===0)yt=br.triangulateShape(W,k);else{let I=[],q=[];for(let H=0;H<m;H++){let P=H/m,it=d*Math.cos(P*Math.PI/2),ut=p*Math.sin(P*Math.PI/2)+_;for(let St=0,Q=W.length;St<Q;St++){let J=et(W[St],tt[St],ut);F(J.x,J.y,-it),P===0&&I.push(J)}for(let St=0,Q=O;St<Q;St++){let J=k[St];st=D[St];let S=[];for(let At=0,Dt=J.length;At<Dt;At++){let U=et(J[At],st[At],ut);F(U.x,U.y,-it),P===0&&S.push(U)}P===0&&q.push(S)}}yt=br.triangulateShape(I,q)}let Et=yt.length,Bt=p+_;for(let I=0;I<X;I++){let q=u?et(R[I],gt[I],Bt):R[I];y?(C.copy(M.normals[0]).multiplyScalar(q.x),w.copy(M.binormals[0]).multiplyScalar(q.y),x.copy(A[0]).add(C).add(w),F(x.x,x.y,x.z)):F(q.x,q.y,0)}for(let I=1;I<=h;I++)for(let q=0;q<X;q++){let H=u?et(R[q],gt[q],Bt):R[q];y?(C.copy(M.normals[I]).multiplyScalar(H.x),w.copy(M.binormals[I]).multiplyScalar(H.y),x.copy(A[I]).add(C).add(w),F(x.x,x.y,x.z)):F(H.x,H.y,f/h*I)}for(let I=m-1;I>=0;I--){let q=I/m,H=d*Math.cos(q*Math.PI/2),P=p*Math.sin(q*Math.PI/2)+_;for(let it=0,ut=W.length;it<ut;it++){let St=et(W[it],tt[it],P);F(St.x,St.y,f+H)}for(let it=0,ut=k.length;it<ut;it++){let St=k[it];st=D[it];for(let Q=0,J=St.length;Q<J;Q++){let S=et(St[Q],st[Q],P);y?F(S.x,S.y+A[h-1].y,A[h-1].x+H):F(S.x,S.y,f+H)}}}Lt(),z();function Lt(){let I=i.length/3;if(u){let q=0,H=X*q;for(let P=0;P<Et;P++){let it=yt[P];N(it[2]+H,it[1]+H,it[0]+H)}q=h+m*2,H=X*q;for(let P=0;P<Et;P++){let it=yt[P];N(it[0]+H,it[1]+H,it[2]+H)}}else{for(let q=0;q<Et;q++){let H=yt[q];N(H[2],H[1],H[0])}for(let q=0;q<Et;q++){let H=yt[q];N(H[0]+X*h,H[1]+X*h,H[2]+X*h)}}n.addGroup(I,i.length/3-I,0)}function z(){let I=i.length/3,q=0;B(W,q),q+=W.length;for(let H=0,P=k.length;H<P;H++){let it=k[H];B(it,q),q+=it.length}n.addGroup(I,i.length/3-I,1)}function B(I,q){let H=I.length;for(;--H>=0;){let P=H,it=H-1;it<0&&(it=I.length-1);for(let ut=0,St=h+m*2;ut<St;ut++){let Q=X*ut,J=X*(ut+1),S=q+P+Q,At=q+it+Q,Dt=q+it+J,U=q+P+J;V(S,At,Dt,U)}}}function F(I,q,H){l.push(I),l.push(q),l.push(H)}function N(I,q,H){rt(I),rt(q),rt(H);let P=i.length/3,it=T.generateTopUV(n,i,P-3,P-2,P-1);ht(it[0]),ht(it[1]),ht(it[2])}function V(I,q,H,P){rt(I),rt(q),rt(P),rt(q),rt(H),rt(P);let it=i.length/3,ut=T.generateSideWallUV(n,i,it-6,it-3,it-2,it-1);ht(ut[0]),ht(ut[1]),ht(ut[3]),ht(ut[1]),ht(ut[2]),ht(ut[3])}function rt(I){i.push(l[I*3+0]),i.push(l[I*3+1]),i.push(l[I*3+2])}function ht(I){s.push(I.x),s.push(I.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Jy(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new jf[i.type]().fromJSON(i)),new r(n,t.options)}},Zy={generateTopUV:function(r,t,e,n,i){let s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new vt(s,o),new vt(a,l),new vt(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[i*3],d=t[i*3+1],p=t[i*3+2],_=t[s*3],m=t[s*3+1],g=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new vt(o,1-l),new vt(c,1-f),new vt(u,1-p),new vt(_,1-g)]:[new vt(a,1-l),new vt(h,1-f),new vt(d,1-p),new vt(m,1-g)]}};function Jy(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ts=class r extends xn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=t/a,u=e/l,d=[],p=[],_=[],m=[];for(let g=0;g<h;g++){let T=g*u-o;for(let A=0;A<c;A++){let y=A*f-s;p.push(y,-T,0),_.push(0,0,1),m.push(A/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let T=0;T<a;T++){let A=T+c*g,y=T+c*(g+1),M=T+1+c*(g+1),w=T+1+c*g;d.push(A,y,w),d.push(y,M,w)}this.setIndex(d),this.setAttribute("position",new Ae(p,3)),this.setAttribute("normal",new Ae(_,3)),this.setAttribute("uv",new Ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};function js(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];if(t0(i))i.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(t0(i[0])){let s=[];for(let o=0,a=i.length;o<a;o++)s[o]=i[o].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function ti(r){let t={};for(let e=0;e<r.length;e++){let n=js(r[e]);for(let i in n)t[i]=n[i]}return t}function t0(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function $y(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Dd(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}var Q0={clone:js,merge:ti},Ky=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,jn=class extends fr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ky,this.fragmentShader=Qy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=$y(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Kt().setHex(i.value);break;case"v2":this.uniforms[n].value=new vt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new G().fromArray(i.value);break;case"v4":this.uniforms[n].value=new nn().fromArray(i.value);break;case"m3":this.uniforms[n].value=new re().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Be().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},yh=class extends jn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Zs=class extends fr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ol,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},vs=class extends Zs{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new vt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Sl=class extends fr{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ol,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Uh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},vh=class extends fr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=D0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Sh=class extends fr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function zo(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function qf(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var Ss=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Mh=class extends Ss{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jf,endingEnd:Jf}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case $f:s=t,a=2*e-n;break;case Kf:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $f:o=t,l=2*n-e;break;case Kf:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(n-e)/(i-e),_=p*p,m=_*p,g=-u*m+2*u*_-u*p,T=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*p+1,A=(-1-d)*m+(1.5+d)*_+.5*p,y=d*m-d*_;for(let M=0;M!==a;++M)s[M]=g*o[h+M]+T*o[c+M]+A*o[l+M]+y*o[f+M];return s}},bh=class extends Ss{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),f=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*f+o[l+u]*h;return s}},wh=class extends Ss{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Th=class extends Ss{interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(n-e)/(i-e),_=1-p;for(let m=0;m!==a;++m)s[m]=o[c+m]*_+o[l+m]*p;return s}let u=a*2,d=t-1;for(let p=0;p!==a;++p){let _=o[c+p],m=o[l+p],g=d*u+p*2,T=f[g],A=f[g+1],y=t*u+p*2,M=h[y],w=h[y+1],C=tv(n,e,T,M,i);s[p]=j0(C,_,A,w,m)}return s}};function j0(r,t,e,n,i){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function jy(r,t,e,n,i){let s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function tv(r,t,e,n,i){let s=(r-t)/(i-t);for(let o=0;o<8;o++){let a=j0(s,t,e,n,i)-r;if(Math.abs(a)<1e-10)break;let l=jy(s,t,e,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var Fi=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=zo(e,this.TimeBufferType),this.values=zo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:zo(t.times,Array),values:zo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),qf(t.settings)&&(n.settings={inTangents:zo(t.settings.inTangents,Array),outTangents:zo(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new wh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new bh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Mh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Th(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ka:e=this.InterpolantFactoryMethodDiscrete;break;case oh:e=this.InterpolantFactoryMethodLinear;break;case Kc:e=this.InterpolantFactoryMethodSmooth;break;case Zf:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return oe("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ka;case this.InterpolantFactoryMethodLinear:return oh;case this.InterpolantFactoryMethodSmooth:return Kc;case this.InterpolantFactoryMethodBezier:return Zf}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;qf(this.settings)&&(e0(this.settings.inTangents,t),e0(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(le("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(le("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){le("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){le("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Gx(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){le("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Kc,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let f=a*n,u=f-n,d=f+n;for(let p=0;p!==n;++p){let _=e[f+p];if(_!==e[u+p]||_!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,qf(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function e0(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]*=t}Fi.prototype.ValueTypeName="";Fi.prototype.TimeBufferType=Float32Array;Fi.prototype.ValueBufferType=Float32Array;Fi.prototype.DefaultInterpolation=oh;var Ms=class extends Fi{constructor(t,e,n){super(t,e,n)}};Ms.prototype.ValueTypeName="bool";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=Ka;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Ah=class extends Fi{constructor(t,e,n,i){super(t,e,n,i)}};Ah.prototype.ValueTypeName="color";var Eh=class extends Fi{constructor(t,e,n,i){super(t,e,n,i)}};Eh.prototype.ValueTypeName="number";var Ch=class extends Ss{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)gn.slerpFlat(s,0,o,c-a,o,c,l);return s}},Ml=class extends Fi{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Ch(this.times,this.values,this.getValueSize(),t)}};Ml.prototype.ValueTypeName="quaternion";Ml.prototype.InterpolantFactoryMethodSmooth=void 0;var bs=class extends Fi{constructor(t,e,n){super(t,e,n)}};bs.prototype.ValueTypeName="string";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=Ka;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var Rh=class extends Fi{constructor(t,e,n,i){super(t,e,n,i)}};Rh.prototype.ValueTypeName="vector";var id={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(n0(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!n0(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function n0(r){try{let t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Ph=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},tg=new Ph,Js=class{constructor(t){this.manager=t!==void 0?t:tg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Js.DEFAULT_MATERIAL_NAME="__DEFAULT";var Jr={},rd=class extends Error{constructor(t,e){super(t),this.response=e}},bl=class extends Js{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=id.get(`file:${t}`);if(s!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0);return}if(Jr[t]!==void 0){Jr[t].push({onLoad:e,onProgress:n,onError:i});return}Jr[t]=[],Jr[t].push({onLoad:e,onProgress:n,onError:i});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&oe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Jr[t],f=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=u?parseInt(u):0,p=d!==0,_=0,m=new ReadableStream({start(g){T();function T(){f.read().then(({done:A,value:y})=>{if(A)g.close();else{_+=y.byteLength;let M=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:d});for(let w=0,C=h.length;w<C;w++){let x=h[w];x.onProgress&&x.onProgress(M)}g.enqueue(y),T()}},A=>{g.error(A)})}}});return new Response(m)}else throw new rd(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let f=/charset="?([^;"\s]*)"?/i.exec(a),u=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{id.add(`file:${t}`,c);let h=Jr[t];delete Jr[t];for(let f=0,u=h.length;f<u;f++){let d=h[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=Jr[t];if(h===void 0)throw this.manager.itemError(t),c;delete Jr[t];for(let f=0,u=h.length;f<u;f++){let d=h[f];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var wl=class extends _n{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var Yf=new Be,i0=new G,r0=new G,Tl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=bi,this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jo,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;i0.setFromMatrixPosition(t.matrixWorld),e.position.copy(i0),r0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(r0),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Yf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Yf,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,o=i?i.z/s.x:1,a=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;t.coordinateSystem===qo||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Yf)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Jc=new G,$c=new gn,Mr=new G,Al=class extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=ur,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Jc,$c,Mr),Mr.x===1&&Mr.y===1&&Mr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jc,$c,Mr.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Jc,$c,Mr),Mr.x===1&&Mr.y===1&&Mr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jc,$c,Mr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},_s=new G,s0=new vt,o0=new vt,Nn=class extends Al{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Zo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ya*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zo*2*Math.atan(Math.tan(Ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_s.x,_s.y).multiplyScalar(-t/_s.z),_s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_s.x,_s.y).multiplyScalar(-t/_s.z)}getViewSize(t,e){return this.getViewBounds(t,s0,o0),e.subVectors(o0,s0)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ya*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var sd=class extends Tl{constructor(){super(new Nn(90,1,.5,500)),this.isPointLightShadow=!0}},$s=class extends wl{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new sd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ws=class extends Al{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},od=class extends Tl{constructor(){super(new ws(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},na=class extends wl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new od}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ko=-90,Vo=1,Ih=class extends _n{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Nn(ko,Vo,t,e);i.layers=this.layers,this.add(i);let s=new Nn(ko,Vo,t,e);s.layers=this.layers,this.add(s);let o=new Nn(ko,Vo,t,e);o.layers=this.layers,this.add(o);let a=new Nn(ko,Vo,t,e);a.layers=this.layers,this.add(a);let l=new Nn(ko,Vo,t,e);l.layers=this.layers,this.add(l);let c=new Nn(ko,Vo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===ur)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===qo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Lh=class extends Nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Nd="\\[\\]\\.:\\/",ev=new RegExp("["+Nd+"]","g"),Ud="[^"+Nd+"]",nv="[^"+Nd.replace("\\.","")+"]",iv=/((?:WC+[\/:])*)/.source.replace("WC",Ud),rv=/(WCOD+)?/.source.replace("WCOD",nv),sv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ud),ov=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ud),av=new RegExp("^"+iv+rv+sv+ov+"$"),lv=["material","materials","bones","map"],ad=class{constructor(t,e,n){let i=n||tn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},tn=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ev,"")}static parseTrackName(t){let e=av.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);lv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;le("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};tn.Composite=ad;tn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tn.prototype.GetterByBindingType=[tn.prototype._getValue_direct,tn.prototype._getValue_array,tn.prototype._getValue_arrayElement,tn.prototype._getValue_toArray];tn.prototype.SetterByBindingTypeAndVersioning=[[tn.prototype._setValue_direct,tn.prototype._setValue_direct_setNeedsUpdate,tn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_array,tn.prototype._setValue_array_setNeedsUpdate,tn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_arrayElement,tn.prototype._setValue_arrayElement_setNeedsUpdate,tn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_fromArray,tn.prototype._setValue_fromArray_setNeedsUpdate,tn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bA=new Float32Array(1);var a0=new Be,El=class{constructor(t,e,n=0,i=1/0){this.ray=new Qo(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new $o,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):le("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return a0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(a0),this}intersectObject(t,e=!0,n=[]){return ld(t,this,n,e),n.sort(l0),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)ld(t[i],this,n,e);return n.sort(l0),n}};function l0(r,t){return r.distance-t.distance}function ld(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let o=0,a=s.length;o<a;o++)ld(s[o],t,e,!0)}}var Vd=class Vd{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};Vd.prototype.isMatrix2=!0;var cd=Vd,c0=new vt,ia=class{constructor(t=new vt(1/0,1/0),e=new vt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=c0.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,c0).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};var pr=class{constructor(){this.type="ShapePath",this.color=new Kt,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,e){return this.currentPath=new Rr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,s,o){return this.currentPath.bezierCurveTo(t,e,n,i,s,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(l,c){let h=!1,f=c.length;for(let u=0,d=f-1;u<f;d=u++){let p=c[u],_=c[d];p.y>l.y!=_.y>l.y&&l.x<(_.x-p.x)*(l.y-p.y)/(_.y-p.y)+p.x&&(h=!h)}return h}function e(l,c){let h=c.getCenter(new vt);if(t(h,l))return h;let f=h.y,u=[],d=l.length;for(let p=0;p<d;p++){let _=l[p],m=l[(p+1)%d];if(_.y>f!=m.y>f){let g=_.x+(f-_.y)*(m.x-_.x)/(m.y-_.y);u.push(g)}}return u.length>1&&(u.sort((p,_)=>p-_),h.x=(u[0]+u[1])/2),h}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(oe('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");let i=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),s=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let h=br.area(c);if(h===0)continue;let f=new ia;for(let u=0;u<c.length;u++)f.expandByPoint(c[u]);s.push({subPath:l,points:c,boundingBox:f,interiorPoint:e(c,f),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}s.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<s.length;l++){let c=s[l],h=0;for(let f=l-1;f>=0;f--){let u=s[f];if(u.boundingBox.containsBox(c.boundingBox)&&t(c.interiorPoint,u.points)){c.container=u.exclude?u.container:u,h=u.winding,c.winding+=h;break}}i(c.winding)===i(h)&&(c.exclude=!0)}for(let l of s)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let o=[],a=new Map;for(let l of s){if(l.exclude||l.role!=="outer")continue;let c=new gl;c.curves=l.subPath.curves,o.push(c),a.set(l,c)}for(let l of s){if(l.exclude||l.role!=="hole")continue;let c=a.get(l.container);if(!c)continue;let h=new Rr;h.curves=l.subPath.curves,c.holes.push(h)}return o}};function Fd(r,t,e,n){let i=cv(n);switch(e){case Ed:return r*t;case Gh:return r*t/i.components*i.byteLength;case Hh:return r*t/i.components*i.byteLength;case Cs:return r*t*2/i.components*i.byteLength;case Wh:return r*t*2/i.components*i.byteLength;case Cd:return r*t*3/i.components*i.byteLength;case Qi:return r*t*4/i.components*i.byteLength;case Xh:return r*t*4/i.components*i.byteLength;case Il:case Ll:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Dl:case Nl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Yh:case Jh:return Math.max(r,16)*Math.max(t,8)/4;case qh:case Zh:return Math.max(r,8)*Math.max(t,8)/2;case $h:case Kh:case jh:case tu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Qh:case Ul:case eu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case nu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case iu:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case ru:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case su:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case ou:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case au:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case lu:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case cu:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case hu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case uu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case fu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case du:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case pu:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case mu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case gu:case _u:case xu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case yu:case vu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Fl:case Su:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function cv(r){switch(r){case bi:case bd:return{byteLength:1,components:1};case oa:case wd:case gr:return{byteLength:2,components:1};case kh:case Vh:return{byteLength:2,components:4};case mr:case zh:case Ki:return{byteLength:4,components:1};case Td:case Ad:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Mg(){let r=null,t=!1,e=null,n=null;function i(s,o){n=r.requestAnimationFrame(i),e(s,o)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function uv(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let h=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,h);else{f.sort((d,p)=>d.start-p.start);let u=0;for(let d=1;d<f.length;d++){let p=f[u],_=f[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,p=f.length;d<p;d++){let _=f[d];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var fv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_v=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Sv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Tv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Av=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ev=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Cv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Iv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Lv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Dv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Nv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Uv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Fv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ov=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Bv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Xv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,qv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$v=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,t1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,n1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,r1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,s1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,l1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,c1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,h1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,u1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,f1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,d1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,p1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,m1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,g1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,M1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,w1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,T1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,A1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,R1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,I1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,L1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,U1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,F1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,B1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,z1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,k1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,G1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,J1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,K1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Q1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,oS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_S=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,SS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,MS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ES=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,IS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,DS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,NS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,US=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,OS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,VS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ge={alphahash_fragment:fv,alphahash_pars_fragment:dv,alphamap_fragment:pv,alphamap_pars_fragment:mv,alphatest_fragment:gv,alphatest_pars_fragment:_v,aomap_fragment:xv,aomap_pars_fragment:yv,batching_pars_vertex:vv,batching_vertex:Sv,begin_vertex:Mv,beginnormal_vertex:bv,bsdfs:wv,iridescence_fragment:Tv,bumpmap_pars_fragment:Av,clipping_planes_fragment:Ev,clipping_planes_pars_fragment:Cv,clipping_planes_pars_vertex:Rv,clipping_planes_vertex:Pv,color_fragment:Iv,color_pars_fragment:Lv,color_pars_vertex:Dv,color_vertex:Nv,common:Uv,cube_uv_reflection_fragment:Fv,defaultnormal_vertex:Ov,displacementmap_pars_vertex:Bv,displacementmap_vertex:zv,emissivemap_fragment:kv,emissivemap_pars_fragment:Vv,colorspace_fragment:Gv,colorspace_pars_fragment:Hv,envmap_fragment:Wv,envmap_common_pars_fragment:Xv,envmap_pars_fragment:qv,envmap_pars_vertex:Yv,envmap_physical_pars_fragment:r1,envmap_vertex:Zv,fog_vertex:Jv,fog_pars_vertex:$v,fog_fragment:Kv,fog_pars_fragment:Qv,gradientmap_pars_fragment:jv,lightmap_pars_fragment:t1,lights_lambert_fragment:e1,lights_lambert_pars_fragment:n1,lights_pars_begin:i1,lights_toon_fragment:s1,lights_toon_pars_fragment:o1,lights_phong_fragment:a1,lights_phong_pars_fragment:l1,lights_physical_fragment:c1,lights_physical_pars_fragment:h1,lights_fragment_begin:u1,lights_fragment_maps:f1,lights_fragment_end:d1,lightprobes_pars_fragment:p1,logdepthbuf_fragment:m1,logdepthbuf_pars_fragment:g1,logdepthbuf_pars_vertex:_1,logdepthbuf_vertex:x1,map_fragment:y1,map_pars_fragment:v1,map_particle_fragment:S1,map_particle_pars_fragment:M1,metalnessmap_fragment:b1,metalnessmap_pars_fragment:w1,morphinstance_vertex:T1,morphcolor_vertex:A1,morphnormal_vertex:E1,morphtarget_pars_vertex:C1,morphtarget_vertex:R1,normal_fragment_begin:P1,normal_fragment_maps:I1,normal_pars_fragment:L1,normal_pars_vertex:D1,normal_vertex:N1,normalmap_pars_fragment:U1,clearcoat_normal_fragment_begin:F1,clearcoat_normal_fragment_maps:O1,clearcoat_pars_fragment:B1,iridescence_pars_fragment:z1,opaque_fragment:k1,packing:V1,premultiplied_alpha_fragment:G1,project_vertex:H1,dithering_fragment:W1,dithering_pars_fragment:X1,roughnessmap_fragment:q1,roughnessmap_pars_fragment:Y1,shadowmap_pars_fragment:Z1,shadowmap_pars_vertex:J1,shadowmap_vertex:$1,shadowmask_pars_fragment:K1,skinbase_vertex:Q1,skinning_pars_vertex:j1,skinning_vertex:tS,skinnormal_vertex:eS,specularmap_fragment:nS,specularmap_pars_fragment:iS,tonemapping_fragment:rS,tonemapping_pars_fragment:sS,transmission_fragment:oS,transmission_pars_fragment:aS,uv_pars_fragment:lS,uv_pars_vertex:cS,uv_vertex:hS,worldpos_vertex:uS,background_vert:fS,background_frag:dS,backgroundCube_vert:pS,backgroundCube_frag:mS,cube_vert:gS,cube_frag:_S,depth_vert:xS,depth_frag:yS,distance_vert:vS,distance_frag:SS,equirect_vert:MS,equirect_frag:bS,linedashed_vert:wS,linedashed_frag:TS,meshbasic_vert:AS,meshbasic_frag:ES,meshlambert_vert:CS,meshlambert_frag:RS,meshmatcap_vert:PS,meshmatcap_frag:IS,meshnormal_vert:LS,meshnormal_frag:DS,meshphong_vert:NS,meshphong_frag:US,meshphysical_vert:FS,meshphysical_frag:OS,meshtoon_vert:BS,meshtoon_frag:zS,points_vert:kS,points_frag:VS,shadow_vert:GS,shadow_frag:HS,sprite_vert:WS,sprite_frag:XS},Ht={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},Dr={basic:{uniforms:ti([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:ti([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Kt(0)},envMapIntensity:{value:1}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:ti([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:ti([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:ti([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new Kt(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:ti([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:ti([Ht.points,Ht.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:ti([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:ti([Ht.common,Ht.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:ti([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:ti([Ht.sprite,Ht.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distance:{uniforms:ti([Ht.common,Ht.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distance_vert,fragmentShader:ge.distance_frag},shadow:{uniforms:ti([Ht.lights,Ht.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Dr.physical={uniforms:ti([Dr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};var wu={r:0,b:0,g:0},qS=new Be,bg=new re;bg.set(-1,0,0,0,1,0,0,0,1);function YS(r,t,e,n,i,s){let o=new Kt(0),a=i===!0?0:1,l,c,h=null,f=0,u=null;function d(T){let A=T.isScene===!0?T.background:null;if(A&&A.isTexture){let y=T.backgroundBlurriness>0;A=t.get(A,y)}return A}function p(T){let A=!1,y=d(T);y===null?m(o,a):y&&y.isColor&&(m(y,1),A=!0);let M=r.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(T,A){let y=d(A);y&&(y.isCubeTexture||y.mapping===Rl)?(c===void 0&&(c=new Ie(new ys(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:js(Dr.backgroundCube.uniforms),vertexShader:Dr.backgroundCube.vertexShader,fragmentShader:Dr.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(qS.makeRotationFromEuler(A.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(bg),c.material.toneMapped=Te.getTransfer(y.colorSpace)!==Oe,(h!==y||f!==y.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,u=r.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ie(new ts(2,2),new jn({name:"BackgroundMaterial",uniforms:js(Dr.background.uniforms),vertexShader:Dr.background.vertexShader,fragmentShader:Dr.background.fragmentShader,side:Ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Te.getTransfer(y.colorSpace)!==Oe,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,u=r.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,A){T.getRGB(wu,Dd(r)),e.buffers.color.setClear(wu.r,wu.g,wu.b,A,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,A=1){o.set(T),a=A,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(T){a=T,m(o,a)},render:p,addToRenderList:_,dispose:g}}function ZS(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null),s=i,o=!1;function a(k,L,Y,O,W){let et=!1,X=f(k,O,Y,L);s!==X&&(s=X,c(s.object)),et=d(k,O,Y,W),et&&p(k,O,Y,W),W!==null&&t.update(W,r.ELEMENT_ARRAY_BUFFER),(et||o)&&(o=!1,y(k,L,Y,O),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return r.createVertexArray()}function c(k){return r.bindVertexArray(k)}function h(k){return r.deleteVertexArray(k)}function f(k,L,Y,O){let W=O.wireframe===!0,et=n[L.id];et===void 0&&(et={},n[L.id]=et);let X=k.isInstancedMesh===!0?k.id:0,Z=et[X];Z===void 0&&(Z={},et[X]=Z);let tt=Z[Y.id];tt===void 0&&(tt={},Z[Y.id]=tt);let D=tt[W];return D===void 0&&(D=u(l()),tt[W]=D),D}function u(k){let L=[],Y=[],O=[];for(let W=0;W<e;W++)L[W]=0,Y[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:Y,attributeDivisors:O,object:k,attributes:{},index:null}}function d(k,L,Y,O){let W=s.attributes,et=L.attributes,X=0,Z=Y.getAttributes();for(let tt in Z)if(Z[tt].location>=0){let st=W[tt],gt=et[tt];if(gt===void 0&&(tt==="instanceMatrix"&&k.instanceMatrix&&(gt=k.instanceMatrix),tt==="instanceColor"&&k.instanceColor&&(gt=k.instanceColor)),st===void 0||st.attribute!==gt||gt&&st.data!==gt.data)return!0;X++}return s.attributesNum!==X||s.index!==O}function p(k,L,Y,O){let W={},et=L.attributes,X=0,Z=Y.getAttributes();for(let tt in Z)if(Z[tt].location>=0){let st=et[tt];st===void 0&&(tt==="instanceMatrix"&&k.instanceMatrix&&(st=k.instanceMatrix),tt==="instanceColor"&&k.instanceColor&&(st=k.instanceColor));let gt={};gt.attribute=st,st&&st.data&&(gt.data=st.data),W[tt]=gt,X++}s.attributes=W,s.attributesNum=X,s.index=O}function _(){let k=s.newAttributes;for(let L=0,Y=k.length;L<Y;L++)k[L]=0}function m(k){g(k,0)}function g(k,L){let Y=s.newAttributes,O=s.enabledAttributes,W=s.attributeDivisors;Y[k]=1,O[k]===0&&(r.enableVertexAttribArray(k),O[k]=1),W[k]!==L&&(r.vertexAttribDivisor(k,L),W[k]=L)}function T(){let k=s.newAttributes,L=s.enabledAttributes;for(let Y=0,O=L.length;Y<O;Y++)L[Y]!==k[Y]&&(r.disableVertexAttribArray(Y),L[Y]=0)}function A(k,L,Y,O,W,et,X){X===!0?r.vertexAttribIPointer(k,L,Y,W,et):r.vertexAttribPointer(k,L,Y,O,W,et)}function y(k,L,Y,O){_();let W=O.attributes,et=Y.getAttributes(),X=L.defaultAttributeValues;for(let Z in et){let tt=et[Z];if(tt.location>=0){let D=W[Z];if(D===void 0&&(Z==="instanceMatrix"&&k.instanceMatrix&&(D=k.instanceMatrix),Z==="instanceColor"&&k.instanceColor&&(D=k.instanceColor)),D!==void 0){let st=D.normalized,gt=D.itemSize,yt=t.get(D);if(yt===void 0)continue;let Et=yt.buffer,Bt=yt.type,Lt=yt.bytesPerElement,z=Bt===r.INT||Bt===r.UNSIGNED_INT||D.gpuType===zh;if(D.isInterleavedBufferAttribute){let B=D.data,F=B.stride,N=D.offset;if(B.isInstancedInterleavedBuffer){for(let V=0;V<tt.locationSize;V++)g(tt.location+V,B.meshPerAttribute);k.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let V=0;V<tt.locationSize;V++)m(tt.location+V);r.bindBuffer(r.ARRAY_BUFFER,Et);for(let V=0;V<tt.locationSize;V++)A(tt.location+V,gt/tt.locationSize,Bt,st,F*Lt,(N+gt/tt.locationSize*V)*Lt,z)}else{if(D.isInstancedBufferAttribute){for(let B=0;B<tt.locationSize;B++)g(tt.location+B,D.meshPerAttribute);k.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let B=0;B<tt.locationSize;B++)m(tt.location+B);r.bindBuffer(r.ARRAY_BUFFER,Et);for(let B=0;B<tt.locationSize;B++)A(tt.location+B,gt/tt.locationSize,Bt,st,gt*Lt,gt/tt.locationSize*B*Lt,z)}}else if(X!==void 0){let st=X[Z];if(st!==void 0)switch(st.length){case 2:r.vertexAttrib2fv(tt.location,st);break;case 3:r.vertexAttrib3fv(tt.location,st);break;case 4:r.vertexAttrib4fv(tt.location,st);break;default:r.vertexAttrib1fv(tt.location,st)}}}}T()}function M(){b();for(let k in n){let L=n[k];for(let Y in L){let O=L[Y];for(let W in O){let et=O[W];for(let X in et)h(et[X].object),delete et[X];delete O[W]}}delete n[k]}}function w(k){if(n[k.id]===void 0)return;let L=n[k.id];for(let Y in L){let O=L[Y];for(let W in O){let et=O[W];for(let X in et)h(et[X].object),delete et[X];delete O[W]}}delete n[k.id]}function C(k){for(let L in n){let Y=n[L];for(let O in Y){let W=Y[O];if(W[k.id]===void 0)continue;let et=W[k.id];for(let X in et)h(et[X].object),delete et[X];delete W[k.id]}}}function x(k){for(let L in n){let Y=n[L],O=k.isInstancedMesh===!0?k.id:0,W=Y[O];if(W!==void 0){for(let et in W){let X=W[et];for(let Z in X)h(X[Z].object),delete X[Z];delete W[et]}delete Y[O],Object.keys(Y).length===0&&delete n[L]}}}function b(){R(),o=!0,s!==i&&(s=i,c(s.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:b,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function JS(r,t,e){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function $S(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==Qi&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let x=C===gr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==bi&&C!==Ki&&!x&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(oe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),A=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:y,maxSamples:M,samples:w}}function KS(r){let t=this,e=null,n=0,i=!1,s=!1,o=new Di,a=new re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let p=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,g=r.get(f);if(!i||p===null||p.length===0||s&&!m)s?h(null):c();else{let T=s?0:n,A=T*4,y=g.clippingState||null;l.value=y,y=h(p,u,A,d);for(let M=0;M!==A;++M)y[M]=e[M];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,p){let _=f!==null?f.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=d+_*4,T=u.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<g)&&(m=new Float32Array(g));for(let A=0,y=d;A!==_;++A,y+=4)o.copy(f[A]).applyMatrix4(T,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var ca=4,QS=6,jS=20,tM=256,Bl=new ws,eg=new Kt,Gd=null,Hd=0,Wd=0,Xd=!1,eM=new G,to=new G,ua=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:o=256,position:a=eM}=s;Gd=this._renderer.getRenderTarget(),Hd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),Xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ig(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Gd,Hd,Wd),this._renderer.xr.enabled=Xd,t.scissorTest=!1,la(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===As||t.mapping===Qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gd=this._renderer.getRenderTarget(),Hd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),Xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:gr,format:Qi,colorSpace:Qa,depthBuffer:!1},i=ng(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ng(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=nM(s)),this._blurMaterial=rM(s,t,e),this._ggxMaterial=iM(s,t,e)}return i}_compileMaterial(t){let e=new Ie(new xn,t);this._renderer.compile(e,Bl)}_sceneToCubeUV(t,e,n,i,s){let l=new Nn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(eg),f.toneMapping=Oi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ie(new ys,new kn({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,g=!1,T=t.background;T?T.isColor&&(m.color.copy(T),t.background=null,g=!0):(m.color.copy(eg),g=!0);for(let A=0;A<6;A++){let y=A%3;y===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[A],s.y,s.z)):y===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[A]));let M=this._cubeSize;la(i,y*M,A>2?M:0,M,M),f.setRenderTarget(i),g&&f.render(_,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=T}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===As||t.mapping===Qs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ig());let s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;la(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Bl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-ca?n-p+ca:0),g=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,la(s,m,g,3*_,2*_),i.setRenderTarget(s),i.render(a,Bl),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,la(t,m,g,3*_,2*_),i.setRenderTarget(t),i.render(a,Bl)}_blur(t,e,n,i){let s=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,i,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],f=3*h*(i>this._lodMax-ca?i-this._lodMax+ca:0),u=4*(this._cubeSize-h);la(e,f,u,3*h,2*h),o.setRenderTarget(e),o.render(l,Bl)}};function nM(r){let t=[],e=[],n=r,i=r-ca+1+QS;for(let s=0;s<i;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,p=new Float32Array(d*u*f),_=new Float32Array(d*u*f);for(let g=0;g<f;g++){let T=g%3*2/3-1,A=g>2?0:-1,y=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];p.set(y,d*u*g);for(let M=0;M<u;M++){let w=h[M*2]*2-1,C=h[M*2+1]*2-1;g===0?to.set(1,C,w):g===1?to.set(-w,1,-C):g===2?to.set(-w,C,1):g===3?to.set(-1,C,-w):g===4?to.set(-w,-1,C):to.set(w,C,-1),to.toArray(_,(g*u+M)*d)}}let m=new xn;m.setAttribute("position",new Mi(p,d)),m.setAttribute("outputDirection",new Mi(_,d)),e.push(new Ie(m,null)),n>ca&&n--}return{lodMeshes:e,sizeLods:t}}function ng(r,t,e){let n=new Qn(r,t,e);return n.texture.mapping=Rl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function la(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function iM(r,t,e){return new jn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function rM(r,t,e){return new jn({name:"SphericalGaussianBlur",defines:{SAMPLES:jS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Cu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function ig(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function rg(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Cu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Au=class extends Qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new cl(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ys(5,5,5),s=new jn({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vn,blending:Pr});s.uniforms.tEquirect.value=e;let o=new Ie(i,s),a=e.minFilter;return e.minFilter===Ir&&(e.minFilter=En),new Ih(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}};function sM(r){let t=new WeakMap,e=new WeakMap,n=null;function i(u,d=!1){return u==null?null:d?o(u):s(u)}function s(u){if(u&&u.isTexture){let d=u.mapping;if(d===Fh||d===Oh)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let _=new Au(p.height);return _.fromEquirectangularTexture(r,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let d=u.mapping,p=d===Fh||d===Oh,_=d===As||d===Qs;if(p||_){let m=e.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new ua(r)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let T=u.image;return p&&T&&T.height>0||_&&T&&l(T)?(n===null&&(n=new ua(r)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,d){return d===Fh?u.mapping=As:d===Oh&&(u.mapping=Qs),u}function l(u){let d=0,p=6;for(let _=0;_<p;_++)u[_]!==void 0&&d++;return d===p}function c(u){let d=u.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function oM(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Xs("WebGLRenderer: "+n+" extension not supported."),i}}}function aM(r,t,e,n){let i={},s=new WeakMap;function o(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",o),delete i[u.id];let d=s.get(u);d&&(t.remove(d),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)t.update(u[d],r.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,p=f.attributes.position,_=0;if(p===void 0)return;if(d!==null){let T=d.array;_=d.version;for(let A=0,y=T.length;A<y;A+=3){let M=T[A+0],w=T[A+1],C=T[A+2];u.push(M,w,w,C,C,M)}}else{let T=p.array;_=p.version;for(let A=0,y=T.length/3-1;A<y;A+=3){let M=A+0,w=A+1,C=A+2;u.push(M,w,w,C,C,M)}}let m=new(p.count>=65535?rl:il)(u,1);m.version=_;let g=s.get(f);g&&t.remove(g),s.set(f,m)}function h(f){let u=s.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function lM(r,t,e){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,u){r.drawElements(n,u,s,f*o),e.update(u,n,1)}function c(f,u,d){d!==0&&(r.drawElementsInstanced(n,u,s,f*o,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,f,0,d);let _=0;for(let m=0;m<d;m++)_+=u[m];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function cM(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:le("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function hM(r,t,e){let n=new WeakMap,i=new nn;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let b=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],A=0;d===!0&&(A=1),p===!0&&(A=2),_===!0&&(A=3);let y=a.attributes.position.count*A,M=1;y>t.maxTextureSize&&(M=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*M*4*f),C=new nl(w,y,M,f);C.type=Ki,C.needsUpdate=!0;let x=A*4;for(let R=0;R<f;R++){let k=m[R],L=g[R],Y=T[R],O=y*M*4*R;for(let W=0;W<k.count;W++){let et=W*x;d===!0&&(i.fromBufferAttribute(k,W),w[O+et+0]=i.x,w[O+et+1]=i.y,w[O+et+2]=i.z,w[O+et+3]=0),p===!0&&(i.fromBufferAttribute(L,W),w[O+et+4]=i.x,w[O+et+5]=i.y,w[O+et+6]=i.z,w[O+et+7]=0),_===!0&&(i.fromBufferAttribute(Y,W),w[O+et+8]=i.x,w[O+et+9]=i.y,w[O+et+10]=i.z,w[O+et+11]=Y.itemSize===4?i.w:1)}}u={count:f,texture:C,size:new vt(y,M)},n.set(a,u),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function uM(r,t,e,n,i){let s=new WeakMap;function o(c){let h=i.render.frame,f=c.geometry,u=t.get(c,f);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return u}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var fM={[md]:"LINEAR_TONE_MAPPING",[gd]:"REINHARD_TONE_MAPPING",[_d]:"CINEON_TONE_MAPPING",[xd]:"ACES_FILMIC_TONE_MAPPING",[vd]:"AGX_TONE_MAPPING",[Sd]:"NEUTRAL_TONE_MAPPING",[yd]:"CUSTOM_TONE_MAPPING"};function dM(r,t,e,n,i,s){let o=new Qn(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new xn;c.setAttribute("position",new Ae([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ae([0,2,0,0,2,0],2));let h=new yh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Ie(c,h),u=new ws(-1,1,1,-1,0,1),d=null,p=null,_=!1,m,g=null,T=[],A=!1;this.setSize=function(y,M){o.setSize(y,M),a!==null&&a.setSize(y,M),l!==null&&l.setSize(y,M);for(let w=0;w<T.length;w++){let C=T[w];C.setSize&&C.setSize(y,M)}},this.setEffects=function(y){T=y,A=T.length>0&&T[0].isRenderPass===!0;let M=o.width,w=o.height;T.length>0&&a===null&&(a=new Qn(M,w,{type:gr,depthBuffer:!1,stencilBuffer:!1}),l=new Qn(M,w,{type:gr,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<T.length;C++){let x=T[C];x.setSize&&x.setSize(M,w)}},this.begin=function(y,M){if(_||y.toneMapping===Oi&&T.length===0)return!1;if(g=M,M!==null){let w=M.width,C=M.height;(o.width!==w||o.height!==C)&&this.setSize(w,C)}return A===!1&&y.setRenderTarget(o),m=y.toneMapping,y.toneMapping=Oi,!0},this.hasRenderPass=function(){return A},this.end=function(y,M){y.toneMapping=m,_=!0;let w=o,C=a;for(let x=0;x<T.length;x++){let b=T[x];b.enabled!==!1&&(b.render(y,C,w,M),b.needsSwap!==!1&&(w=C,C=C===a?l:a))}if(d!==y.outputColorSpace||p!==y.toneMapping){d=y.outputColorSpace,p=y.toneMapping,h.defines={},Te.getTransfer(d)===Oe&&(h.defines.SRGB_TRANSFER="");let x=fM[p];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(g),y.render(f,u),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var wg=new hi,Zd=new xs(1,1),Tg=new nl,Ag=new ch,Eg=new cl,sg=[],og=[],ag=new Float32Array(16),lg=new Float32Array(9),cg=new Float32Array(4);function fa(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=sg[i];if(s===void 0&&(s=new Float32Array(i),sg[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Cn(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Rn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Ru(r,t){let e=og[t];e===void 0&&(e=new Int32Array(t),og[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function pM(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function mM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Cn(e,t))return;r.uniform2fv(this.addr,t),Rn(e,t)}}function gM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Cn(e,t))return;r.uniform3fv(this.addr,t),Rn(e,t)}}function _M(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Cn(e,t))return;r.uniform4fv(this.addr,t),Rn(e,t)}}function xM(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Cn(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Rn(e,t)}else{if(Cn(e,n))return;cg.set(n),r.uniformMatrix2fv(this.addr,!1,cg),Rn(e,n)}}function yM(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Cn(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Rn(e,t)}else{if(Cn(e,n))return;lg.set(n),r.uniformMatrix3fv(this.addr,!1,lg),Rn(e,n)}}function vM(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Cn(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Rn(e,t)}else{if(Cn(e,n))return;ag.set(n),r.uniformMatrix4fv(this.addr,!1,ag),Rn(e,n)}}function SM(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function MM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Cn(e,t))return;r.uniform2iv(this.addr,t),Rn(e,t)}}function bM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Cn(e,t))return;r.uniform3iv(this.addr,t),Rn(e,t)}}function wM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Cn(e,t))return;r.uniform4iv(this.addr,t),Rn(e,t)}}function TM(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function AM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Cn(e,t))return;r.uniform2uiv(this.addr,t),Rn(e,t)}}function EM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Cn(e,t))return;r.uniform3uiv(this.addr,t),Rn(e,t)}}function CM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Cn(e,t))return;r.uniform4uiv(this.addr,t),Rn(e,t)}}function RM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Zd.compareFunction=e.isReversedDepthBuffer()?bu:Mu,s=Zd):s=wg,e.setTexture2D(t||s,i)}function PM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ag,i)}function IM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Eg,i)}function LM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Tg,i)}function DM(r){switch(r){case 5126:return pM;case 35664:return mM;case 35665:return gM;case 35666:return _M;case 35674:return xM;case 35675:return yM;case 35676:return vM;case 5124:case 35670:return SM;case 35667:case 35671:return MM;case 35668:case 35672:return bM;case 35669:case 35673:return wM;case 5125:return TM;case 36294:return AM;case 36295:return EM;case 36296:return CM;case 35678:case 36198:case 36298:case 36306:case 35682:return RM;case 35679:case 36299:case 36307:return PM;case 35680:case 36300:case 36308:case 36293:return IM;case 36289:case 36303:case 36311:case 36292:return LM}}function NM(r,t){r.uniform1fv(this.addr,t)}function UM(r,t){let e=fa(t,this.size,2);r.uniform2fv(this.addr,e)}function FM(r,t){let e=fa(t,this.size,3);r.uniform3fv(this.addr,e)}function OM(r,t){let e=fa(t,this.size,4);r.uniform4fv(this.addr,e)}function BM(r,t){let e=fa(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function zM(r,t){let e=fa(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function kM(r,t){let e=fa(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function VM(r,t){r.uniform1iv(this.addr,t)}function GM(r,t){r.uniform2iv(this.addr,t)}function HM(r,t){r.uniform3iv(this.addr,t)}function WM(r,t){r.uniform4iv(this.addr,t)}function XM(r,t){r.uniform1uiv(this.addr,t)}function qM(r,t){r.uniform2uiv(this.addr,t)}function YM(r,t){r.uniform3uiv(this.addr,t)}function ZM(r,t){r.uniform4uiv(this.addr,t)}function JM(r,t,e){let n=this.cache,i=t.length,s=Ru(e,i);Cn(n,s)||(r.uniform1iv(this.addr,s),Rn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=Zd:o=wg;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,s[a])}function $M(r,t,e){let n=this.cache,i=t.length,s=Ru(e,i);Cn(n,s)||(r.uniform1iv(this.addr,s),Rn(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Ag,s[o])}function KM(r,t,e){let n=this.cache,i=t.length,s=Ru(e,i);Cn(n,s)||(r.uniform1iv(this.addr,s),Rn(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Eg,s[o])}function QM(r,t,e){let n=this.cache,i=t.length,s=Ru(e,i);Cn(n,s)||(r.uniform1iv(this.addr,s),Rn(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Tg,s[o])}function jM(r){switch(r){case 5126:return NM;case 35664:return UM;case 35665:return FM;case 35666:return OM;case 35674:return BM;case 35675:return zM;case 35676:return kM;case 5124:case 35670:return VM;case 35667:case 35671:return GM;case 35668:case 35672:return HM;case 35669:case 35673:return WM;case 5125:return XM;case 36294:return qM;case 36295:return YM;case 36296:return ZM;case 35678:case 36198:case 36298:case 36306:case 35682:return JM;case 35679:case 36299:case 36307:return $M;case 35680:case 36300:case 36308:case 36293:return KM;case 36289:case 36303:case 36311:case 36292:return QM}}var Jd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=DM(e.type)}},$d=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jM(e.type)}},Kd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},qd=/(\w+)(\])?(\[|\.)?/g;function hg(r,t){r.seq.push(t),r.map[t.id]=t}function tb(r,t,e){let n=r.name,i=n.length;for(qd.lastIndex=0;;){let s=qd.exec(n),o=qd.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){hg(e,c===void 0?new Jd(a,r,t):new $d(a,r,t));break}else{let f=e.map[a];f===void 0&&(f=new Kd(a),hg(e,f)),e=f}}}var ha=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);tb(a,l,this)}let i=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function ug(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var eb=37297,nb=0;function ib(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var fg=new re;function rb(r){Te._getMatrix(fg,Te.workingColorSpace,r);let t=`mat3( ${fg.elements.map(e=>e.toFixed(4))} )`;switch(Te.getTransfer(r)){case ja:return[t,"LinearTransferOETF"];case Oe:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function dg(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+ib(r.getShaderSource(t),a)}else return s}function sb(r,t){let e=rb(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var ob={[md]:"Linear",[gd]:"Reinhard",[_d]:"Cineon",[xd]:"ACESFilmic",[vd]:"AgX",[Sd]:"Neutral",[yd]:"Custom"};function ab(r,t){let e=ob[t];return e===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Tu=new G;function lb(){Te.getLuminanceCoefficients(Tu);let r=Tu.x.toFixed(4),t=Tu.y.toFixed(4),e=Tu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kl).join(`
`)}function hb(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ub(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function kl(r){return r!==""}function pg(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mg(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var fb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qd(r){return r.replace(fb,pb)}var db=new Map;function pb(r,t){let e=ge[t];if(e===void 0){let n=db.get(t);if(n!==void 0)e=ge[n],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Qd(e)}var mb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gg(r){return r.replace(mb,gb)}function gb(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function _g(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var _b={[Cl]:"SHADOWMAP_TYPE_PCF",[ra]:"SHADOWMAP_TYPE_VSM"};function xb(r){return _b[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var yb={[As]:"ENVMAP_TYPE_CUBE",[Qs]:"ENVMAP_TYPE_CUBE",[Rl]:"ENVMAP_TYPE_CUBE_UV"};function vb(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":yb[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var Sb={[Qs]:"ENVMAP_MODE_REFRACTION"};function Mb(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Sb[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var bb={[Uh]:"ENVMAP_BLENDING_MULTIPLY",[P0]:"ENVMAP_BLENDING_MIX",[I0]:"ENVMAP_BLENDING_ADD"};function wb(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":bb[r.combine]||"ENVMAP_BLENDING_NONE"}function Tb(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ab(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=xb(e),c=vb(e),h=Mb(e),f=wb(e),u=Tb(e),d=cb(e),p=hb(s),_=i.createProgram(),m,g,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(kl).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(kl).join(`
`),g.length>0&&(g+=`
`)):(m=[_g(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kl).join(`
`),g=[_g(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Oi?"#define TONE_MAPPING":"",e.toneMapping!==Oi?ge.tonemapping_pars_fragment:"",e.toneMapping!==Oi?ab("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,sb("linearToOutputTexel",e.outputColorSpace),lb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(kl).join(`
`)),o=Qd(o),o=pg(o,e),o=mg(o,e),a=Qd(a),a=pg(a,e),a=mg(a,e),o=gg(o),a=gg(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Pd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let A=T+m+o,y=T+g+a,M=ug(i,i.VERTEX_SHADER,A),w=ug(i,i.FRAGMENT_SHADER,y);i.attachShader(_,M),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(k){if(r.debug.checkShaderErrors){let L=i.getProgramInfoLog(_)||"",Y=i.getShaderInfoLog(M)||"",O=i.getShaderInfoLog(w)||"",W=L.trim(),et=Y.trim(),X=O.trim(),Z=!0,tt=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,M,w);else{let D=dg(i,M,"vertex"),st=dg(i,w,"fragment");le("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+W+`
`+D+`
`+st)}else W!==""?oe("WebGLProgram: Program Info Log:",W):(et===""||X==="")&&(tt=!1);tt&&(k.diagnostics={runnable:Z,programLog:W,vertexShader:{log:et,prefix:m},fragmentShader:{log:X,prefix:g}})}i.deleteShader(M),i.deleteShader(w),x=new ha(i,_),b=ub(i,_)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(_,eb)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=nb++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=w,this}var Eb=0,jd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new tp(t),e.set(t,n)),n}},tp=class{constructor(t){this.id=Eb++,this.code=t,this.usedTimes=0}};function Cb(r){return r===Cs||r===Ul||r===Fl}function Rb(r,t,e,n,i,s){let o=new $o,a=new jd,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,b,R,k,L,Y){let O=k.fog,W=L.geometry,et=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?k.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Z=t.get(x.envMap||et,X),tt=Z&&Z.mapping===Rl?Z.image.height:null,D=d[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&oe("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let st=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,gt=st!==void 0?st.length:0,yt=0;W.morphAttributes.position!==void 0&&(yt=1),W.morphAttributes.normal!==void 0&&(yt=2),W.morphAttributes.color!==void 0&&(yt=3);let Et,Bt,Lt,z;if(D){let te=Dr[D];Et=te.vertexShader,Bt=te.fragmentShader}else{Et=x.vertexShader,Bt=x.fragmentShader;let te=a.getVertexShaderStage(x),Tt=a.getFragmentShaderStage(x);a.update(x,te,Tt),Lt=te.id,z=Tt.id}let B=r.getRenderTarget(),F=r.state.buffers.depth.getReversed(),N=L.isInstancedMesh===!0,V=L.isBatchedMesh===!0,rt=!!x.map,ht=!!x.matcap,I=!!Z,q=!!x.aoMap,H=!!x.lightMap,P=!!x.bumpMap&&x.wireframe===!1,it=!!x.normalMap,ut=!!x.displacementMap,St=!!x.emissiveMap,Q=!!x.metalnessMap,J=!!x.roughnessMap,S=x.anisotropy>0,At=x.clearcoat>0,Dt=x.dispersion>0,U=x.retroreflectivity>0,v=x.iridescence>0,K=x.sheen>0,nt=x.transmission>0,ft=S&&!!x.anisotropyMap,wt=At&&!!x.clearcoatMap,bt=At&&!!x.clearcoatNormalMap,dt=At&&!!x.clearcoatRoughnessMap,pt=v&&!!x.iridescenceMap,It=v&&!!x.iridescenceThicknessMap,Wt=K&&!!x.sheenColorMap,Nt=K&&!!x.sheenRoughnessMap,Ut=!!x.specularMap,Ct=!!x.specularColorMap,Qt=!!x.specularIntensityMap,ne=nt&&!!x.transmissionMap,j=nt&&!!x.thicknessMap,Ft=!!x.gradientMap,mt=!!x.alphaMap,Ot=x.alphaTest>0,zt=!!x.alphaHash,_t=!!x.extensions,Rt=Oi;x.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Rt=r.toneMapping);let Mt={shaderID:D,shaderType:x.type,shaderName:x.name,vertexShader:Et,fragmentShader:Bt,defines:x.defines,customVertexShaderID:Lt,customFragmentShaderID:z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:V,batchingColor:V&&L._colorsTexture!==null,instancing:N,instancingColor:N&&L.instanceColor!==null,instancingMorph:N&&L.morphTexture!==null,outputColorSpace:B===null?r.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Te.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:rt,matcap:ht,envMap:I,envMapMode:I&&Z.mapping,envMapCubeUVHeight:tt,aoMap:q,lightMap:H,bumpMap:P,normalMap:it,displacementMap:ut,emissiveMap:St,normalMapObjectSpace:it&&x.normalMapType===N0,normalMapTangentSpace:it&&x.normalMapType===Ol,packedNormalMap:it&&x.normalMapType===Ol&&Cb(x.normalMap.format),metalnessMap:Q,roughnessMap:J,anisotropy:S,anisotropyMap:ft,clearcoat:At,clearcoatMap:wt,clearcoatNormalMap:bt,clearcoatRoughnessMap:dt,dispersion:Dt,retroreflection:U,iridescence:v,iridescenceMap:pt,iridescenceThicknessMap:It,sheen:K,sheenColorMap:Wt,sheenRoughnessMap:Nt,specularMap:Ut,specularColorMap:Ct,specularIntensityMap:Qt,transmission:nt,transmissionMap:ne,thicknessMap:j,gradientMap:Ft,opaque:x.transparent===!1&&x.blending===sa&&x.alphaToCoverage===!1,alphaMap:mt,alphaTest:Ot,alphaHash:zt,combine:x.combine,mapUv:rt&&p(x.map.channel),aoMapUv:q&&p(x.aoMap.channel),lightMapUv:H&&p(x.lightMap.channel),bumpMapUv:P&&p(x.bumpMap.channel),normalMapUv:it&&p(x.normalMap.channel),displacementMapUv:ut&&p(x.displacementMap.channel),emissiveMapUv:St&&p(x.emissiveMap.channel),metalnessMapUv:Q&&p(x.metalnessMap.channel),roughnessMapUv:J&&p(x.roughnessMap.channel),anisotropyMapUv:ft&&p(x.anisotropyMap.channel),clearcoatMapUv:wt&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:bt&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:It&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&p(x.sheenRoughnessMap.channel),specularMapUv:Ut&&p(x.specularMap.channel),specularColorMapUv:Ct&&p(x.specularColorMap.channel),specularIntensityMapUv:Qt&&p(x.specularIntensityMap.channel),transmissionMapUv:ne&&p(x.transmissionMap.channel),thicknessMapUv:j&&p(x.thicknessMap.channel),alphaMapUv:mt&&p(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(it||S),vertexNormals:!!W.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!W.attributes.uv&&(rt||mt),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||W.attributes.normal===void 0&&it===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:F,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:yt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:Rt,decodeVideoTexture:rt&&x.map.isVideoTexture===!0&&Te.getTransfer(x.map.colorSpace)===Oe,decodeVideoTextureEmissive:St&&x.emissiveMap.isVideoTexture===!0&&Te.getTransfer(x.emissiveMap.colorSpace)===Oe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ui,flipSided:x.side===Vn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:_t&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&x.extensions.multiDraw===!0||V)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function m(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)b.push(R),b.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(g(b,x),T(b,x),b.push(r.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function g(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function T(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function A(x){let b=d[x.type],R;if(b){let k=Dr[b];R=Q0.clone(k.uniforms)}else R=x.uniforms;return R}function y(x,b){let R=h.get(b);return R!==void 0?++R.usedTimes:(R=new Ab(r,b,x,i),c.push(R),h.set(b,R)),R}function M(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){a.remove(x)}function C(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:A,acquireProgram:y,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:C}}function Pb(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Ib(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function xg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function yg(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,p,_,m,g){let T=r[t];return T===void 0?(T={id:u.id,object:u,geometry:d,material:p,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:g},r[t]=T):(T.id=u.id,T.object=u,T.geometry=d,T.material=p,T.materialVariant=o(u),T.groupOrder=_,T.renderOrder=u.renderOrder,T.z=m,T.group=g),t++,T}function l(u,d,p,_,m,g,T){T.reversedDepth===!0&&(m=-m);let A=a(u,d,p,_,m,g);p.transmission>0?n.push(A):p.transparent===!0?i.push(A):e.push(A)}function c(u,d,p,_,m,g){let T=a(u,d,p,_,m,g);p.transmission>0?n.unshift(T):p.transparent===!0?i.unshift(T):e.unshift(T)}function h(u,d){e.length>1&&e.sort(u||Ib),n.length>1&&n.sort(d||xg),i.length>1&&i.sort(d||xg)}function f(){for(let u=t,d=r.length;u<d;u++){let p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:f,sort:h}}function Lb(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new yg,r.set(n,[o])):i>=s.length?(o=new yg,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Db(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new Kt};break;case"SpotLight":e={position:new G,direction:new G,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new G,halfWidth:new G,halfHeight:new G};break}return r[t.id]=e,e}}}function Nb(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var Ub=0;function Fb(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Ob(r){let t=new Db,e=Nb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);let i=new G,s=new Be,o=new Be;function a(c){let h=0,f=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,p=0,_=0,m=0,g=0,T=0,A=0,y=0,M=0,w=0,C=0,x=0,b=0,R=0;c.sort(Fb);for(let L=0,Y=c.length;L<Y;L++){let O=c[L],W=O.color,et=O.intensity,X=O.distance,Z=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Cs?Z=O.shadow.map.texture:Z=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)h+=W.r*et,f+=W.g*et,u+=W.b*et;else if(O.isLightProbe){for(let tt=0;tt<9;tt++)n.probe[tt].addScaledVector(O.sh.coefficients[tt],et);R++}else if(O.isSunLight){let tt=t.get(O);if(tt.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let D=O.shadow,st=e.get(O);st.shadowIntensity=D.intensity,st.shadowBias=D.bias,st.shadowNormalBias=D.normalBias,st.shadowRadius=D.radius,st.shadowMapSize.copy(D.mapSize).multiply(D.getFrameExtents()),n.sunShadow[p]=st,n.sunShadowMap[p]=Z;let gt=D.getViewportCount();for(let yt=0;yt<gt;yt++)n.sunShadowMatrix[_+yt]=D.getMatrix(yt),n.sunShadowCascade[_+yt]=D._cascadeData[yt];_+=gt,p++}n.sun[d]=tt,d++}else if(O.isDirectionalLight){let tt=t.get(O);if(tt.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let D=O.shadow,st=e.get(O);st.shadowIntensity=D.intensity,st.shadowBias=D.bias,st.shadowNormalBias=D.normalBias,st.shadowRadius=D.radius,st.shadowMapSize=D.mapSize,n.directionalShadow[m]=st,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=O.shadow.matrix,M++}n.directional[m]=tt,m++}else if(O.isSpotLight){let tt=t.get(O);tt.position.setFromMatrixPosition(O.matrixWorld),tt.color.copy(W).multiplyScalar(et),tt.distance=X,tt.coneCos=Math.cos(O.angle),tt.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),tt.decay=O.decay,n.spot[T]=tt;let D=O.shadow;if(O.map&&(n.spotLightMap[x]=O.map,x++,D.updateMatrices(O),O.castShadow&&b++),n.spotLightMatrix[T]=D.matrix,O.castShadow){let st=e.get(O);st.shadowIntensity=D.intensity,st.shadowBias=D.bias,st.shadowNormalBias=D.normalBias,st.shadowRadius=D.radius,st.shadowMapSize=D.mapSize,n.spotShadow[T]=st,n.spotShadowMap[T]=Z,C++}T++}else if(O.isRectAreaLight){let tt=t.get(O);tt.color.copy(W).multiplyScalar(et),tt.halfWidth.set(O.width*.5,0,0),tt.halfHeight.set(0,O.height*.5,0),n.rectArea[A]=tt,A++}else if(O.isPointLight){let tt=t.get(O);if(tt.color.copy(O.color).multiplyScalar(O.intensity),tt.distance=O.distance,tt.decay=O.decay,O.castShadow){let D=O.shadow,st=e.get(O);st.shadowIntensity=D.intensity,st.shadowBias=D.bias,st.shadowNormalBias=D.normalBias,st.shadowRadius=D.radius,st.shadowMapSize=D.mapSize,st.shadowCameraNear=D.camera.near,st.shadowCameraFar=D.camera.far,n.pointShadow[g]=st,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=O.shadow.matrix,w++}n.point[g]=tt,g++}else if(O.isHemisphereLight){let tt=t.get(O);tt.skyColor.copy(O.color).multiplyScalar(et),tt.groundColor.copy(O.groundColor).multiplyScalar(et),n.hemi[y]=tt,y++}}A>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ht.LTC_FLOAT_1,n.rectAreaLTC2=Ht.LTC_FLOAT_2):(n.rectAreaLTC1=Ht.LTC_HALF_1,n.rectAreaLTC2=Ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let k=n.hash;(k.sunLength!==d||k.directionalLength!==m||k.pointLength!==g||k.spotLength!==T||k.rectAreaLength!==A||k.hemiLength!==y||k.numSunShadows!==p||k.numDirectionalShadows!==M||k.numPointShadows!==w||k.numSpotShadows!==C||k.numSpotMaps!==x||k.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=m,n.spot.length=T,n.rectArea.length=A,n.point.length=g,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+x-b,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,k.sunLength=d,k.directionalLength=m,k.pointLength=g,k.spotLength=T,k.rectAreaLength=A,k.hemiLength=y,k.numSunShadows=p,k.numDirectionalShadows=M,k.numPointShadows=w,k.numSpotShadows=C,k.numSpotMaps=x,k.numLightProbes=R,n.version=Ub++)}function l(c,h){let f=0,u=0,d=0,p=0,_=0,m=0,g=h.matrixWorldInverse;for(let T=0,A=c.length;T<A;T++){let y=c[T];if(y.isSunLight){let M=n.sun[f];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),f++}else if(y.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),u++}else if(y.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let M=n.rectArea[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function vg(r){let t=new Ob(r),e=[],n=[],i=[];function s(u){f.camera=u,e.length=0,n.length=0,i.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Bb(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new vg(r),t.set(i,[a])):s>=o.length?(a=new vg(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var zb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Vb=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],Gb=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Sg=new Be,zl=new G,Yd=new G;function Hb(r,t,e){let n=new jo,i=new vt,s=new vt,o=new nn,a=new vh,l=new Sh,c={},h=e.maxTextureSize,f={[Ts]:Vn,[Vn]:Ts,[ui]:ui},u=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:zb,fragmentShader:kb}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let p=new xn;p.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ie(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cl;let g=this.type;this.render=function(w,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Nh&&(oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Cl);let b=r.getRenderTarget(),R=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),L=r.state;L.setBlending(Pr),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let Y=g!==this.type;Y&&C.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(W=>W.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,W=w.length;O<W;O++){let et=w[O],X=et.shadow;if(X===void 0){oe("WebGLShadowMap:",et,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);let Z=X.getFrameExtents();i.multiply(Z),s.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Z.x),i.x=s.x*Z.x,X.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Z.y),i.y=s.y*Z.y,X.mapSize.y=s.y));let tt=r.state.buffers.depth.getReversed();if(X.camera._reversedDepth=tt,X.map===null||Y===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===ra){if(et.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Qn(i.x,i.y,{format:Cs,type:gr,minFilter:En,magFilter:En,generateMipmaps:!1}),X.map.texture.name=et.name+".shadowMap",X.map.depthTexture=new xs(i.x,i.y,Ki),X.map.depthTexture.name=et.name+".shadowMapDepth",X.map.depthTexture.format=Tr,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Un,X.map.depthTexture.magFilter=Un}else et.isPointLight?(X.map=new Au(i.x),X.map.depthTexture=new fh(i.x,mr)):(X.map=new Qn(i.x,i.y),X.map.depthTexture=new xs(i.x,i.y,mr)),X.map.depthTexture.name=et.name+".shadowMap",X.map.depthTexture.format=Tr,this.type===Cl?(X.map.depthTexture.compareFunction=tt?bu:Mu,X.map.depthTexture.minFilter=En,X.map.depthTexture.magFilter=En):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Un,X.map.depthTexture.magFilter=Un);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==i.x||X.map.height!==i.y)&&X.map.setSize(i.x,i.y);let D=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();et.isPointLight!==!0&&X.updateMatrices(et,x);for(let st=0;st<D;st++){let gt=X.getCamera(st);if(et.isPointLight){let yt=X.camera,Et=X.matrix,Bt=et.distance||yt.far;Bt!==yt.far&&(yt.far=Bt,yt.updateProjectionMatrix()),zl.setFromMatrixPosition(et.matrixWorld),yt.position.copy(zl),Yd.copy(yt.position),Yd.add(Vb[st]),yt.up.copy(Gb[st]),yt.lookAt(Yd),yt.updateMatrixWorld(),Et.makeTranslation(-zl.x,-zl.y,-zl.z),Sg.multiplyMatrices(yt.projectionMatrix,yt.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Sg,yt.coordinateSystem,yt.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)r.setRenderTarget(X.map,st),r.clear();else{st===0&&(r.setRenderTarget(X.map),r.clear());let yt=X.getViewport(st);o.set(s.x*yt.x,s.y*yt.y,s.x*yt.z,s.y*yt.w),L.viewport(o)}n=X.getFrustum(st),y(C,x,gt,et,this.type)}X.isPointLightShadow!==!0&&this.type===ra&&T(X,x),X.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(b,R,k)};function T(w,C){let x=t.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new Qn(i.x,i.y,{format:Cs,type:gr}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(C,null,x,u,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(C,null,x,d,_,null)}function A(w,C,x,b){let R=null,k=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(k!==void 0)R=k;else if(R=x.isPointLight===!0?l:a,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let L=R.uuid,Y=C.uuid,O=c[L];O===void 0&&(O={},c[L]=O);let W=O[Y];W===void 0&&(W=R.clone(),O[Y]=W,C.addEventListener("dispose",M)),R=W}if(R.visible=C.visible,R.wireframe=C.wireframe,b===ra?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:f[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=r.properties.get(R);L.light=x}return R}function y(w,C,x,b,R){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===ra)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let Y=t.update(w),O=w.material;if(Array.isArray(O)){let W=Y.groups;for(let et=0,X=W.length;et<X;et++){let Z=W[et],tt=O[Z.materialIndex];if(tt&&tt.visible){let D=A(w,tt,b,R);w.onBeforeShadow(r,w,C,x,Y,D,Z),r.renderBufferDirect(x,null,Y,D,w,Z),w.onAfterShadow(r,w,C,x,Y,D,Z)}}}else if(O.visible){let W=A(w,O,b,R);w.onBeforeShadow(r,w,C,x,Y,W,null),r.renderBufferDirect(x,null,Y,W,w,null),w.onAfterShadow(r,w,C,x,Y,W,null)}}let L=w.children;for(let Y=0,O=L.length;Y<O;Y++)y(L[Y],C,x,b,R)}function M(w){w.target.removeEventListener("dispose",M);for(let x in c){let b=c[x],R=w.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}function Wb(r,t){function e(){let j=!1,Ft=new nn,mt=null,Ot=new nn(0,0,0,0);return{setMask:function(zt){mt!==zt&&!j&&(r.colorMask(zt,zt,zt,zt),mt=zt)},setLocked:function(zt){j=zt},setClear:function(zt,_t,Rt,Mt,te){te===!0&&(zt*=Mt,_t*=Mt,Rt*=Mt),Ft.set(zt,_t,Rt,Mt),Ot.equals(Ft)===!1&&(r.clearColor(zt,_t,Rt,Mt),Ot.copy(Ft))},reset:function(){j=!1,mt=null,Ot.set(-1,0,0,0)}}}function n(){let j=!1,Ft=!1,mt=null,Ot=null,zt=null;return{setReversed:function(_t){if(Ft!==_t){let Rt=t.get("EXT_clip_control");_t?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),Ft=_t;let Mt=zt;zt=null,this.setClear(Mt)}},getReversed:function(){return Ft},setTest:function(_t){_t?B(r.DEPTH_TEST):F(r.DEPTH_TEST)},setMask:function(_t){mt!==_t&&!j&&(r.depthMask(_t),mt=_t)},setFunc:function(_t){if(Ft&&(_t=X0[_t]),Ot!==_t){switch(_t){case jc:r.depthFunc(r.NEVER);break;case th:r.depthFunc(r.ALWAYS);break;case eh:r.depthFunc(r.LESS);break;case Ho:r.depthFunc(r.LEQUAL);break;case nh:r.depthFunc(r.EQUAL);break;case ih:r.depthFunc(r.GEQUAL);break;case rh:r.depthFunc(r.GREATER);break;case sh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ot=_t}},setLocked:function(_t){j=_t},setClear:function(_t){zt!==_t&&(zt=_t,Ft&&(_t=1-_t),r.clearDepth(_t))},reset:function(){j=!1,mt=null,Ot=null,zt=null,Ft=!1}}}function i(){let j=!1,Ft=null,mt=null,Ot=null,zt=null,_t=null,Rt=null,Mt=null,te=null;return{setTest:function(Tt){j||(Tt?B(r.STENCIL_TEST):F(r.STENCIL_TEST))},setMask:function(Tt){Ft!==Tt&&!j&&(r.stencilMask(Tt),Ft=Tt)},setFunc:function(Tt,ee,Yt){(mt!==Tt||Ot!==ee||zt!==Yt)&&(r.stencilFunc(Tt,ee,Yt),mt=Tt,Ot=ee,zt=Yt)},setOp:function(Tt,ee,Yt){(_t!==Tt||Rt!==ee||Mt!==Yt)&&(r.stencilOp(Tt,ee,Yt),_t=Tt,Rt=ee,Mt=Yt)},setLocked:function(Tt){j=Tt},setClear:function(Tt){te!==Tt&&(r.clearStencil(Tt),te=Tt)},reset:function(){j=!1,Ft=null,mt=null,Ot=null,zt=null,_t=null,Rt=null,Mt=null,te=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,p=[],_=null,m=!1,g=null,T=null,A=null,y=null,M=null,w=null,C=null,x=new Kt(0,0,0),b=0,R=!1,k=null,L=null,Y=null,O=null,W=null,et=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,Z=0,tt=r.getParameter(r.VERSION);tt.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(tt)[1]),X=Z>=1):tt.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),X=Z>=2);let D=null,st={},gt=r.getParameter(r.SCISSOR_BOX),yt=r.getParameter(r.VIEWPORT),Et=new nn().fromArray(gt),Bt=new nn().fromArray(yt);function Lt(j,Ft,mt,Ot){let zt=new Uint8Array(4),_t=r.createTexture();r.bindTexture(j,_t),r.texParameteri(j,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(j,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Rt=0;Rt<mt;Rt++)j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?r.texImage3D(Ft,0,r.RGBA,1,1,Ot,0,r.RGBA,r.UNSIGNED_BYTE,zt):r.texImage2D(Ft+Rt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,zt);return _t}let z={};z[r.TEXTURE_2D]=Lt(r.TEXTURE_2D,r.TEXTURE_2D,1),z[r.TEXTURE_CUBE_MAP]=Lt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[r.TEXTURE_2D_ARRAY]=Lt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),z[r.TEXTURE_3D]=Lt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),B(r.DEPTH_TEST),o.setFunc(Ho),P(!1),it(hd),B(r.CULL_FACE),q(Pr);function B(j){h[j]!==!0&&(r.enable(j),h[j]=!0)}function F(j){h[j]!==!1&&(r.disable(j),h[j]=!1)}function N(j,Ft){return u[j]!==Ft?(r.bindFramebuffer(j,Ft),u[j]=Ft,j===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=Ft),j===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=Ft),!0):!1}function V(j,Ft){let mt=p,Ot=!1;if(j){mt=d.get(Ft),mt===void 0&&(mt=[],d.set(Ft,mt));let zt=j.textures;if(mt.length!==zt.length||mt[0]!==r.COLOR_ATTACHMENT0){for(let _t=0,Rt=zt.length;_t<Rt;_t++)mt[_t]=r.COLOR_ATTACHMENT0+_t;mt.length=zt.length,Ot=!0}}else mt[0]!==r.BACK&&(mt[0]=r.BACK,Ot=!0);Ot&&r.drawBuffers(mt)}function rt(j){return _!==j?(r.useProgram(j),_=j,!0):!1}let ht={[Ks]:r.FUNC_ADD,[d0]:r.FUNC_SUBTRACT,[p0]:r.FUNC_REVERSE_SUBTRACT};ht[m0]=r.MIN,ht[g0]=r.MAX;let I={[_0]:r.ZERO,[x0]:r.ONE,[y0]:r.SRC_COLOR,[dd]:r.SRC_ALPHA,[T0]:r.SRC_ALPHA_SATURATE,[b0]:r.DST_COLOR,[S0]:r.DST_ALPHA,[v0]:r.ONE_MINUS_SRC_COLOR,[pd]:r.ONE_MINUS_SRC_ALPHA,[w0]:r.ONE_MINUS_DST_COLOR,[M0]:r.ONE_MINUS_DST_ALPHA,[A0]:r.CONSTANT_COLOR,[E0]:r.ONE_MINUS_CONSTANT_COLOR,[C0]:r.CONSTANT_ALPHA,[R0]:r.ONE_MINUS_CONSTANT_ALPHA};function q(j,Ft,mt,Ot,zt,_t,Rt,Mt,te,Tt){if(j===Pr){m===!0&&(F(r.BLEND),m=!1);return}if(m===!1&&(B(r.BLEND),m=!0),j!==f0){if(j!==g||Tt!==R){if((T!==Ks||M!==Ks)&&(r.blendEquation(r.FUNC_ADD),T=Ks,M=Ks),Tt)switch(j){case sa:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case fi:r.blendFunc(r.ONE,r.ONE);break;case ud:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fd:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:le("WebGLState: Invalid blending: ",j);break}else switch(j){case sa:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case fi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case ud:le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fd:le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:le("WebGLState: Invalid blending: ",j);break}A=null,y=null,w=null,C=null,x.set(0,0,0),b=0,g=j,R=Tt}return}zt=zt||Ft,_t=_t||mt,Rt=Rt||Ot,(Ft!==T||zt!==M)&&(r.blendEquationSeparate(ht[Ft],ht[zt]),T=Ft,M=zt),(mt!==A||Ot!==y||_t!==w||Rt!==C)&&(r.blendFuncSeparate(I[mt],I[Ot],I[_t],I[Rt]),A=mt,y=Ot,w=_t,C=Rt),(Mt.equals(x)===!1||te!==b)&&(r.blendColor(Mt.r,Mt.g,Mt.b,te),x.copy(Mt),b=te),g=j,R=!1}function H(j,Ft){j.side===ui?F(r.CULL_FACE):B(r.CULL_FACE);let mt=j.side===Vn;Ft&&(mt=!mt),P(mt),j.blending===sa&&j.transparent===!1?q(Pr):q(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),o.setFunc(j.depthFunc),o.setTest(j.depthTest),o.setMask(j.depthWrite),s.setMask(j.colorWrite);let Ot=j.stencilWrite;a.setTest(Ot),Ot&&(a.setMask(j.stencilWriteMask),a.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),a.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),St(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?B(r.SAMPLE_ALPHA_TO_COVERAGE):F(r.SAMPLE_ALPHA_TO_COVERAGE)}function P(j){k!==j&&(j?r.frontFace(r.CW):r.frontFace(r.CCW),k=j)}function it(j){j!==h0?(B(r.CULL_FACE),j!==L&&(j===hd?r.cullFace(r.BACK):j===u0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):F(r.CULL_FACE),L=j}function ut(j){j!==Y&&(X&&r.lineWidth(j),Y=j)}function St(j,Ft,mt){j?(B(r.POLYGON_OFFSET_FILL),(O!==Ft||W!==mt)&&(O=Ft,W=mt,o.getReversed()&&(Ft=-Ft),r.polygonOffset(Ft,mt))):F(r.POLYGON_OFFSET_FILL)}function Q(j){j?B(r.SCISSOR_TEST):F(r.SCISSOR_TEST)}function J(j){j===void 0&&(j=r.TEXTURE0+et-1),D!==j&&(r.activeTexture(j),D=j)}function S(j,Ft,mt){mt===void 0&&(D===null?mt=r.TEXTURE0+et-1:mt=D);let Ot=st[mt];Ot===void 0&&(Ot={type:void 0,texture:void 0},st[mt]=Ot),(Ot.type!==j||Ot.texture!==Ft)&&(D!==mt&&(r.activeTexture(mt),D=mt),r.bindTexture(j,Ft||z[j]),Ot.type=j,Ot.texture=Ft)}function At(){let j=st[D];j!==void 0&&j.type!==void 0&&(r.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function Dt(){try{r.compressedTexImage2D(...arguments)}catch(j){le("WebGLState:",j)}}function U(){try{r.compressedTexImage3D(...arguments)}catch(j){le("WebGLState:",j)}}function v(){try{r.texSubImage2D(...arguments)}catch(j){le("WebGLState:",j)}}function K(){try{r.texSubImage3D(...arguments)}catch(j){le("WebGLState:",j)}}function nt(){try{r.compressedTexSubImage2D(...arguments)}catch(j){le("WebGLState:",j)}}function ft(){try{r.compressedTexSubImage3D(...arguments)}catch(j){le("WebGLState:",j)}}function wt(){try{r.texStorage2D(...arguments)}catch(j){le("WebGLState:",j)}}function bt(){try{r.texStorage3D(...arguments)}catch(j){le("WebGLState:",j)}}function dt(){try{r.texImage2D(...arguments)}catch(j){le("WebGLState:",j)}}function pt(){try{r.texImage3D(...arguments)}catch(j){le("WebGLState:",j)}}function It(j){return f[j]!==void 0?f[j]:r.getParameter(j)}function Wt(j,Ft){f[j]!==Ft&&(r.pixelStorei(j,Ft),f[j]=Ft)}function Nt(j){Et.equals(j)===!1&&(r.scissor(j.x,j.y,j.z,j.w),Et.copy(j))}function Ut(j){Bt.equals(j)===!1&&(r.viewport(j.x,j.y,j.z,j.w),Bt.copy(j))}function Ct(j,Ft){let mt=c.get(Ft);mt===void 0&&(mt=new WeakMap,c.set(Ft,mt));let Ot=mt.get(j);Ot===void 0&&(Ot=r.getUniformBlockIndex(Ft,j.name),mt.set(j,Ot))}function Qt(j,Ft){let Ot=c.get(Ft).get(j);l.get(Ft)!==Ot&&(r.uniformBlockBinding(Ft,Ot,j.__bindingPointIndex),l.set(Ft,Ot))}function ne(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},f={},D=null,st={},u={},d=new WeakMap,p=[],_=null,m=!1,g=null,T=null,A=null,y=null,M=null,w=null,C=null,x=new Kt(0,0,0),b=0,R=!1,k=null,L=null,Y=null,O=null,W=null,Et.set(0,0,r.canvas.width,r.canvas.height),Bt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:B,disable:F,bindFramebuffer:N,drawBuffers:V,useProgram:rt,setBlending:q,setMaterial:H,setFlipSided:P,setCullFace:it,setLineWidth:ut,setPolygonOffset:St,setScissorTest:Q,activeTexture:J,bindTexture:S,unbindTexture:At,compressedTexImage2D:Dt,compressedTexImage3D:U,texImage2D:dt,texImage3D:pt,pixelStorei:Wt,getParameter:It,updateUBOMapping:Ct,uniformBlockBinding:Qt,texStorage2D:wt,texStorage3D:bt,texSubImage2D:v,texSubImage3D:K,compressedTexSubImage2D:nt,compressedTexSubImage3D:ft,scissor:Nt,viewport:Ut,reset:ne}}function Xb(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,h=new WeakMap,f=new Set,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(U,v){return p?new OffscreenCanvas(U,v):tl("canvas")}function m(U,v,K){let nt=1,ft=Dt(U);if((ft.width>K||ft.height>K)&&(nt=K/Math.max(ft.width,ft.height)),nt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let wt=Math.floor(nt*ft.width),bt=Math.floor(nt*ft.height);u===void 0&&(u=_(wt,bt));let dt=v?_(wt,bt):u;return dt.width=wt,dt.height=bt,dt.getContext("2d").drawImage(U,0,0,wt,bt),oe("WebGLRenderer: Texture has been resized from ("+ft.width+"x"+ft.height+") to ("+wt+"x"+bt+")."),dt}else return"data"in U&&oe("WebGLRenderer: Image in DataTexture is too big ("+ft.width+"x"+ft.height+")."),U;return U}function g(U){return U.generateMipmaps}function T(U){r.generateMipmap(U)}function A(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(U,v,K,nt,ft,wt=!1){if(U!==null){if(r[U]!==void 0)return r[U];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let bt;nt&&(bt=t.get("EXT_texture_norm16"),bt||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let dt=v;if(v===r.RED&&(K===r.FLOAT&&(dt=r.R32F),K===r.HALF_FLOAT&&(dt=r.R16F),K===r.UNSIGNED_BYTE&&(dt=r.R8),K===r.UNSIGNED_SHORT&&bt&&(dt=bt.R16_EXT),K===r.SHORT&&bt&&(dt=bt.R16_SNORM_EXT)),v===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(dt=r.R8UI),K===r.UNSIGNED_SHORT&&(dt=r.R16UI),K===r.UNSIGNED_INT&&(dt=r.R32UI),K===r.BYTE&&(dt=r.R8I),K===r.SHORT&&(dt=r.R16I),K===r.INT&&(dt=r.R32I)),v===r.RG&&(K===r.FLOAT&&(dt=r.RG32F),K===r.HALF_FLOAT&&(dt=r.RG16F),K===r.UNSIGNED_BYTE&&(dt=r.RG8),K===r.UNSIGNED_SHORT&&bt&&(dt=bt.RG16_EXT),K===r.SHORT&&bt&&(dt=bt.RG16_SNORM_EXT)),v===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(dt=r.RG8UI),K===r.UNSIGNED_SHORT&&(dt=r.RG16UI),K===r.UNSIGNED_INT&&(dt=r.RG32UI),K===r.BYTE&&(dt=r.RG8I),K===r.SHORT&&(dt=r.RG16I),K===r.INT&&(dt=r.RG32I)),v===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(dt=r.RGB8UI),K===r.UNSIGNED_SHORT&&(dt=r.RGB16UI),K===r.UNSIGNED_INT&&(dt=r.RGB32UI),K===r.BYTE&&(dt=r.RGB8I),K===r.SHORT&&(dt=r.RGB16I),K===r.INT&&(dt=r.RGB32I)),v===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(dt=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(dt=r.RGBA16UI),K===r.UNSIGNED_INT&&(dt=r.RGBA32UI),K===r.BYTE&&(dt=r.RGBA8I),K===r.SHORT&&(dt=r.RGBA16I),K===r.INT&&(dt=r.RGBA32I)),v===r.RGB&&(K===r.UNSIGNED_SHORT&&bt&&(dt=bt.RGB16_EXT),K===r.SHORT&&bt&&(dt=bt.RGB16_SNORM_EXT),K===r.UNSIGNED_INT_5_9_9_9_REV&&(dt=r.RGB9_E5),K===r.UNSIGNED_INT_10F_11F_11F_REV&&(dt=r.R11F_G11F_B10F)),v===r.RGBA){let pt=wt?ja:Te.getTransfer(ft);K===r.FLOAT&&(dt=r.RGBA32F),K===r.HALF_FLOAT&&(dt=r.RGBA16F),K===r.UNSIGNED_BYTE&&(dt=pt===Oe?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT&&bt&&(dt=bt.RGBA16_EXT),K===r.SHORT&&bt&&(dt=bt.RGBA16_SNORM_EXT),K===r.UNSIGNED_SHORT_4_4_4_4&&(dt=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(dt=r.RGB5_A1)}return(dt===r.R16F||dt===r.R32F||dt===r.RG16F||dt===r.RG32F||dt===r.RGBA16F||dt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function M(U,v){let K;return U?v===null||v===mr||v===aa?K=r.DEPTH24_STENCIL8:v===Ki?K=r.DEPTH32F_STENCIL8:v===oa&&(K=r.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===mr||v===aa?K=r.DEPTH_COMPONENT24:v===Ki?K=r.DEPTH_COMPONENT32F:v===oa&&(K=r.DEPTH_COMPONENT16),K}function w(U,v){return g(U)===!0||U.isFramebufferTexture&&U.minFilter!==Un&&U.minFilter!==En?Math.log2(Math.max(v.width,v.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?v.mipmaps.length:1}function C(U){let v=U.target;v.removeEventListener("dispose",C),b(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&f.delete(v)}function x(U){let v=U.target;v.removeEventListener("dispose",x),k(v)}function b(U){let v=n.get(U);if(v.__webglInit===void 0)return;let K=U.source,nt=d.get(K);if(nt){let ft=nt[v.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&R(U),Object.keys(nt).length===0&&d.delete(K)}n.remove(U)}function R(U){let v=n.get(U);r.deleteTexture(v.__webglTexture);let K=U.source,nt=d.get(K);delete nt[v.__cacheKey],o.memory.textures--}function k(U){let v=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(v.__webglFramebuffer[nt]))for(let ft=0;ft<v.__webglFramebuffer[nt].length;ft++)r.deleteFramebuffer(v.__webglFramebuffer[nt][ft]);else r.deleteFramebuffer(v.__webglFramebuffer[nt]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[nt])}else{if(Array.isArray(v.__webglFramebuffer))for(let nt=0;nt<v.__webglFramebuffer.length;nt++)r.deleteFramebuffer(v.__webglFramebuffer[nt]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let nt=0;nt<v.__webglColorRenderbuffer.length;nt++)v.__webglColorRenderbuffer[nt]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[nt]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let K=U.textures;for(let nt=0,ft=K.length;nt<ft;nt++){let wt=n.get(K[nt]);wt.__webglTexture&&(r.deleteTexture(wt.__webglTexture),o.memory.textures--),n.remove(K[nt])}n.remove(U)}let L=0;function Y(){L=0}function O(){return L}function W(U){L=U}function et(){let U=L;return U>=i.maxTextures&&oe("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+i.maxTextures),L+=1,U}function X(U){let v=[];return v.push(U.wrapS),v.push(U.wrapT),v.push(U.wrapR||0),v.push(U.magFilter),v.push(U.minFilter),v.push(U.anisotropy),v.push(U.internalFormat),v.push(U.format),v.push(U.type),v.push(U.generateMipmaps),v.push(U.premultiplyAlpha),v.push(U.flipY),v.push(U.unpackAlignment),v.push(U.colorSpace),v.join()}function Z(U,v){let K=n.get(U);if(U.isVideoTexture&&S(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&K.__version!==U.version){let nt=U.image;if(nt===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{F(K,U,v);return}}else U.isExternalTexture&&(K.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+v)}function tt(U,v){let K=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){F(K,U,v);return}else U.isExternalTexture&&(K.__webglTexture=U.sourceTexture?U.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+v)}function D(U,v){let K=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){F(K,U,v);return}e.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+v)}function st(U,v){let K=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&K.__version!==U.version){N(K,U,v);return}e.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+v)}let gt={[Wo]:r.REPEAT,[Ji]:r.CLAMP_TO_EDGE,[Xo]:r.MIRRORED_REPEAT},yt={[Un]:r.NEAREST,[L0]:r.NEAREST_MIPMAP_NEAREST,[Pl]:r.NEAREST_MIPMAP_LINEAR,[En]:r.LINEAR,[Bh]:r.LINEAR_MIPMAP_NEAREST,[Ir]:r.LINEAR_MIPMAP_LINEAR},Et={[F0]:r.NEVER,[V0]:r.ALWAYS,[O0]:r.LESS,[Mu]:r.LEQUAL,[B0]:r.EQUAL,[bu]:r.GEQUAL,[z0]:r.GREATER,[k0]:r.NOTEQUAL};function Bt(U,v){if(v.type===Ki&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===En||v.magFilter===Bh||v.magFilter===Pl||v.magFilter===Ir||v.minFilter===En||v.minFilter===Bh||v.minFilter===Pl||v.minFilter===Ir)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,gt[v.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,gt[v.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,gt[v.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,yt[v.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,yt[v.minFilter]),v.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,Et[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Un||v.minFilter!==Pl&&v.minFilter!==Ir||v.type===Ki&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let K=t.get("EXT_texture_filter_anisotropic");r.texParameterf(U,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Lt(U,v){let K=!1;U.__webglInit===void 0&&(U.__webglInit=!0,v.addEventListener("dispose",C));let nt=v.source,ft=d.get(nt);ft===void 0&&(ft={},d.set(nt,ft));let wt=X(v);if(wt!==U.__cacheKey){ft[wt]===void 0&&(ft[wt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,K=!0),ft[wt].usedTimes++;let bt=ft[U.__cacheKey];bt!==void 0&&(ft[U.__cacheKey].usedTimes--,bt.usedTimes===0&&R(v)),U.__cacheKey=wt,U.__webglTexture=ft[wt].texture}return K}function z(U,v,K){return Math.floor(Math.floor(U/K)/v)}function B(U,v,K,nt){let wt=U.updateRanges;if(wt.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,K,nt,v.data);else{wt.sort((Wt,Nt)=>Wt.start-Nt.start);let bt=0;for(let Wt=1;Wt<wt.length;Wt++){let Nt=wt[bt],Ut=wt[Wt],Ct=Nt.start+Nt.count,Qt=z(Ut.start,v.width,4),ne=z(Nt.start,v.width,4);Ut.start<=Ct+1&&Qt===ne&&z(Ut.start+Ut.count-1,v.width,4)===Qt?Nt.count=Math.max(Nt.count,Ut.start+Ut.count-Nt.start):(++bt,wt[bt]=Ut)}wt.length=bt+1;let dt=e.getParameter(r.UNPACK_ROW_LENGTH),pt=e.getParameter(r.UNPACK_SKIP_PIXELS),It=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let Wt=0,Nt=wt.length;Wt<Nt;Wt++){let Ut=wt[Wt],Ct=Math.floor(Ut.start/4),Qt=Math.ceil(Ut.count/4),ne=Ct%v.width,j=Math.floor(Ct/v.width),Ft=Qt,mt=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,ne),e.pixelStorei(r.UNPACK_SKIP_ROWS,j),e.texSubImage2D(r.TEXTURE_2D,0,ne,j,Ft,mt,K,nt,v.data)}U.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,dt),e.pixelStorei(r.UNPACK_SKIP_PIXELS,pt),e.pixelStorei(r.UNPACK_SKIP_ROWS,It)}}function F(U,v,K){let nt=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(nt=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(nt=r.TEXTURE_3D);let ft=Lt(U,v),wt=v.source;e.bindTexture(nt,U.__webglTexture,r.TEXTURE0+K);let bt=n.get(wt);if(wt.version!==bt.__version||ft===!0){if(e.activeTexture(r.TEXTURE0+K),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let mt=Te.getPrimaries(Te.workingColorSpace),Ot=v.colorSpace===es?null:Te.getPrimaries(v.colorSpace),zt=v.colorSpace===es||mt===Ot?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt)}e.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment);let pt=m(v.image,!1,i.maxTextureSize);pt=At(v,pt);let It=s.convert(v.format,v.colorSpace),Wt=s.convert(v.type),Nt=y(v.internalFormat,It,Wt,v.normalized,v.colorSpace,v.isVideoTexture);Bt(nt,v);let Ut,Ct=v.mipmaps,Qt=v.isVideoTexture!==!0,ne=bt.__version===void 0||ft===!0,j=wt.dataReady,Ft=w(v,pt);if(v.isDepthTexture)Nt=M(v.format===Es,v.type),ne&&(Qt?e.texStorage2D(r.TEXTURE_2D,1,Nt,pt.width,pt.height):e.texImage2D(r.TEXTURE_2D,0,Nt,pt.width,pt.height,0,It,Wt,null));else if(v.isDataTexture)if(Ct.length>0){Qt&&ne&&e.texStorage2D(r.TEXTURE_2D,Ft,Nt,Ct[0].width,Ct[0].height);for(let mt=0,Ot=Ct.length;mt<Ot;mt++)Ut=Ct[mt],Qt?j&&e.texSubImage2D(r.TEXTURE_2D,mt,0,0,Ut.width,Ut.height,It,Wt,Ut.data):e.texImage2D(r.TEXTURE_2D,mt,Nt,Ut.width,Ut.height,0,It,Wt,Ut.data);v.generateMipmaps=!1}else Qt?(ne&&e.texStorage2D(r.TEXTURE_2D,Ft,Nt,pt.width,pt.height),j&&B(v,pt,It,Wt)):e.texImage2D(r.TEXTURE_2D,0,Nt,pt.width,pt.height,0,It,Wt,pt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Qt&&ne&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Ft,Nt,Ct[0].width,Ct[0].height,pt.depth);for(let mt=0,Ot=Ct.length;mt<Ot;mt++)if(Ut=Ct[mt],v.format!==Qi)if(It!==null)if(Qt){if(j)if(v.layerUpdates.size>0){let zt=Fd(Ut.width,Ut.height,v.format,v.type);for(let _t of v.layerUpdates){let Rt=Ut.data.subarray(_t*zt/Ut.data.BYTES_PER_ELEMENT,(_t+1)*zt/Ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,_t,Ut.width,Ut.height,1,It,Rt)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,0,Ut.width,Ut.height,pt.depth,It,Ut.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,mt,Nt,Ut.width,Ut.height,pt.depth,0,Ut.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?j&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,mt,0,0,0,Ut.width,Ut.height,pt.depth,It,Wt,Ut.data):e.texImage3D(r.TEXTURE_2D_ARRAY,mt,Nt,Ut.width,Ut.height,pt.depth,0,It,Wt,Ut.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Qt&&ne&&e.texStorage2D(r.TEXTURE_2D,Ft,Nt,Ct[0].width,Ct[0].height);for(let mt=0,Ot=Ct.length;mt<Ot;mt++)Ut=Ct[mt],v.format!==Qi?It!==null?Qt?j&&e.compressedTexSubImage2D(r.TEXTURE_2D,mt,0,0,Ut.width,Ut.height,It,Ut.data):e.compressedTexImage2D(r.TEXTURE_2D,mt,Nt,Ut.width,Ut.height,0,Ut.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?j&&e.texSubImage2D(r.TEXTURE_2D,mt,0,0,Ut.width,Ut.height,It,Wt,Ut.data):e.texImage2D(r.TEXTURE_2D,mt,Nt,Ut.width,Ut.height,0,It,Wt,Ut.data)}else if(v.isDataArrayTexture)if(Qt){if(ne&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Ft,Nt,pt.width,pt.height,pt.depth),j)if(v.layerUpdates.size>0){let mt=Fd(pt.width,pt.height,v.format,v.type);for(let Ot of v.layerUpdates){let zt=pt.data.subarray(Ot*mt/pt.data.BYTES_PER_ELEMENT,(Ot+1)*mt/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ot,pt.width,pt.height,1,It,Wt,zt)}v.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,It,Wt,pt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Nt,pt.width,pt.height,pt.depth,0,It,Wt,pt.data);else if(v.isData3DTexture)Qt?(ne&&e.texStorage3D(r.TEXTURE_3D,Ft,Nt,pt.width,pt.height,pt.depth),j&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,It,Wt,pt.data)):e.texImage3D(r.TEXTURE_3D,0,Nt,pt.width,pt.height,pt.depth,0,It,Wt,pt.data);else if(v.isFramebufferTexture){if(ne)if(Qt)e.texStorage2D(r.TEXTURE_2D,Ft,Nt,pt.width,pt.height);else{let mt=pt.width,Ot=pt.height;for(let zt=0;zt<Ft;zt++)e.texImage2D(r.TEXTURE_2D,zt,Nt,mt,Ot,0,It,Wt,null),mt>>=1,Ot>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in r){let mt=r.canvas;if(mt.hasAttribute("layoutsubtree")||mt.setAttribute("layoutsubtree","true"),pt.parentNode!==mt){mt.appendChild(pt),f.add(v),mt.onpaint=Ot=>{let zt=Ot.changedElements;for(let _t of f)zt.includes(_t.image)&&(_t.needsUpdate=!0)},mt.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,pt);else{let zt=r.RGBA,_t=r.RGBA,Rt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,zt,_t,Rt,pt)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Ct.length>0){if(Qt&&ne){let mt=Dt(Ct[0]);e.texStorage2D(r.TEXTURE_2D,Ft,Nt,mt.width,mt.height)}for(let mt=0,Ot=Ct.length;mt<Ot;mt++)Ut=Ct[mt],Qt?j&&e.texSubImage2D(r.TEXTURE_2D,mt,0,0,It,Wt,Ut):e.texImage2D(r.TEXTURE_2D,mt,Nt,It,Wt,Ut);v.generateMipmaps=!1}else if(Qt){if(ne){let mt=Dt(pt);e.texStorage2D(r.TEXTURE_2D,Ft,Nt,mt.width,mt.height)}j&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,It,Wt,pt)}else e.texImage2D(r.TEXTURE_2D,0,Nt,It,Wt,pt);g(v)&&T(nt),bt.__version=wt.version,v.onUpdate&&v.onUpdate(v)}U.__version=v.version}function N(U,v,K){if(v.image.length!==6)return;let nt=Lt(U,v),ft=v.source;e.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+K);let wt=n.get(ft);if(ft.version!==wt.__version||nt===!0){e.activeTexture(r.TEXTURE0+K);let bt=Te.getPrimaries(Te.workingColorSpace),dt=v.colorSpace===es?null:Te.getPrimaries(v.colorSpace),pt=v.colorSpace===es||bt===dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let It=v.isCompressedTexture||v.image[0].isCompressedTexture,Wt=v.image[0]&&v.image[0].isDataTexture,Nt=[];for(let _t=0;_t<6;_t++)!It&&!Wt?Nt[_t]=m(v.image[_t],!0,i.maxCubemapSize):Nt[_t]=Wt?v.image[_t].image:v.image[_t],Nt[_t]=At(v,Nt[_t]);let Ut=Nt[0],Ct=s.convert(v.format,v.colorSpace),Qt=s.convert(v.type),ne=y(v.internalFormat,Ct,Qt,v.normalized,v.colorSpace),j=v.isVideoTexture!==!0,Ft=wt.__version===void 0||nt===!0,mt=ft.dataReady,Ot=w(v,Ut);Bt(r.TEXTURE_CUBE_MAP,v);let zt;if(It){j&&Ft&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Ot,ne,Ut.width,Ut.height);for(let _t=0;_t<6;_t++){zt=Nt[_t].mipmaps;for(let Rt=0;Rt<zt.length;Rt++){let Mt=zt[Rt];v.format!==Qi?Ct!==null?j?mt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt,0,0,Mt.width,Mt.height,Ct,Mt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt,ne,Mt.width,Mt.height,0,Mt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?mt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt,0,0,Mt.width,Mt.height,Ct,Qt,Mt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt,ne,Mt.width,Mt.height,0,Ct,Qt,Mt.data)}}}else{if(zt=v.mipmaps,j&&Ft){zt.length>0&&Ot++;let _t=Dt(Nt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Ot,ne,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Wt){j?mt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Nt[_t].width,Nt[_t].height,Ct,Qt,Nt[_t].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ne,Nt[_t].width,Nt[_t].height,0,Ct,Qt,Nt[_t].data);for(let Rt=0;Rt<zt.length;Rt++){let te=zt[Rt].image[_t].image;j?mt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt+1,0,0,te.width,te.height,Ct,Qt,te.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt+1,ne,te.width,te.height,0,Ct,Qt,te.data)}}else{j?mt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ct,Qt,Nt[_t]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ne,Ct,Qt,Nt[_t]);for(let Rt=0;Rt<zt.length;Rt++){let Mt=zt[Rt];j?mt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt+1,0,0,Ct,Qt,Mt.image[_t]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Rt+1,ne,Ct,Qt,Mt.image[_t])}}}g(v)&&T(r.TEXTURE_CUBE_MAP),wt.__version=ft.version,v.onUpdate&&v.onUpdate(v)}U.__version=v.version}function V(U,v,K,nt,ft,wt){let bt=s.convert(K.format,K.colorSpace),dt=s.convert(K.type),pt=y(K.internalFormat,bt,dt,K.normalized,K.colorSpace),It=n.get(v),Wt=n.get(K);if(Wt.__renderTarget=v,!It.__hasExternalTextures){let Nt=Math.max(1,v.width>>wt),Ut=Math.max(1,v.height>>wt);ft===r.TEXTURE_3D||ft===r.TEXTURE_2D_ARRAY?e.texImage3D(ft,wt,pt,Nt,Ut,v.depth,0,bt,dt,null):e.texImage2D(ft,wt,pt,Nt,Ut,0,bt,dt,null)}e.bindFramebuffer(r.FRAMEBUFFER,U),J(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,ft,Wt.__webglTexture,0,Q(v)):(ft===r.TEXTURE_2D||ft>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,nt,ft,Wt.__webglTexture,wt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function rt(U,v,K){if(r.bindRenderbuffer(r.RENDERBUFFER,U),v.depthBuffer){let nt=v.depthTexture,ft=nt&&nt.isDepthTexture?nt.type:null,wt=M(v.stencilBuffer,ft),bt=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;J(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Q(v),wt,v.width,v.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,Q(v),wt,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,wt,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,bt,r.RENDERBUFFER,U)}else{let nt=v.textures;for(let ft=0;ft<nt.length;ft++){let wt=nt[ft],bt=s.convert(wt.format,wt.colorSpace),dt=s.convert(wt.type),pt=y(wt.internalFormat,bt,dt,wt.normalized,wt.colorSpace);J(v)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Q(v),pt,v.width,v.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,Q(v),pt,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,pt,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ht(U,v,K){let nt=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,U),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ft=n.get(v.depthTexture);if(ft.__renderTarget=v,(!ft.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),nt){if(ft.__webglInit===void 0&&(ft.__webglInit=!0,v.depthTexture.addEventListener("dispose",C)),ft.__webglTexture===void 0){ft.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,ft.__webglTexture),Bt(r.TEXTURE_CUBE_MAP,v.depthTexture);let It=s.convert(v.depthTexture.format),Wt=s.convert(v.depthTexture.type),Nt;v.depthTexture.format===Tr?Nt=r.DEPTH_COMPONENT24:v.depthTexture.format===Es&&(Nt=r.DEPTH24_STENCIL8);for(let Ut=0;Ut<6;Ut++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,Nt,v.width,v.height,0,It,Wt,null)}}else Z(v.depthTexture,0);let wt=ft.__webglTexture,bt=Q(v),dt=nt?r.TEXTURE_CUBE_MAP_POSITIVE_X+K:r.TEXTURE_2D,pt=v.depthTexture.format===Es?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(v.depthTexture.format===Tr)J(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pt,dt,wt,0,bt):r.framebufferTexture2D(r.FRAMEBUFFER,pt,dt,wt,0);else if(v.depthTexture.format===Es)J(v)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pt,dt,wt,0,bt):r.framebufferTexture2D(r.FRAMEBUFFER,pt,dt,wt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function I(U){let v=n.get(U),K=U.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==U.depthTexture){let nt=U.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),nt){let ft=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,nt.removeEventListener("dispose",ft)};nt.addEventListener("dispose",ft),v.__depthDisposeCallback=ft}v.__boundDepthTexture=nt}if(U.depthTexture&&!v.__autoAllocateDepthBuffer)if(K)for(let nt=0;nt<6;nt++)ht(v.__webglFramebuffer[nt],U,nt);else{let nt=U.texture.mipmaps;nt&&nt.length>0?ht(v.__webglFramebuffer[0],U,0):ht(v.__webglFramebuffer,U,0)}else if(K){v.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[nt]),v.__webglDepthbuffer[nt]===void 0)v.__webglDepthbuffer[nt]=r.createRenderbuffer(),rt(v.__webglDepthbuffer[nt],U,!1);else{let ft=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,wt=v.__webglDepthbuffer[nt];r.bindRenderbuffer(r.RENDERBUFFER,wt),r.framebufferRenderbuffer(r.FRAMEBUFFER,ft,r.RENDERBUFFER,wt)}}else{let nt=U.texture.mipmaps;if(nt&&nt.length>0?e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),rt(v.__webglDepthbuffer,U,!1);else{let ft=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,wt=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,wt),r.framebufferRenderbuffer(r.FRAMEBUFFER,ft,r.RENDERBUFFER,wt)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function q(U,v,K){let nt=n.get(U);v!==void 0&&V(nt.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&I(U)}function H(U){let v=U.texture,K=n.get(U),nt=n.get(v);U.addEventListener("dispose",x);let ft=U.textures,wt=U.isWebGLCubeRenderTarget===!0,bt=ft.length>1;if(bt||(nt.__webglTexture===void 0&&(nt.__webglTexture=r.createTexture()),nt.__version=v.version,o.memory.textures++),wt){K.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0){K.__webglFramebuffer[dt]=[];for(let pt=0;pt<v.mipmaps.length;pt++)K.__webglFramebuffer[dt][pt]=r.createFramebuffer()}else K.__webglFramebuffer[dt]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){K.__webglFramebuffer=[];for(let dt=0;dt<v.mipmaps.length;dt++)K.__webglFramebuffer[dt]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(bt)for(let dt=0,pt=ft.length;dt<pt;dt++){let It=n.get(ft[dt]);It.__webglTexture===void 0&&(It.__webglTexture=r.createTexture(),o.memory.textures++)}if(U.samples>0&&J(U)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let dt=0;dt<ft.length;dt++){let pt=ft[dt];K.__webglColorRenderbuffer[dt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[dt]);let It=s.convert(pt.format,pt.colorSpace),Wt=s.convert(pt.type),Nt=y(pt.internalFormat,It,Wt,pt.normalized,pt.colorSpace,U.isXRRenderTarget===!0),Ut=Q(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ut,Nt,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,K.__webglColorRenderbuffer[dt])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),rt(K.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(wt){e.bindTexture(r.TEXTURE_CUBE_MAP,nt.__webglTexture),Bt(r.TEXTURE_CUBE_MAP,v);for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)V(K.__webglFramebuffer[dt][pt],U,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,pt);else V(K.__webglFramebuffer[dt],U,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);g(v)&&T(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let dt=0,pt=ft.length;dt<pt;dt++){let It=ft[dt],Wt=n.get(It),Nt=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Nt=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Nt,Wt.__webglTexture),Bt(Nt,It),V(K.__webglFramebuffer,U,It,r.COLOR_ATTACHMENT0+dt,Nt,0),g(It)&&T(Nt)}e.unbindTexture()}else{let dt=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(dt=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(dt,nt.__webglTexture),Bt(dt,v),v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)V(K.__webglFramebuffer[pt],U,v,r.COLOR_ATTACHMENT0,dt,pt);else V(K.__webglFramebuffer,U,v,r.COLOR_ATTACHMENT0,dt,0);g(v)&&T(dt),e.unbindTexture()}U.depthBuffer&&I(U)}function P(U){let v=U.textures;for(let K=0,nt=v.length;K<nt;K++){let ft=v[K];if(g(ft)){let wt=A(U),bt=n.get(ft).__webglTexture;e.bindTexture(wt,bt),T(wt),e.unbindTexture()}}}let it=[],ut=[];function St(U){if(U.samples>0){if(J(U)===!1){let v=U.textures,K=U.width,nt=U.height,ft=r.COLOR_BUFFER_BIT,wt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,bt=n.get(U),dt=v.length>1;if(dt)for(let It=0;It<v.length;It++)e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);let pt=U.texture.mipmaps;pt&&pt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let It=0;It<v.length;It++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ft|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ft|=r.STENCIL_BUFFER_BIT)),dt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,bt.__webglColorRenderbuffer[It]);let Wt=n.get(v[It]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Wt,0)}r.blitFramebuffer(0,0,K,nt,0,0,K,nt,ft,r.NEAREST),l===!0&&(it.length=0,ut.length=0,it.push(r.COLOR_ATTACHMENT0+It),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(it.push(wt),ut.push(wt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ut)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),dt)for(let It=0;It<v.length;It++){e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.RENDERBUFFER,bt.__webglColorRenderbuffer[It]);let Wt=n.get(v[It]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.TEXTURE_2D,Wt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&l){let v=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function Q(U){return Math.min(i.maxSamples,U.samples)}function J(U){let v=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function S(U){let v=o.render.frame;h.get(U)!==v&&(h.set(U,v),U.update())}function At(U,v){let K=U.colorSpace,nt=U.format,ft=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||K!==Qa&&K!==es&&(Te.getTransfer(K)===Oe?(nt!==Qi||ft!==bi)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):le("WebGLTextures: Unsupported texture color space:",K)),v}function Dt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=et,this.resetTextureUnits=Y,this.getTextureUnits=O,this.setTextureUnits=W,this.setTexture2D=Z,this.setTexture2DArray=tt,this.setTexture3D=D,this.setTextureCube=st,this.rebindTextures=q,this.setupRenderTarget=H,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=I,this.setupFrameBufferTexture=V,this.useMultisampledRTT=J,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function qb(r,t){function e(n,i=es){let s,o=Te.getTransfer(i);if(n===bi)return r.UNSIGNED_BYTE;if(n===kh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Vh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Td)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Ad)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===bd)return r.BYTE;if(n===wd)return r.SHORT;if(n===oa)return r.UNSIGNED_SHORT;if(n===zh)return r.INT;if(n===mr)return r.UNSIGNED_INT;if(n===Ki)return r.FLOAT;if(n===gr)return r.HALF_FLOAT;if(n===Ed)return r.ALPHA;if(n===Cd)return r.RGB;if(n===Qi)return r.RGBA;if(n===Tr)return r.DEPTH_COMPONENT;if(n===Es)return r.DEPTH_STENCIL;if(n===Gh)return r.RED;if(n===Hh)return r.RED_INTEGER;if(n===Cs)return r.RG;if(n===Wh)return r.RG_INTEGER;if(n===Xh)return r.RGBA_INTEGER;if(n===Il||n===Ll||n===Dl||n===Nl)if(o===Oe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Il)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Il)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ll)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Dl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Nl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qh||n===Yh||n===Zh||n===Jh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===qh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$h||n===Kh||n===Qh||n===jh||n===tu||n===Ul||n===eu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===$h||n===Kh)return o===Oe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Qh)return o===Oe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===jh)return s.COMPRESSED_R11_EAC;if(n===tu)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ul)return s.COMPRESSED_RG11_EAC;if(n===eu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===nu||n===iu||n===ru||n===su||n===ou||n===au||n===lu||n===cu||n===hu||n===uu||n===fu||n===du||n===pu||n===mu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===nu)return o===Oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===iu)return o===Oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ru)return o===Oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===su)return o===Oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ou)return o===Oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===au)return o===Oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lu)return o===Oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cu)return o===Oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hu)return o===Oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uu)return o===Oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fu)return o===Oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===du)return o===Oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pu)return o===Oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mu)return o===Oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gu||n===_u||n===xu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===gu)return o===Oe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_u)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yu||n===vu||n===Fl||n===Su)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===yu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===vu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Su)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===aa?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var Yb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ep=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new hl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new jn({vertexShader:Yb,fragmentShader:Zb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ie(new ts(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},np=class extends Ar{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,p=null,_=typeof XRWebGLBinding<"u",m=new ep,g={},T=e.getContextAttributes(),A=null,y=null,M=[],w=[],C=new vt,x=null,b=null,R=new Nn;R.viewport=new nn;let k=new Nn;k.viewport=new nn;let L=[R,k],Y=new Lh,O=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let B=M[z];return B===void 0&&(B=new Ko,M[z]=B),B.getTargetRaySpace()},this.getControllerGrip=function(z){let B=M[z];return B===void 0&&(B=new Ko,M[z]=B),B.getGripSpace()},this.getHand=function(z){let B=M[z];return B===void 0&&(B=new Ko,M[z]=B),B.getHandSpace()};function et(z){let B=w.indexOf(z.inputSource);if(B===-1)return;let F=M[B];F!==void 0&&(F.update(z.inputSource,z.frame,c||o),F.dispatchEvent({type:z.type,data:z.inputSource}))}function X(){i.removeEventListener("select",et),i.removeEventListener("selectstart",et),i.removeEventListener("selectend",et),i.removeEventListener("squeeze",et),i.removeEventListener("squeezestart",et),i.removeEventListener("squeezeend",et),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",Z);for(let z=0;z<M.length;z++){let B=w[z];B!==null&&(w[z]=null,M[z].disconnect(B))}O=null,W=null,m.reset();for(let z in g)delete g[z];if(t.setRenderTarget(A),d=null,u=null,f=null,i=null,y=null,Lt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),b!==null){let z=b.camera;z.fov=b.fov,z.zoom=b.zoom,z.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(A=t.getRenderTarget(),i.addEventListener("select",et),i.addEventListener("selectstart",et),i.addEventListener("selectend",et),i.addEventListener("squeeze",et),i.addEventListener("squeezestart",et),i.addEventListener("squeezeend",et),i.addEventListener("end",X),i.addEventListener("inputsourceschange",Z),T.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let F=null,N=null,V=null;T.depth&&(V=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,F=T.stencil?Es:Tr,N=T.stencil?aa:mr);let rt={colorFormat:e.RGBA8,depthFormat:V,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(rt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Qn(u.textureWidth,u.textureHeight,{format:Qi,type:bi,depthTexture:new xs(u.textureWidth,u.textureHeight,N,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let F={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,F),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Qn(d.framebufferWidth,d.framebufferHeight,{format:Qi,type:bi,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Lt.setContext(i),Lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(z){for(let B=0;B<z.removed.length;B++){let F=z.removed[B],N=w.indexOf(F);N>=0&&(w[N]=null,M[N].disconnect(F))}for(let B=0;B<z.added.length;B++){let F=z.added[B],N=w.indexOf(F);if(N===-1){for(let rt=0;rt<M.length;rt++)if(rt>=w.length){w.push(F),N=rt;break}else if(w[rt]===null){w[rt]=F,N=rt;break}if(N===-1)break}let V=M[N];V&&V.connect(F)}}let tt=new G,D=new G;function st(z,B,F){tt.setFromMatrixPosition(B.matrixWorld),D.setFromMatrixPosition(F.matrixWorld);let N=tt.distanceTo(D),V=B.projectionMatrix.elements,rt=F.projectionMatrix.elements,ht=V[14]/(V[10]-1),I=V[14]/(V[10]+1),q=(V[9]+1)/V[5],H=(V[9]-1)/V[5],P=(V[8]-1)/V[0],it=(rt[8]+1)/rt[0],ut=ht*P,St=ht*it,Q=N/(-P+it),J=Q*-P;if(B.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(J),z.translateZ(Q),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),V[10]===-1)z.projectionMatrix.copy(B.projectionMatrix),z.projectionMatrixInverse.copy(B.projectionMatrixInverse);else{let S=ht+Q,At=I+Q,Dt=ut-J,U=St+(N-J),v=q*I/At*S,K=H*I/At*S;z.projectionMatrix.makePerspective(Dt,U,v,K,S,At),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function gt(z,B){B===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(B.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;let B=z.near,F=z.far;m.texture!==null&&(m.depthNear>0&&(B=m.depthNear),m.depthFar>0&&(F=m.depthFar)),Y.near=k.near=R.near=B,Y.far=k.far=R.far=F,(O!==Y.near||W!==Y.far)&&(i.updateRenderState({depthNear:Y.near,depthFar:Y.far}),O=Y.near,W=Y.far),Y.layers.mask=z.layers.mask|6,R.layers.mask=Y.layers.mask&-5,k.layers.mask=Y.layers.mask&-3;let N=z.parent,V=Y.cameras;gt(Y,N);for(let rt=0;rt<V.length;rt++)gt(V[rt],N);V.length===2?st(Y,R,k):Y.projectionMatrix.copy(R.projectionMatrix),b===null&&z.isPerspectiveCamera&&(b={camera:z,fov:z.fov,zoom:z.zoom}),yt(z,Y,N)};function yt(z,B,F){F===null?z.matrix.copy(B.matrixWorld):(z.matrix.copy(F.matrixWorld),z.matrix.invert(),z.matrix.multiply(B.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(B.projectionMatrix),z.projectionMatrixInverse.copy(B.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Zo*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(z){l=z,u!==null&&(u.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Y)},this.getCameraTexture=function(z){return g[z]};let Et=null;function Bt(z,B){if(h=B.getViewerPose(c||o),p=B,h!==null){let F=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let N=!1;F.length!==Y.cameras.length&&(Y.cameras.length=0,N=!0);for(let I=0;I<F.length;I++){let q=F[I],H=null;if(d!==null)H=d.getViewport(q);else{let it=f.getViewSubImage(u,q);H=it.viewport,I===0&&(t.setRenderTargetTextures(y,it.colorTexture,it.depthStencilTexture),t.setRenderTarget(y))}let P=L[I];P===void 0&&(P=new Nn,P.layers.enable(I),P.viewport=new nn,L[I]=P),P.matrix.fromArray(q.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(q.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(H.x,H.y,H.width,H.height),I===0&&(Y.matrix.copy(P.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),N===!0&&Y.cameras.push(P)}let V=i.enabledFeatures;if(V&&V.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let I=f.getDepthInformation(F[0]);I&&I.isValid&&I.texture&&m.init(I,i.renderState)}if(V&&V.includes("camera-access")&&_){t.state.unbindTexture(),f=n.getBinding();for(let I=0;I<F.length;I++){let q=F[I].camera;if(q){let H=g[q];H||(H=new hl,g[q]=H);let P=f.getCameraImage(q);H.sourceTexture=P}}}}for(let F=0;F<M.length;F++){let N=w[F],V=M[F];N!==null&&V!==void 0&&V.update(N,B,c||o)}Et&&Et(z,B),B.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:B}),p=null}let Lt=new Mg;Lt.setAnimationLoop(Bt),this.setAnimationLoop=function(z){Et=z},this.dispose=function(){}}},Jb=new Be,Cg=new re;Cg.set(-1,0,0,0,1,0,0,0,1);function $b(r,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Dd(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,T,A,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),f(m,g)):g.isMeshPhongMaterial?(s(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),u(m,g),g.isMeshPhysicalMaterial&&d(m,g,y)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),_(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,T,A):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Vn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Vn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let T=t.get(g),A=T.envMap,y=T.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(Jb.makeRotationFromEuler(y)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Cg),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,T,A){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*T,m.scale.value=A*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,T){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Vn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let T=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Kb(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){let w=M.program;n.uniformBlockBinding(y,w)}function c(y,M){let w=i[y.id];w===void 0&&(m(y),w=h(y),i[y.id]=w,y.addEventListener("dispose",T));let C=M.program;n.updateUBOMapping(y,C);let x=t.render.frame;s[y.id]!==x&&(u(y),s[y.id]=x)}function h(y){let M=f();y.__bindingPointIndex=M;let w=r.createBuffer(),C=y.__size,x=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,C,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,w),w}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let M=i[y.id],w=y.uniforms,C=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let x=0,b=w.length;x<b;x++){let R=w[x];if(Array.isArray(R))for(let k=0,L=R.length;k<L;k++)d(R[k],x,k,C);else d(R,x,0,C)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,M,w,C){if(_(y,M,w,C)===!0){let x=y.__offset,b=y.value;if(Array.isArray(b)){let R=0;for(let k=0;k<b.length;k++){let L=b[k],Y=g(L);p(L,y.__data,R),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(R+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(b,y.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,x,y.__data)}}function p(y,M,w){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,w)}function _(y,M,w,C){let x=y.value,b=M+"_"+w;if(C[b]===void 0)return typeof x=="number"||typeof x=="boolean"?C[b]=x:ArrayBuffer.isView(x)?C[b]=x.slice():C[b]=x.clone(),!0;{let R=C[b];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return C[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(y){let M=y.uniforms,w=0,C=16;for(let b=0,R=M.length;b<R;b++){let k=Array.isArray(M[b])?M[b]:[M[b]];for(let L=0,Y=k.length;L<Y;L++){let O=k[L],W=Array.isArray(O.value)?O.value:[O.value];for(let et=0,X=W.length;et<X;et++){let Z=W[et],tt=g(Z),D=w%C,st=D%tt.boundary,gt=D+st;w+=st,gt!==0&&C-gt<tt.storage&&(w+=C-gt),O.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=w,w+=tt.storage}}}let x=w%C;return x>0&&(w+=C-x),y.__size=w,y.__cache={},this}function g(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",y),M}function T(y){let M=y.target;M.removeEventListener("dispose",T);let w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function A(){for(let y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:A}}var Qb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Lr=null;function jb(){return Lr===null&&(Lr=new ol(Qb,16,16,Cs,gr),Lr.name="DFG_LUT",Lr.minFilter=En,Lr.magFilter=En,Lr.wrapS=Ji,Lr.wrapT=Ji,Lr.generateMipmaps=!1,Lr.needsUpdate=!0),Lr}var Eu=class{constructor(t={}){let{canvas:e=G0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=bi}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=d,m=new Set([Xh,Wh,Hh]),g=new Set([bi,mr,oa,aa,kh,Vh]),T=new Uint32Array(4),A=new Int32Array(4),y=new G,M=null,w=null,C=[],x=[],b=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,k=!1,L=null,Y=null,O=null,W=null;this._outputColorSpace=en;let et=0,X=0,Z=null,tt=-1,D=null,st=new nn,gt=new nn,yt=null,Et=new Kt(0),Bt=0,Lt=e.width,z=e.height,B=1,F=null,N=null,V=new nn(0,0,Lt,z),rt=new nn(0,0,Lt,z),ht=!1,I=new jo,q=!1,H=!1,P=new Be,it=new G,ut=new nn,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Q=!1;function J(){return Z===null?B:1}let S=n;function At(E,$){return e.getContext(E,$)}let Dt,U,v,K,nt,ft,wt,bt,dt,pt,It,Wt,Nt,Ut,Ct,Qt,ne,j,Ft,mt,Ot,zt,_t;try{let E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",te,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",ee,!1),S===null){let $="webgl2";if(S=At($,E),S===null)throw At($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Rt()}catch(E){throw e.removeEventListener("webglcontextlost",te,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",ee,!1),le("WebGLRenderer: "+E.message),E}function Rt(){Dt=new oM(S),Dt.init(),Ot=new qb(S,Dt),U=new $S(S,Dt,t,Ot),v=new Wb(S,Dt),U.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),Y=S.createFramebuffer(),O=S.createFramebuffer(),W=S.createFramebuffer(),K=new cM(S),nt=new Pb,ft=new Xb(S,Dt,v,nt,U,Ot,K),wt=new sM(R),bt=new uv(S),zt=new ZS(S,bt),dt=new aM(S,bt,K,zt),pt=new uM(S,dt,bt,zt,K),j=new hM(S,U,ft),Ct=new KS(nt),It=new Rb(R,wt,Dt,U,zt,Ct),Wt=new $b(R,nt),Nt=new Lb,Ut=new Bb(Dt),ne=new YS(R,wt,v,pt,p,l),Qt=new Hb(R,pt,U),_t=new Kb(S,K,U,v),Ft=new JS(S,Dt,K),mt=new lM(S,Dt,K),K.programs=It.programs,R.capabilities=U,R.extensions=Dt,R.properties=nt,R.renderLists=Nt,R.shadowMap=Qt,R.state=v,R.info=K}_!==bi&&(b=new dM(_,e.width,e.height,a,i,s));let Mt=new np(R,S);this.xr=Mt,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){let E=Dt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Dt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(E){E!==void 0&&(B=E,this.setSize(Lt,z,!1))},this.getSize=function(E){return E.set(Lt,z)},this.setSize=function(E,$,ct=!0){if(Mt.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Lt=E,z=$,e.width=Math.floor(E*B),e.height=Math.floor($*B),ct===!0&&(e.style.width=E+"px",e.style.height=$+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,E,$)},this.getDrawingBufferSize=function(E){return E.set(Lt*B,z*B).floor()},this.setDrawingBufferSize=function(E,$,ct){Lt=E,z=$,B=ct,e.width=Math.floor(E*ct),e.height=Math.floor($*ct),this.setViewport(0,0,E,$)},this.setEffects=function(E){if(_===bi){le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let $=0;$<E.length;$++)if(E[$].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(st)},this.getViewport=function(E){return E.copy(V)},this.setViewport=function(E,$,ct,at){E.isVector4?V.set(E.x,E.y,E.z,E.w):V.set(E,$,ct,at),v.viewport(st.copy(V).multiplyScalar(B).round())},this.getScissor=function(E){return E.copy(rt)},this.setScissor=function(E,$,ct,at){E.isVector4?rt.set(E.x,E.y,E.z,E.w):rt.set(E,$,ct,at),v.scissor(gt.copy(rt).multiplyScalar(B).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(E){v.setScissorTest(ht=E)},this.setOpaqueSort=function(E){F=E},this.setTransparentSort=function(E){N=E},this.getClearColor=function(E){return E.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(E=!0,$=!0,ct=!0){let at=0;if(E){let lt=!1;if(Z!==null){let kt=Z.texture.format;lt=m.has(kt)}if(lt){let kt=Z.texture.type,qt=g.has(kt),Gt=ne.getClearColor(),Zt=ne.getClearAlpha(),jt=Gt.r,fe=Gt.g,he=Gt.b;qt?(T[0]=jt,T[1]=fe,T[2]=he,T[3]=Zt,S.clearBufferuiv(S.COLOR,0,T)):(A[0]=jt,A[1]=fe,A[2]=he,A[3]=Zt,S.clearBufferiv(S.COLOR,0,A))}else at|=S.COLOR_BUFFER_BIT}$&&(at|=S.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ct&&(at|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),at!==0&&S.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),L=E},this.dispose=function(){e.removeEventListener("webglcontextlost",te,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",ee,!1),ne.dispose(),Nt.dispose(),Ut.dispose(),nt.dispose(),wt.dispose(),pt.dispose(),zt.dispose(),_t.dispose(),It.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",Le),Mt.removeEventListener("sessionend",Fe),_e.stop()};function te(E){E.preventDefault(),el("WebGLRenderer: Context Lost."),k=!0}function Tt(){el("WebGLRenderer: Context Restored."),k=!1;let E=K.autoReset,$=Qt.enabled,ct=Qt.autoUpdate,at=Qt.needsUpdate,lt=Qt.type;Rt(),K.autoReset=E,Qt.enabled=$,Qt.autoUpdate=ct,Qt.needsUpdate=at,Qt.type=lt}function ee(E){le("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Yt(E){let $=E.target;$.removeEventListener("dispose",Yt),ae($)}function ae(E){ie(E),nt.remove(E)}function ie(E){let $=nt.get(E).programs;$!==void 0&&($.forEach(function(ct){It.releaseProgram(ct)}),E.isShaderMaterial&&It.releaseShaderCache(E))}this.renderBufferDirect=function(E,$,ct,at,lt,kt){$===null&&($=St);let qt=lt.isMesh&&lt.matrixWorld.determinantAffine()<0,Gt=se(E,$,ct,at,lt);v.setMaterial(at,qt);let Zt=ct.index,jt=1;if(at.wireframe===!0){if(Zt=dt.getWireframeAttribute(ct),Zt===void 0)return;jt=2}let fe=ct.drawRange,he=ct.attributes.position,$t=fe.start*jt,Re=(fe.start+fe.count)*jt;kt!==null&&($t=Math.max($t,kt.start*jt),Re=Math.min(Re,(kt.start+kt.count)*jt)),Zt!==null?($t=Math.max($t,0),Re=Math.min(Re,Zt.count)):he!=null&&($t=Math.max($t,0),Re=Math.min(Re,he.count));let hn=Re-$t;if(hn<0||hn===1/0)return;zt.setup(lt,at,Gt,ct,Zt);let Ve,De=Ft;if(Zt!==null&&(Ve=bt.get(Zt),De=mt,De.setIndex(Ve)),lt.isMesh)at.wireframe===!0?(v.setLineWidth(at.wireframeLinewidth*J()),De.setMode(S.LINES)):De.setMode(S.TRIANGLES);else if(lt.isLine){let Sn=at.linewidth;Sn===void 0&&(Sn=1),v.setLineWidth(Sn*J()),lt.isLineSegments?De.setMode(S.LINES):lt.isLineLoop?De.setMode(S.LINE_LOOP):De.setMode(S.LINE_STRIP)}else lt.isPoints?De.setMode(S.POINTS):lt.isSprite&&De.setMode(S.TRIANGLES);if(lt.isBatchedMesh)if(Dt.get("WEBGL_multi_draw"))De.renderMultiDraw(lt._multiDrawStarts,lt._multiDrawCounts,lt._multiDrawCount);else{let Sn=lt._multiDrawStarts,Xt=lt._multiDrawCounts,Bn=lt._multiDrawCount,we=Zt?bt.get(Zt).bytesPerElement:1,Mn=nt.get(at).currentProgram.getUniforms();for(let pn=0;pn<Bn;pn++)Mn.setValue(S,"_gl_DrawID",pn),De.render(Sn[pn]/we,Xt[pn])}else if(lt.isInstancedMesh)De.renderInstances($t,hn,lt.count);else if(ct.isInstancedBufferGeometry){let Sn=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Xt=Math.min(ct.instanceCount,Sn);De.renderInstances($t,hn,Xt)}else De.render($t,hn)};function pe(E,$,ct,at){L!==null&&E.isNodeMaterial&&L.setObject(at,E),q===!0&&Ct.setState(E,ct,!1),E.transparent===!0&&E.side===ui&&E.forceSinglePass===!1?(E.side=Vn,E.needsUpdate=!0,je(E,$,at),E.side=Ts,E.needsUpdate=!0,je(E,$,at),E.side=ui):je(E,$,at)}this.compile=function(E,$,ct=null){ct===null&&(ct=E),L!==null&&L.renderStart(E,$,ct),w=Ut.get(ct),w.init($),x.push(w),ct.traverseVisible(function(lt){lt.isLight&&lt.layers.test($.layers)&&(w.pushLight(lt),lt.castShadow&&w.pushShadow(lt))}),E!==ct&&E.traverseVisible(function(lt){lt.isLight&&lt.layers.test($.layers)&&(w.pushLight(lt),lt.castShadow&&w.pushShadow(lt))}),w.setupLights(),L!==null&&L.updateLights(w.state.lightsArray),H=this.localClippingEnabled,q=Ct.init(this.clippingPlanes,H),q===!0&&Ct.setGlobalState(this.clippingPlanes,$),L!==null&&Qt.render(w.state.shadowsArray,ct,$);let at=new Set;return E.traverse(function(lt){if(!(lt.isMesh||lt.isPoints||lt.isLine||lt.isSprite))return;let kt=lt.material;if(kt)if(Array.isArray(kt))for(let qt=0;qt<kt.length;qt++){let Gt=kt[qt];pe(Gt,ct,$,lt),at.add(Gt)}else pe(kt,ct,$,lt),at.add(kt)}),w=x.pop(),L!==null&&L.renderEnd(),at},this.compileAsync=function(E,$,ct=null){let at=this.compile(E,$,ct);return new Promise(lt=>{function kt(){if(at.forEach(function(qt){let Zt=nt.get(qt).currentProgram;(Zt===void 0||Zt.isReady())&&at.delete(qt)}),at.size===0){lt(E);return}setTimeout(kt,10)}Dt.get("KHR_parallel_shader_compile")!==null?kt():setTimeout(kt,10)})};let ke=null;function Qe(E){ke&&ke(E)}function Le(){_e.stop()}function Fe(){_e.start()}let _e=new Mg;_e.setAnimationLoop(Qe),typeof self<"u"&&_e.setContext(self),this.setAnimationLoop=function(E){ke=E,Mt.setAnimationLoop(E),E===null?_e.stop():_e.start()},Mt.addEventListener("sessionstart",Le),Mt.addEventListener("sessionend",Fe),this.render=function(E,$){if($!==void 0&&$.isCamera!==!0){le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;L!==null&&L.renderStart(E,$);let ct=Mt.enabled===!0&&Mt.isPresenting===!0,at=b!==null&&(Z===null||ct)&&b.begin(R,Z);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera($),$=Mt.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,$,Z),w=Ut.get(E,x.length),w.init($),w.state.textureUnits=ft.getTextureUnits(),x.push(w),P.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),I.setFromProjectionMatrix(P,ur,$.reversedDepth),H=this.localClippingEnabled,q=Ct.init(this.clippingPlanes,H),M=Nt.get(E,C.length),M.init(),C.push(M),Mt.enabled===!0&&Mt.isPresenting===!0){let qt=R.xr.getDepthSensingMesh();qt!==null&&Xe(qt,$,-1/0,R.sortObjects)}Xe(E,$,0,R.sortObjects),M.finish(),L!==null&&L.updateLights(w.state.lightsArray),R.sortObjects===!0&&M.sort(F,N),Q=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,Q&&ne.addToRenderList(M,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),q===!0&&Ct.beginShadows();let lt=w.state.shadowsArray;if(Qt.render(lt,E,$),q===!0&&Ct.endShadows(),(at&&b.hasRenderPass())===!1){let qt=M.opaque,Gt=M.transmissive;if(w.setupLights(),$.isArrayCamera){let Zt=$.cameras;if(Gt.length>0)for(let jt=0,fe=Zt.length;jt<fe;jt++){let he=Zt[jt];ln(qt,Gt,E,he)}Q&&ne.render(E);for(let jt=0,fe=Zt.length;jt<fe;jt++){let he=Zt[jt];Pe(M,E,he,he.viewport)}}else Gt.length>0&&ln(qt,Gt,E,$),Q&&ne.render(E),Pe(M,E,$)}Z!==null&&X===0&&(ft.updateMultisampleRenderTarget(Z),ft.updateRenderTargetMipmap(Z)),at&&b.end(R),E.isScene===!0&&E.onAfterRender(R,E,$),zt.resetDefaultState(),tt=-1,D=null,x.pop(),x.length>0?(w=x[x.length-1],ft.setTextureUnits(w.state.textureUnits),q===!0&&Ct.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?M=C[C.length-1]:M=null,L!==null&&L.renderEnd()};function Xe(E,$,ct,at){if(E.visible===!1)return;if(E.layers.test($.layers)){if(E.isGroup)ct=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update($);else if(E.isLightProbeGrid)w.pushLightProbeGrid(E);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(I)){at&&ut.setFromMatrixPosition(E.matrixWorld).applyMatrix4(P);let qt=pt.update(E),Gt=E.material;Gt.visible&&M.push(E,qt,Gt,ct,ut.z,null,$)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(I))){let qt=pt.update(E),Gt=E.material;if(at&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ut.copy(E.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),ut.copy(qt.boundingSphere.center)),ut.applyMatrix4(E.matrixWorld).applyMatrix4(P)),Array.isArray(Gt)){let Zt=qt.groups;for(let jt=0,fe=Zt.length;jt<fe;jt++){let he=Zt[jt],$t=Gt[he.materialIndex];$t&&$t.visible&&M.push(E,qt,$t,ct,ut.z,he,$)}}else Gt.visible&&M.push(E,qt,Gt,ct,ut.z,null,$)}}let kt=E.children;for(let qt=0,Gt=kt.length;qt<Gt;qt++)Xe(kt[qt],$,ct,at)}function Pe(E,$,ct,at){let{opaque:lt,transmissive:kt,transparent:qt}=E;w.setupLightsView(ct),q===!0&&Ct.setGlobalState(R.clippingPlanes,ct),at&&v.viewport(st.copy(at)),lt.length>0&&qe(lt,$,ct),kt.length>0&&qe(kt,$,ct),qt.length>0&&qe(qt,$,ct),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function ln(E,$,ct,at){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[at.id]===void 0){let $t=Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[at.id]=new Qn(1,1,{generateMipmaps:!0,type:$t?gr:bi,minFilter:Ir,samples:Math.max(4,U.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Te.workingColorSpace})}let kt=w.state.transmissionRenderTarget[at.id],qt=at.viewport||st;kt.setSize(qt.z*R.transmissionResolutionScale,qt.w*R.transmissionResolutionScale);let Gt=R.getRenderTarget(),Zt=R.getActiveCubeFace(),jt=R.getActiveMipmapLevel();R.setRenderTarget(kt),R.getClearColor(Et),Bt=R.getClearAlpha(),Bt<1&&R.setClearColor(16777215,.5),R.clear(),Q&&ne.render(ct);let fe=R.toneMapping;R.toneMapping=Oi;let he=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),w.setupLightsView(at),q===!0&&Ct.setGlobalState(R.clippingPlanes,at),qe(E,ct,at),ft.updateMultisampleRenderTarget(kt),ft.updateRenderTargetMipmap(kt),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Re=0,hn=$.length;Re<hn;Re++){let Ve=$[Re],{object:De,geometry:Sn,material:Xt,group:Bn}=Ve;if(Xt.side===ui&&De.layers.test(at.layers)){let we=Xt.side;Xt.side=Vn,Xt.needsUpdate=!0,be(De,ct,at,Sn,Xt,Bn),Xt.side=we,Xt.needsUpdate=!0,$t=!0}}$t===!0&&(ft.updateMultisampleRenderTarget(kt),ft.updateRenderTargetMipmap(kt))}R.setRenderTarget(Gt,Zt,jt),R.setClearColor(Et,Bt),he!==void 0&&(at.viewport=he),R.toneMapping=fe}function qe(E,$,ct){let at=$.isScene===!0?$.overrideMaterial:null;for(let lt=0,kt=E.length;lt<kt;lt++){let qt=E[lt],{object:Gt,geometry:Zt,group:jt}=qt,fe=qt.material;fe.allowOverride===!0&&at!==null&&(fe=at),Gt.layers.test(ct.layers)&&be(Gt,$,ct,Zt,fe,jt)}}function be(E,$,ct,at,lt,kt){L!==null&&lt.isNodeMaterial&&L.setObject(E,lt),E.onBeforeRender(R,$,ct,at,lt,kt),E.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),lt.onBeforeRender(R,$,ct,at,E,kt),lt.transparent===!0&&lt.side===ui&&lt.forceSinglePass===!1?(lt.side=Vn,lt.needsUpdate=!0,R.renderBufferDirect(ct,$,at,lt,E,kt),lt.side=Ts,lt.needsUpdate=!0,R.renderBufferDirect(ct,$,at,lt,E,kt),lt.side=ui):R.renderBufferDirect(ct,$,at,lt,E,kt),E.onAfterRender(R,$,ct,at,lt,kt)}function je(E,$,ct){$.isScene!==!0&&($=St);let at=nt.get(E),lt=w.state.lights,kt=w.state.shadowsArray,qt=lt.state.version,Gt=It.getParameters(E,lt.state,kt,$,ct,w.state.lightProbeGridArray),Zt=It.getProgramCacheKey(Gt),jt=at.programs;at.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?$.environment:null,at.fog=$.fog;let fe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;at.envMap=wt.get(E.envMap||at.environment,fe),at.envMapRotation=at.environment!==null&&E.envMap===null?$.environmentRotation:E.envMapRotation,jt===void 0&&(E.addEventListener("dispose",Yt),jt=new Map,at.programs=jt);let he=jt.get(Zt);if(he!==void 0){if(at.currentProgram===he&&at.lightsStateVersion===qt)return Xi(E,Gt),he}else Gt.uniforms=It.getUniforms(E),L!==null&&E.isNodeMaterial&&L.build(E,ct,Gt),E.onBeforeCompile(Gt,R),he=It.acquireProgram(Gt,Zt),jt.set(Zt,he),at.uniforms=Gt.uniforms;let $t=at.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&($t.clippingPlanes=Ct.uniform),Xi(E,Gt),at.needsLights=vn(E),at.lightsStateVersion=qt,at.needsLights&&($t.ambientLightColor.value=lt.state.ambient,$t.lightProbe.value=lt.state.probe,$t.sunLights.value=lt.state.sun,$t.sunLightShadows.value=lt.state.sunShadow,$t.directionalLights.value=lt.state.directional,$t.directionalLightShadows.value=lt.state.directionalShadow,$t.spotLights.value=lt.state.spot,$t.spotLightShadows.value=lt.state.spotShadow,$t.rectAreaLights.value=lt.state.rectArea,$t.ltc_1.value=lt.state.rectAreaLTC1,$t.ltc_2.value=lt.state.rectAreaLTC2,$t.pointLights.value=lt.state.point,$t.pointLightShadows.value=lt.state.pointShadow,$t.hemisphereLights.value=lt.state.hemi,$t.sunShadowMatrix.value=lt.state.sunShadowMatrix,$t.sunShadowCascade.value=lt.state.sunShadowCascade,$t.directionalShadowMatrix.value=lt.state.directionalShadowMatrix,$t.spotLightMatrix.value=lt.state.spotLightMatrix,$t.spotLightMap.value=lt.state.spotLightMap,$t.pointShadowMatrix.value=lt.state.pointShadowMatrix),at.lightProbeGrid=w.state.lightProbeGridArray.length>0,at.currentProgram=he,at.uniformsList=null,he}function cn(E){if(E.uniformsList===null){let $=E.currentProgram.getUniforms();E.uniformsList=ha.seqWithValue($.seq,E.uniforms)}return E.uniformsList}function Xi(E,$){let ct=nt.get(E);ct.outputColorSpace=$.outputColorSpace,ct.batching=$.batching,ct.batchingColor=$.batchingColor,ct.instancing=$.instancing,ct.instancingColor=$.instancingColor,ct.instancingMorph=$.instancingMorph,ct.skinning=$.skinning,ct.morphTargets=$.morphTargets,ct.morphNormals=$.morphNormals,ct.morphColors=$.morphColors,ct.morphTargetsCount=$.morphTargetsCount,ct.numClippingPlanes=$.numClippingPlanes,ct.numIntersection=$.numClipIntersection,ct.vertexAlphas=$.vertexAlphas,ct.vertexTangents=$.vertexTangents,ct.toneMapping=$.toneMapping}function kr(E,$){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;y.setFromMatrixPosition($.matrixWorld);for(let ct=0,at=E.length;ct<at;ct++){let lt=E[ct];if(lt.texture!==null&&lt.boundingBox.containsPoint(y))return lt}return null}function se(E,$,ct,at,lt){$.isScene!==!0&&($=St),ft.resetTextureUnits();let kt=$.fog,qt=at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial?$.environment:null,Gt=Z===null?R.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Te.workingColorSpace,Zt=at.isMeshStandardMaterial||at.isMeshLambertMaterial&&!at.envMap||at.isMeshPhongMaterial&&!at.envMap,jt=wt.get(at.envMap||qt,Zt),fe=at.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,he=!!ct.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),$t=!!ct.morphAttributes.position,Re=!!ct.morphAttributes.normal,hn=!!ct.morphAttributes.color,Ve=Oi;at.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ve=R.toneMapping);let De=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Sn=De!==void 0?De.length:0,Xt=nt.get(at),Bn=w.state.lights;if(q===!0&&(H===!0||E!==D)){let Ye=E===D&&at.id===tt;Ct.setState(at,E,Ye)}let we=!1;at.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Bn.state.version||Xt.outputColorSpace!==Gt||lt.isBatchedMesh&&Xt.batching===!1||!lt.isBatchedMesh&&Xt.batching===!0||lt.isBatchedMesh&&Xt.batchingColor===!0&&lt._colorsTexture===null||lt.isBatchedMesh&&Xt.batchingColor===!1&&lt._colorsTexture!==null||lt.isInstancedMesh&&Xt.instancing===!1||!lt.isInstancedMesh&&Xt.instancing===!0||lt.isSkinnedMesh&&Xt.skinning===!1||!lt.isSkinnedMesh&&Xt.skinning===!0||lt.isInstancedMesh&&Xt.instancingColor===!0&&lt.instanceColor===null||lt.isInstancedMesh&&Xt.instancingColor===!1&&lt.instanceColor!==null||lt.isInstancedMesh&&Xt.instancingMorph===!0&&lt.morphTexture===null||lt.isInstancedMesh&&Xt.instancingMorph===!1&&lt.morphTexture!==null||Xt.envMap!==jt||at.fog===!0&&Xt.fog!==kt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Ct.numPlanes||Xt.numIntersection!==Ct.numIntersection)||Xt.vertexAlphas!==fe||Xt.vertexTangents!==he||Xt.morphTargets!==$t||Xt.morphNormals!==Re||Xt.morphColors!==hn||Xt.toneMapping!==Ve||Xt.morphTargetsCount!==Sn||!!Xt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(we=!0):(we=!0,Xt.__version=at.version);let Mn=Xt.currentProgram;we===!0&&(Mn=je(at,$,lt),L&&at.isNodeMaterial&&L.onUpdateProgram(at,Mn,Xt));let pn=!1,Pi=!1,Vr=!1,Ne=Mn.getUniforms(),me=Xt.uniforms;if(v.useProgram(Mn.program)&&(pn=!0,Pi=!0,Vr=!0),at.id!==tt&&(tt=at.id,Pi=!0),Xt.needsLights){let Ye=kr(w.state.lightProbeGridArray,lt);Xt.lightProbeGrid!==Ye&&(Xt.lightProbeGrid=Ye,Pi=!0)}if(pn||D!==E){v.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Ne.setValue(S,"projectionMatrix",E.projectionMatrix),Ne.setValue(S,"viewMatrix",E.matrixWorldInverse);let yr=Ne.map.cameraPosition;yr!==void 0&&yr.setValue(S,it.setFromMatrixPosition(E.matrixWorld)),U.logarithmicDepthBuffer&&Ne.setValue(S,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Ne.setValue(S,"isOrthographic",E.isOrthographicCamera===!0),D!==E&&(D=E,Pi=!0,Vr=!0)}if(Xt.needsLights&&(Bn.state.sunShadowMap.length>0&&Ne.setValue(S,"sunShadowMap",Bn.state.sunShadowMap,ft),Bn.state.directionalShadowMap.length>0&&Ne.setValue(S,"directionalShadowMap",Bn.state.directionalShadowMap,ft),Bn.state.spotShadowMap.length>0&&Ne.setValue(S,"spotShadowMap",Bn.state.spotShadowMap,ft),Bn.state.pointShadowMap.length>0&&Ne.setValue(S,"pointShadowMap",Bn.state.pointShadowMap,ft)),lt.isSkinnedMesh){Ne.setOptional(S,lt,"bindMatrix"),Ne.setOptional(S,lt,"bindMatrixInverse");let Ye=lt.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),Ne.setValue(S,"boneTexture",Ye.boneTexture,ft))}lt.isBatchedMesh&&(Ne.setOptional(S,lt,"batchingTexture"),Ne.setValue(S,"batchingTexture",lt._matricesTexture,ft),Ne.setOptional(S,lt,"batchingIdTexture"),Ne.setValue(S,"batchingIdTexture",lt._indirectTexture,ft),Ne.setOptional(S,lt,"batchingColorTexture"),lt._colorsTexture!==null&&Ne.setValue(S,"batchingColorTexture",lt._colorsTexture,ft));let qi=ct.morphAttributes;if((qi.position!==void 0||qi.normal!==void 0||qi.color!==void 0)&&j.update(lt,ct,Mn),(Pi||Xt.receiveShadow!==lt.receiveShadow)&&(Xt.receiveShadow=lt.receiveShadow,Ne.setValue(S,"receiveShadow",lt.receiveShadow)),(at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial)&&at.envMap===null&&$.environment!==null&&(me.envMapIntensity.value=$.environmentIntensity),me.dfgLUT!==void 0&&(me.dfgLUT.value=jb()),Pi){if(Ne.setValue(S,"toneMappingExposure",R.toneMappingExposure),Xt.needsLights&&Ce(me,Vr),kt&&at.fog===!0&&Wt.refreshFogUniforms(me,kt),Wt.refreshMaterialUniforms(me,at,B,z,w.state.transmissionRenderTarget[E.id]),Xt.needsLights&&Xt.lightProbeGrid){let Ye=Xt.lightProbeGrid;me.probesSH.value=Ye.texture,me.probesMin.value.copy(Ye.boundingBox.min),me.probesMax.value.copy(Ye.boundingBox.max),me.probesResolution.value.copy(Ye.resolution)}ha.upload(S,cn(Xt),me,ft)}if(at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(ha.upload(S,cn(Xt),me,ft),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Ne.setValue(S,"center",lt.center),Ne.setValue(S,"modelViewMatrix",lt.modelViewMatrix),Ne.setValue(S,"normalMatrix",lt.normalMatrix),Ne.setValue(S,"modelMatrix",lt.matrixWorld),at.uniformsGroups!==void 0){let Ye=at.uniformsGroups;for(let yr=0,Gr=Ye.length;yr<Gr;yr++){let ot=Ye[yr];_t.update(ot,Mn),_t.bind(ot,Mn)}}return Mn}function Ce(E,$){E.ambientLightColor.needsUpdate=$,E.lightProbe.needsUpdate=$,E.sunLights.needsUpdate=$,E.sunLightShadows.needsUpdate=$,E.directionalLights.needsUpdate=$,E.directionalLightShadows.needsUpdate=$,E.pointLights.needsUpdate=$,E.pointLightShadows.needsUpdate=$,E.spotLights.needsUpdate=$,E.spotLightShadows.needsUpdate=$,E.rectAreaLights.needsUpdate=$,E.hemisphereLights.needsUpdate=$}function vn(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return et},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(E,$,ct){let at=nt.get(E);at.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),nt.get(E.texture).__webglTexture=$,nt.get(E.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:ct,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,$){let ct=nt.get(E);ct.__webglFramebuffer=$,ct.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(E,$=0,ct=0){Z=E,et=$,X=ct;let at=null,lt=!1,kt=!1;if(E){let Gt=nt.get(E);if(Gt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(S.FRAMEBUFFER,Gt.__webglFramebuffer),st.copy(E.viewport),gt.copy(E.scissor),yt=E.scissorTest,v.viewport(st),v.scissor(gt),v.setScissorTest(yt),tt=-1;return}else if(Gt.__webglFramebuffer===void 0)ft.setupRenderTarget(E);else if(Gt.__hasExternalTextures)ft.rebindTextures(E,nt.get(E.texture).__webglTexture,nt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let fe=E.depthTexture;if(Gt.__boundDepthTexture!==fe){if(fe!==null&&nt.has(fe)&&(E.width!==fe.image.width||E.height!==fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ft.setupDepthRenderbuffer(E)}}let Zt=E.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(kt=!0);let jt=nt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(jt[$])?at=jt[$][ct]:at=jt[$],lt=!0):E.samples>0&&ft.useMultisampledRTT(E)===!1?at=nt.get(E).__webglMultisampledFramebuffer:Array.isArray(jt)?at=jt[ct]:at=jt,st.copy(E.viewport),gt.copy(E.scissor),yt=E.scissorTest}else st.copy(V).multiplyScalar(B).floor(),gt.copy(rt).multiplyScalar(B).floor(),yt=ht;if(ct!==0&&(at=Y),v.bindFramebuffer(S.FRAMEBUFFER,at)&&v.drawBuffers(E,at),v.viewport(st),v.scissor(gt),v.setScissorTest(yt),lt){let Gt=nt.get(E.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+$,Gt.__webglTexture,ct)}else if(kt){let Gt=$;for(let Zt=0;Zt<E.textures.length;Zt++){let jt=nt.get(E.textures[Zt]);S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+Zt,jt.__webglTexture,ct,Gt)}}else if(E!==null&&ct!==0){let Gt=nt.get(E.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Gt.__webglTexture,ct)}tt=-1};function Ln(E){let $=nt.get(E);return($.__readFormat!==E.format||$.__readType!==E.type)&&($.__readFormat=E.format,$.__readType=E.type,$.__formatReadable=U.textureFormatReadable(E.format),$.__typeReadable=U.textureTypeReadable(E.type)),$}this.readRenderTargetPixels=function(E,$,ct,at,lt,kt,qt,Gt=0){if(!(E&&E.isWebGLRenderTarget)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=nt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&qt!==void 0&&(Zt=Zt[qt]),Zt){v.bindFramebuffer(S.FRAMEBUFFER,Zt);try{let jt=E.textures[Gt],fe=jt.format,he=jt.type;E.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+Gt);let $t=Ln(jt);if($t.__formatReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if($t.__typeReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=E.width-at&&ct>=0&&ct<=E.height-lt&&S.readPixels($,ct,at,lt,Ot.convert(fe),Ot.convert(he),kt)}finally{let jt=Z!==null?nt.get(Z).__webglFramebuffer:null;v.bindFramebuffer(S.FRAMEBUFFER,jt)}}},this.readRenderTargetPixelsAsync=async function(E,$,ct,at,lt,kt,qt,Gt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=nt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&qt!==void 0&&(Zt=Zt[qt]),Zt)if($>=0&&$<=E.width-at&&ct>=0&&ct<=E.height-lt){v.bindFramebuffer(S.FRAMEBUFFER,Zt);let jt=E.textures[Gt],fe=jt.format,he=jt.type;E.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+Gt);let $t=Ln(jt);if($t.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if($t.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Re=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Re),S.bufferData(S.PIXEL_PACK_BUFFER,kt.byteLength,S.STREAM_READ),S.readPixels($,ct,at,lt,Ot.convert(fe),Ot.convert(he),0),S.bindBuffer(S.PIXEL_PACK_BUFFER,null);let hn=Z!==null?nt.get(Z).__webglFramebuffer:null;v.bindFramebuffer(S.FRAMEBUFFER,hn);let Ve=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await W0(S,Ve,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Re),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,kt),S.bindBuffer(S.PIXEL_PACK_BUFFER,null),S.deleteBuffer(Re),S.deleteSync(Ve),kt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,$=null,ct=0){let at=Math.pow(2,-ct),lt=Math.floor(E.image.width*at),kt=Math.floor(E.image.height*at),qt=$!==null?$.x:0,Gt=$!==null?$.y:0;ft.setTexture2D(E,0),S.copyTexSubImage2D(S.TEXTURE_2D,ct,0,0,qt,Gt,lt,kt),v.unbindTexture()},this.copyTextureToTexture=function(E,$,ct=null,at=null,lt=0,kt=0){let qt,Gt,Zt,jt,fe,he,$t,Re,hn,Ve=E.isCompressedTexture?E.mipmaps[kt]:E.image;if(ct!==null)qt=ct.max.x-ct.min.x,Gt=ct.max.y-ct.min.y,Zt=ct.isBox3?ct.max.z-ct.min.z:1,jt=ct.min.x,fe=ct.min.y,he=ct.isBox3?ct.min.z:0;else{let me=Math.pow(2,-lt);qt=Math.floor(Ve.width*me),Gt=Math.floor(Ve.height*me),E.isDataArrayTexture?Zt=Ve.depth:E.isData3DTexture?Zt=Math.floor(Ve.depth*me):Zt=1,jt=0,fe=0,he=0}at!==null?($t=at.x,Re=at.y,hn=at.z):($t=0,Re=0,hn=0);let De=Ot.convert($.format),Sn=Ot.convert($.type),Xt;$.isData3DTexture?(ft.setTexture3D($,0),Xt=S.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(ft.setTexture2DArray($,0),Xt=S.TEXTURE_2D_ARRAY):(ft.setTexture2D($,0),Xt=S.TEXTURE_2D),v.activeTexture(S.TEXTURE0),v.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,$.flipY),v.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),v.pixelStorei(S.UNPACK_ALIGNMENT,$.unpackAlignment);let Bn=v.getParameter(S.UNPACK_ROW_LENGTH),we=v.getParameter(S.UNPACK_IMAGE_HEIGHT),Mn=v.getParameter(S.UNPACK_SKIP_PIXELS),pn=v.getParameter(S.UNPACK_SKIP_ROWS),Pi=v.getParameter(S.UNPACK_SKIP_IMAGES);v.pixelStorei(S.UNPACK_ROW_LENGTH,Ve.width),v.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Ve.height),v.pixelStorei(S.UNPACK_SKIP_PIXELS,jt),v.pixelStorei(S.UNPACK_SKIP_ROWS,fe),v.pixelStorei(S.UNPACK_SKIP_IMAGES,he);let Vr=E.isDataArrayTexture||E.isData3DTexture,Ne=$.isDataArrayTexture||$.isData3DTexture;if(E.isDepthTexture){let me=nt.get(E),qi=nt.get($),Ye=nt.get(me.__renderTarget),yr=nt.get(qi.__renderTarget);v.bindFramebuffer(S.READ_FRAMEBUFFER,Ye.__webglFramebuffer),v.bindFramebuffer(S.DRAW_FRAMEBUFFER,yr.__webglFramebuffer);for(let Gr=0;Gr<Zt;Gr++)Vr&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,nt.get(E).__webglTexture,lt,he+Gr),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,nt.get($).__webglTexture,kt,hn+Gr)),S.blitFramebuffer(jt,fe,qt,Gt,$t,Re,qt,Gt,S.DEPTH_BUFFER_BIT,S.NEAREST);v.bindFramebuffer(S.READ_FRAMEBUFFER,null),v.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(lt!==0||E.isRenderTargetTexture||nt.has(E)){let me=nt.get(E),qi=nt.get($);v.bindFramebuffer(S.READ_FRAMEBUFFER,O),v.bindFramebuffer(S.DRAW_FRAMEBUFFER,W);for(let Ye=0;Ye<Zt;Ye++)Vr?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,me.__webglTexture,lt,he+Ye):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,me.__webglTexture,lt),Ne?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,qi.__webglTexture,kt,hn+Ye):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,qi.__webglTexture,kt),lt!==0?S.blitFramebuffer(jt,fe,qt,Gt,$t,Re,qt,Gt,S.COLOR_BUFFER_BIT,S.NEAREST):Ne?S.copyTexSubImage3D(Xt,kt,$t,Re,hn+Ye,jt,fe,qt,Gt):S.copyTexSubImage2D(Xt,kt,$t,Re,jt,fe,qt,Gt);v.bindFramebuffer(S.READ_FRAMEBUFFER,null),v.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else Ne?E.isDataTexture||E.isData3DTexture?S.texSubImage3D(Xt,kt,$t,Re,hn,qt,Gt,Zt,De,Sn,Ve.data):$.isCompressedArrayTexture?S.compressedTexSubImage3D(Xt,kt,$t,Re,hn,qt,Gt,Zt,De,Ve.data):S.texSubImage3D(Xt,kt,$t,Re,hn,qt,Gt,Zt,De,Sn,Ve):E.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,kt,$t,Re,qt,Gt,De,Sn,Ve.data):E.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,kt,$t,Re,Ve.width,Ve.height,De,Ve.data):S.texSubImage2D(S.TEXTURE_2D,kt,$t,Re,qt,Gt,De,Sn,Ve);v.pixelStorei(S.UNPACK_ROW_LENGTH,Bn),v.pixelStorei(S.UNPACK_IMAGE_HEIGHT,we),v.pixelStorei(S.UNPACK_SKIP_PIXELS,Mn),v.pixelStorei(S.UNPACK_SKIP_ROWS,pn),v.pixelStorei(S.UNPACK_SKIP_IMAGES,Pi),kt===0&&$.generateMipmaps&&S.generateMipmap(Xt),v.unbindTexture()},this.initRenderTarget=function(E){nt.get(E).__webglFramebuffer===void 0&&ft.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ft.setTextureCube(E,0):E.isData3DTexture?ft.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ft.setTexture2DArray(E,0):ft.setTexture2D(E,0),v.unbindTexture()},this.resetState=function(){et=0,X=0,Z=null,v.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ur}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),e.unpackColorSpace=Te._getUnpackColorSpace()}};var Vl=en,Gl=class r extends Js{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,i){let s=this,o=new bl(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(l){i?i(l):console.error(l),s.manager.itemError(t)}},n,i)}parse(t){let e=this;function n(B,F){if(B.nodeType!==1)return;B.hasAttribute("filter")&&console.warn("THREE.SVGLoader: Filters are not supported.");let N=M(B),V=!1,rt=null;switch(B.nodeName){case"svg":F=_(B,F);break;case"style":s(B);break;case"g":F=_(B,F);break;case"path":F=_(B,F),B.hasAttribute("d")&&(rt=i(B));break;case"rect":F=_(B,F),rt=l(B);break;case"polygon":F=_(B,F),rt=c(B);break;case"polyline":F=_(B,F),rt=h(B);break;case"circle":F=_(B,F),rt=f(B);break;case"ellipse":F=_(B,F),rt=u(B);break;case"line":F=_(B,F),rt=d(B);break;case"defs":V=!0;break;case"use":F=_(B,F);let q=(B.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),H=B.viewportElement.getElementById(q);H?n(H,F):console.warn("SVGLoader: 'use node' references non-existent node id: "+q);break;default:}if(rt){F.fill!==void 0&&F.fill!=="none"&&!F.fill.startsWith("url")&&rt.color.setStyle(F.fill,Vl),x(rt,Bt),W.push(rt);let I=Object.assign({},F);I.strokeWidth=F.strokeWidth*Y(Bt),rt.userData={node:B,style:I,transform:Bt.clone(),gradients:X}}let ht=B.childNodes;for(let I=0;I<ht.length;I++){let q=ht[I];V&&q.nodeName!=="style"&&q.nodeName!=="defs"||n(q,F)}N&&(Z.pop(),Z.length>0?Bt.copy(Z[Z.length-1]):Bt.identity())}function i(B){let F=new pr,N=new vt,V=new vt,rt=new vt,ht=!0,I=!1,q=B.getAttribute("d");if(q===""||q==="none")return null;let H=q.match(/[a-df-z][^a-df-z]*/ig);for(let P=0,it=H.length;P<it;P++){let ut=H[P],St=ut.charAt(0),Q=ut.slice(1).trim();ht===!0&&(I=!0,ht=!1);let J;switch(St){case"M":J=g(Q);for(let S=0,At=J.length;S<At;S+=2)N.x=J[S+0],N.y=J[S+1],V.x=N.x,V.y=N.y,S===0?F.moveTo(N.x,N.y):F.lineTo(N.x,N.y),S===0&&rt.copy(N);break;case"H":J=g(Q);for(let S=0,At=J.length;S<At;S++)N.x=J[S],V.x=N.x,V.y=N.y,F.lineTo(N.x,N.y),S===0&&I===!0&&rt.copy(N);break;case"V":J=g(Q);for(let S=0,At=J.length;S<At;S++)N.y=J[S],V.x=N.x,V.y=N.y,F.lineTo(N.x,N.y),S===0&&I===!0&&rt.copy(N);break;case"L":J=g(Q);for(let S=0,At=J.length;S<At;S+=2)N.x=J[S+0],N.y=J[S+1],V.x=N.x,V.y=N.y,F.lineTo(N.x,N.y),S===0&&I===!0&&rt.copy(N);break;case"C":J=g(Q);for(let S=0,At=J.length;S<At;S+=6)F.bezierCurveTo(J[S+0],J[S+1],J[S+2],J[S+3],J[S+4],J[S+5]),V.x=J[S+2],V.y=J[S+3],N.x=J[S+4],N.y=J[S+5],S===0&&I===!0&&rt.copy(N);break;case"S":J=g(Q);for(let S=0,At=J.length;S<At;S+=4)F.bezierCurveTo(m(N.x,V.x),m(N.y,V.y),J[S+0],J[S+1],J[S+2],J[S+3]),V.x=J[S+0],V.y=J[S+1],N.x=J[S+2],N.y=J[S+3],S===0&&I===!0&&rt.copy(N);break;case"Q":J=g(Q);for(let S=0,At=J.length;S<At;S+=4)F.quadraticCurveTo(J[S+0],J[S+1],J[S+2],J[S+3]),V.x=J[S+0],V.y=J[S+1],N.x=J[S+2],N.y=J[S+3],S===0&&I===!0&&rt.copy(N);break;case"T":J=g(Q);for(let S=0,At=J.length;S<At;S+=2){let Dt=m(N.x,V.x),U=m(N.y,V.y);F.quadraticCurveTo(Dt,U,J[S+0],J[S+1]),V.x=Dt,V.y=U,N.x=J[S+0],N.y=J[S+1],S===0&&I===!0&&rt.copy(N)}break;case"A":J=g(Q,[3,4],7);for(let S=0,At=J.length;S<At;S+=7){if(J[S+5]==N.x&&J[S+6]==N.y)continue;let Dt=N.clone();N.x=J[S+5],N.y=J[S+6],V.x=N.x,V.y=N.y,o(F,J[S],J[S+1],J[S+2],J[S+3],J[S+4],Dt,N),S===0&&I===!0&&rt.copy(N)}break;case"m":J=g(Q);for(let S=0,At=J.length;S<At;S+=2)N.x+=J[S+0],N.y+=J[S+1],V.x=N.x,V.y=N.y,S===0?F.moveTo(N.x,N.y):F.lineTo(N.x,N.y),S===0&&rt.copy(N);break;case"h":J=g(Q);for(let S=0,At=J.length;S<At;S++)N.x+=J[S],V.x=N.x,V.y=N.y,F.lineTo(N.x,N.y),S===0&&I===!0&&rt.copy(N);break;case"v":J=g(Q);for(let S=0,At=J.length;S<At;S++)N.y+=J[S],V.x=N.x,V.y=N.y,F.lineTo(N.x,N.y),S===0&&I===!0&&rt.copy(N);break;case"l":J=g(Q);for(let S=0,At=J.length;S<At;S+=2)N.x+=J[S+0],N.y+=J[S+1],V.x=N.x,V.y=N.y,F.lineTo(N.x,N.y),S===0&&I===!0&&rt.copy(N);break;case"c":J=g(Q);for(let S=0,At=J.length;S<At;S+=6)F.bezierCurveTo(N.x+J[S+0],N.y+J[S+1],N.x+J[S+2],N.y+J[S+3],N.x+J[S+4],N.y+J[S+5]),V.x=N.x+J[S+2],V.y=N.y+J[S+3],N.x+=J[S+4],N.y+=J[S+5],S===0&&I===!0&&rt.copy(N);break;case"s":J=g(Q);for(let S=0,At=J.length;S<At;S+=4)F.bezierCurveTo(m(N.x,V.x),m(N.y,V.y),N.x+J[S+0],N.y+J[S+1],N.x+J[S+2],N.y+J[S+3]),V.x=N.x+J[S+0],V.y=N.y+J[S+1],N.x+=J[S+2],N.y+=J[S+3],S===0&&I===!0&&rt.copy(N);break;case"q":J=g(Q);for(let S=0,At=J.length;S<At;S+=4)F.quadraticCurveTo(N.x+J[S+0],N.y+J[S+1],N.x+J[S+2],N.y+J[S+3]),V.x=N.x+J[S+0],V.y=N.y+J[S+1],N.x+=J[S+2],N.y+=J[S+3],S===0&&I===!0&&rt.copy(N);break;case"t":J=g(Q);for(let S=0,At=J.length;S<At;S+=2){let Dt=m(N.x,V.x),U=m(N.y,V.y);F.quadraticCurveTo(Dt,U,N.x+J[S+0],N.y+J[S+1]),V.x=Dt,V.y=U,N.x=N.x+J[S+0],N.y=N.y+J[S+1],S===0&&I===!0&&rt.copy(N)}break;case"a":J=g(Q,[3,4],7);for(let S=0,At=J.length;S<At;S+=7){if(J[S+5]==0&&J[S+6]==0)continue;let Dt=N.clone();N.x+=J[S+5],N.y+=J[S+6],V.x=N.x,V.y=N.y,o(F,J[S],J[S+1],J[S+2],J[S+3],J[S+4],Dt,N),S===0&&I===!0&&rt.copy(N)}break;case"Z":case"z":F.currentPath.autoClose=!0,F.currentPath.curves.length>0&&(N.copy(rt),F.currentPath.currentPoint.copy(N),ht=!0);break;default:console.warn(ut)}I=!1}return F}function s(B){if(!(!B.sheet||!B.sheet.cssRules||!B.sheet.cssRules.length))for(let F=0;F<B.sheet.cssRules.length;F++){let N=B.sheet.cssRules[F];if(N.type!==1)continue;let V=N.selectorText.split(/,/gm).filter(Boolean).map(rt=>rt.trim());for(let rt=0;rt<V.length;rt++){let ht=Object.fromEntries(Object.entries(N.style).filter(([,I])=>I!==""));et[V[rt]]=Object.assign(et[V[rt]]||{},ht)}}}function o(B,F,N,V,rt,ht,I,q){if(F==0||N==0){B.lineTo(q.x,q.y);return}V=V*Math.PI/180,F=Math.abs(F),N=Math.abs(N);let H=(I.x-q.x)/2,P=(I.y-q.y)/2,it=Math.cos(V)*H+Math.sin(V)*P,ut=-Math.sin(V)*H+Math.cos(V)*P,St=F*F,Q=N*N,J=it*it,S=ut*ut,At=J/St+S/Q;if(At>1){let pt=Math.sqrt(At);F=pt*F,N=pt*N,St=F*F,Q=N*N}let Dt=St*S+Q*J,U=(St*Q-Dt)/Dt,v=Math.sqrt(Math.max(0,U));rt===ht&&(v=-v);let K=v*F*ut/N,nt=-v*N*it/F,ft=Math.cos(V)*K-Math.sin(V)*nt+(I.x+q.x)/2,wt=Math.sin(V)*K+Math.cos(V)*nt+(I.y+q.y)/2,bt=a(1,0,(it-K)/F,(ut-nt)/N),dt=a((it-K)/F,(ut-nt)/N,(-it-K)/F,(-ut-nt)/N)%(Math.PI*2);B.currentPath.absellipse(ft,wt,F,N,bt,bt+dt,ht===0,V)}function a(B,F,N,V){let rt=B*N+F*V,ht=Math.sqrt(B*B+F*F)*Math.sqrt(N*N+V*V),I=Math.acos(Math.max(-1,Math.min(1,rt/ht)));return B*V-F*N<0&&(I=-I),I}function l(B){let F=y(B.getAttribute("x")||0),N=y(B.getAttribute("y")||0),V=y(B.getAttribute("rx")||B.getAttribute("ry")||0),rt=y(B.getAttribute("ry")||B.getAttribute("rx")||0),ht=y(B.getAttribute("width")),I=y(B.getAttribute("height")),q=1-.551915024494,H=new pr;return H.moveTo(F+V,N),H.lineTo(F+ht-V,N),(V!==0||rt!==0)&&H.bezierCurveTo(F+ht-V*q,N,F+ht,N+rt*q,F+ht,N+rt),H.lineTo(F+ht,N+I-rt),(V!==0||rt!==0)&&H.bezierCurveTo(F+ht,N+I-rt*q,F+ht-V*q,N+I,F+ht-V,N+I),H.lineTo(F+V,N+I),(V!==0||rt!==0)&&H.bezierCurveTo(F+V*q,N+I,F,N+I-rt*q,F,N+I-rt),H.lineTo(F,N+rt),(V!==0||rt!==0)&&H.bezierCurveTo(F,N+rt*q,F+V*q,N,F+V,N),H}function c(B){function F(ht,I,q){let H=y(I),P=y(q);rt===0?V.moveTo(H,P):V.lineTo(H,P),rt++}let N=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,V=new pr,rt=0;return B.getAttribute("points").replace(N,F),V.currentPath.autoClose=!0,V}function h(B){function F(ht,I,q){let H=y(I),P=y(q);rt===0?V.moveTo(H,P):V.lineTo(H,P),rt++}let N=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,V=new pr,rt=0;return B.getAttribute("points").replace(N,F),V.currentPath.autoClose=!1,V}function f(B){let F=y(B.getAttribute("cx")||0),N=y(B.getAttribute("cy")||0),V=y(B.getAttribute("r")||0),rt=new Rr;rt.absarc(F,N,V,0,Math.PI*2);let ht=new pr;return ht.subPaths.push(rt),ht}function u(B){let F=y(B.getAttribute("cx")||0),N=y(B.getAttribute("cy")||0),V=y(B.getAttribute("rx")||0),rt=y(B.getAttribute("ry")||0),ht=new Rr;ht.absellipse(F,N,V,rt,0,Math.PI*2);let I=new pr;return I.subPaths.push(ht),I}function d(B){let F=y(B.getAttribute("x1")||0),N=y(B.getAttribute("y1")||0),V=y(B.getAttribute("x2")||0),rt=y(B.getAttribute("y2")||0),ht=new pr;return ht.moveTo(F,N),ht.lineTo(V,rt),ht.currentPath.autoClose=!1,ht}function p(B){let F="http://www.w3.org/1999/xlink",N=B.querySelectorAll("linearGradient, radialGradient"),V=["x1","y1","x2","y2","cx","cy","r","fx","fy","gradientUnits","gradientTransform","spreadMethod"],rt={};for(let I of N){let q=I.getAttribute("id");if(!q)continue;let H={type:I.nodeName==="radialGradient"?"radialGradient":"linearGradient",attrs:{},stops:null,href:null},P=I.getAttributeNS(F,"href")||I.getAttribute("href")||"";P.startsWith("#")&&(H.href=P.substring(1));for(let ut of V)I.hasAttribute(ut)&&(H.attrs[ut]=I.getAttribute(ut));let it=I.querySelectorAll("stop");if(it.length>0){H.stops=[];for(let ut of it){let St=ut.getAttribute("stop-color");!St&&ut.style&&(St=ut.style["stop-color"]),St||(St="#000");let Q=ut.getAttribute("stop-opacity");(Q===null||Q==="")&&ut.style&&(Q=ut.style["stop-opacity"]),Q=Q===null||Q===""||Q===void 0?1:Math.max(0,Math.min(1,parseFloat(Q)));let J=Math.max(0,Math.min(1,parseFloat(ut.getAttribute("offset")||"0")));H.stops.push({offset:J,color:St,opacity:Q})}}rt[q]=H}function ht(I,q){let H=rt[I];if(!H||q.has(I))return H;if(q.add(I),H.href&&rt[H.href]){let P=ht(H.href,q);if(P){H.stops||(H.stops=P.stops);for(let it in P.attrs)it in H.attrs||(H.attrs[it]=P.attrs[it])}}return H}for(let I in rt)ht(I,new Set);for(let I in rt){let ut=function(St){return typeof St!="string"?0:St.endsWith("%")?parseFloat(St)/100:y(St)},q=rt[I],H=q.attrs,P=H.gradientUnits==="userSpaceOnUse"?"userSpaceOnUse":"objectBoundingBox",it={type:q.type,gradientUnits:P,spreadMethod:H.spreadMethod==="reflect"||H.spreadMethod==="repeat"?H.spreadMethod:"pad",gradientTransform:null,stops:(q.stops||[]).slice().sort((St,Q)=>St.offset-Q.offset)};if(H.gradientTransform&&(it.gradientTransform=new re,C(H.gradientTransform,it.gradientTransform)),q.type==="linearGradient")it.x1=H.x1!==void 0?ut(H.x1):0,it.y1=H.y1!==void 0?ut(H.y1):0,it.x2=H.x2!==void 0?ut(H.x2):P==="objectBoundingBox"?1:0,it.y2=H.y2!==void 0?ut(H.y2):0;else{let St=P==="objectBoundingBox"?.5:0,Q=P==="objectBoundingBox"?.5:0;it.cx=H.cx!==void 0?ut(H.cx):St,it.cy=H.cy!==void 0?ut(H.cy):St,it.r=H.r!==void 0?ut(H.r):Q,it.fx=H.fx!==void 0?ut(H.fx):it.cx,it.fy=H.fy!==void 0?ut(H.fy):it.cy}X[I]=it}}function _(B,F){F=Object.assign({},F);let N={};if(B.hasAttribute("class")){let I=B.getAttribute("class").split(/\s/).filter(Boolean).map(q=>q.trim());for(let q=0;q<I.length;q++)N=Object.assign(N,et["."+I[q]])}B.hasAttribute("id")&&(N=Object.assign(N,et["#"+B.getAttribute("id")]));function V(I,q,H){H===void 0&&(H=function(it){return it}),B.hasAttribute(I)&&(F[q]=H(B.getAttribute(I))),N[q]&&(F[q]=H(N[q])),B.style&&B.style[I]!==""&&(F[q]=H(B.style[I]))}function rt(I){return Math.max(0,Math.min(1,y(I)))}function ht(I){return Math.max(0,y(I))}return V("fill","fill"),V("fill-opacity","fillOpacity",rt),V("fill-rule","fillRule"),V("opacity","opacity",rt),V("stroke","stroke"),V("stroke-opacity","strokeOpacity",rt),V("stroke-width","strokeWidth",ht),V("stroke-linejoin","strokeLineJoin"),V("stroke-linecap","strokeLineCap"),V("stroke-miterlimit","strokeMiterLimit",ht),V("visibility","visibility"),F}function m(B,F){return B-(F-B)}function g(B,F,N){if(typeof B!="string")throw new TypeError("Invalid input: "+typeof B);let V={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},rt=0,ht=1,I=2,q=3,H=rt,P=!0,it="",ut="",St=[];function Q(Dt,U,v){let K=new SyntaxError('Unexpected character "'+Dt+'" at index '+U+".");throw K.partial=v,K}function J(){it!==""&&(ut===""?St.push(Number(it)):St.push(Number(it)*Math.pow(10,Number(ut)))),it="",ut=""}let S,At=B.length;for(let Dt=0;Dt<At;Dt++){if(S=B[Dt],Array.isArray(F)&&F.includes(St.length%N)&&V.FLAGS.test(S)){H=ht,it=S,J();continue}if(H===rt){if(V.WHITESPACE.test(S))continue;if(V.DIGIT.test(S)||V.SIGN.test(S)){H=ht,it=S;continue}if(V.POINT.test(S)){H=I,it=S;continue}V.COMMA.test(S)&&(P&&Q(S,Dt,St),P=!0)}if(H===ht){if(V.DIGIT.test(S)){it+=S;continue}if(V.POINT.test(S)){it+=S,H=I;continue}if(V.EXP.test(S)){H=q;continue}V.SIGN.test(S)&&it.length===1&&V.SIGN.test(it[0])&&Q(S,Dt,St)}if(H===I){if(V.DIGIT.test(S)){it+=S;continue}if(V.EXP.test(S)){H=q;continue}V.POINT.test(S)&&it[it.length-1]==="."&&Q(S,Dt,St)}if(H===q){if(V.DIGIT.test(S)){ut+=S;continue}if(V.SIGN.test(S)){if(ut===""){ut+=S;continue}ut.length===1&&V.SIGN.test(ut)&&Q(S,Dt,St)}}V.WHITESPACE.test(S)?(J(),H=rt,P=!1):V.COMMA.test(S)?(J(),H=rt,P=!0):V.SIGN.test(S)?(J(),H=ht,it=S):V.POINT.test(S)?(J(),H=I,it=S):Q(S,Dt,St)}return J(),St}let T=["mm","cm","in","pt","pc","px"],A={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function y(B){let F="px";if(typeof B=="string"||B instanceof String)for(let V=0,rt=T.length;V<rt;V++){let ht=T[V];if(B.endsWith(ht)){F=ht,B=B.substring(0,B.length-ht.length);break}}let N;return F==="px"&&e.defaultUnit!=="px"?N=A.in[e.defaultUnit]/e.defaultDPI:(N=A[F][e.defaultUnit],N<0&&(N=A[F].in*e.defaultDPI)),N*parseFloat(B)}function M(B){if(!(B.hasAttribute("transform")||B.nodeName==="use"&&(B.hasAttribute("x")||B.hasAttribute("y"))))return null;let F=w(B);return Z.length>0&&F.premultiply(Z[Z.length-1]),Bt.copy(F),Z.push(F),F}function w(B){let F=new re;if(B.nodeName==="use"&&(B.hasAttribute("x")||B.hasAttribute("y"))){let N=y(B.getAttribute("x")||0),V=y(B.getAttribute("y")||0);F.makeTranslation(N,V)}return B.hasAttribute("transform")&&C(B.getAttribute("transform"),F),F}function C(B,F){let N=tt,V=B.split(")");for(let rt=V.length-1;rt>=0;rt--){let ht=V[rt].trim();if(ht==="")continue;let I=ht.indexOf("("),q=ht.length;if(I>0&&I<q){let H=ht.slice(0,I),P=g(ht.slice(I+1));switch(N.identity(),H){case"translate":if(P.length>=1){let it=P[0],ut=0;P.length>=2&&(ut=P[1]),N.makeTranslation(it,ut)}break;case"rotate":if(P.length>=1){let it=0,ut=0,St=0;it=P[0]*Math.PI/180,P.length>=3&&(ut=P[1],St=P[2]),D.makeTranslation(-ut,-St),st.makeRotation(it),gt.multiplyMatrices(st,D),D.makeTranslation(ut,St),N.multiplyMatrices(D,gt)}break;case"scale":if(P.length>=1){let it=P[0],ut=it;P.length>=2&&(ut=P[1]),N.makeScale(it,ut)}break;case"skewX":P.length===1&&N.set(1,Math.tan(P[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":P.length===1&&N.set(1,0,0,Math.tan(P[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":P.length===6&&N.set(P[0],P[2],P[4],P[1],P[3],P[5],0,0,1);break}F.premultiply(N)}}return F}function x(B,F){function N(I){Et.set(I.x,I.y,1).applyMatrix3(F),I.set(Et.x,Et.y)}function V(I){let q=I.xRadius,H=I.yRadius,P=Math.cos(I.aRotation),it=Math.sin(I.aRotation),ut=new G(q*P,q*it,0),St=new G(-H*it,H*P,0),Q=ut.applyMatrix3(F),J=St.applyMatrix3(F),S=tt.set(Q.x,J.x,0,Q.y,J.y,0,0,0,1),At=D.copy(S).invert(),v=st.copy(At).transpose().multiply(At).elements,K=O(v[0],v[1],v[4]),nt=Math.sqrt(K.rt1),ft=Math.sqrt(K.rt2);if(I.xRadius=1/nt,I.yRadius=1/ft,I.aRotation=Math.atan2(K.sn,K.cs),!((I.aEndAngle-I.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let bt=D.set(nt,0,0,0,ft,0,0,0,1),dt=st.set(K.cs,K.sn,0,-K.sn,K.cs,0,0,0,1),pt=bt.multiply(dt).multiply(S),It=Wt=>{let{x:Nt,y:Ut}=new G(Math.cos(Wt),Math.sin(Wt),0).applyMatrix3(pt);return Math.atan2(Ut,Nt)};I.aStartAngle=It(I.aStartAngle),I.aEndAngle=It(I.aEndAngle),b(F)&&(I.aClockwise=!I.aClockwise)}}function rt(I){let q=k(F),H=L(F);I.xRadius*=q,I.yRadius*=H;let P=q>Number.EPSILON?Math.atan2(F.elements[1],F.elements[0]):Math.atan2(-F.elements[3],F.elements[4]);I.aRotation+=P,b(F)&&(I.aStartAngle*=-1,I.aEndAngle*=-1,I.aClockwise=!I.aClockwise)}let ht=B.subPaths;for(let I=0,q=ht.length;I<q;I++){let P=ht[I].curves;for(let it=0;it<P.length;it++){let ut=P[it];ut.isLineCurve?(N(ut.v1),N(ut.v2)):ut.isCubicBezierCurve?(N(ut.v0),N(ut.v1),N(ut.v2),N(ut.v3)):ut.isQuadraticBezierCurve?(N(ut.v0),N(ut.v1),N(ut.v2)):ut.isEllipseCurve&&(yt.set(ut.aX,ut.aY),N(yt),ut.aX=yt.x,ut.aY=yt.y,R(F)?V(ut):rt(ut))}}}function b(B){let F=B.elements;return F[0]*F[4]-F[1]*F[3]<0}function R(B){let F=B.elements,N=F[0]*F[3]+F[1]*F[4];if(N===0)return!1;let V=k(B),rt=L(B);return Math.abs(N/(V*rt))>Number.EPSILON}function k(B){let F=B.elements;return Math.sqrt(F[0]*F[0]+F[1]*F[1])}function L(B){let F=B.elements;return Math.sqrt(F[3]*F[3]+F[4]*F[4])}function Y(B){let F=B.elements,N=F[0]*F[4]-F[1]*F[3];return Math.sqrt(Math.abs(N))}function O(B,F,N){let V,rt,ht,I,q,H=B+N,P=B-N,it=Math.sqrt(P*P+4*F*F);return H>0?(V=.5*(H+it),q=1/V,rt=B*q*N-F*q*F):H<0?rt=.5*(H-it):(V=.5*it,rt=-.5*it),P>0?ht=P+it:ht=P-it,Math.abs(ht)>2*Math.abs(F)?(q=-2*F/ht,I=1/Math.sqrt(1+q*q),ht=q*I):Math.abs(F)===0?(ht=1,I=0):(q=-.5*ht/F,ht=1/Math.sqrt(1+q*q),I=q*ht),P>0&&(q=ht,ht=-I,I=q),{rt1:V,rt2:rt,cs:ht,sn:I}}let W=[],et={},X={},Z=[],tt=new re,D=new re,st=new re,gt=new re,yt=new vt,Et=new G,Bt=new re,Lt=new DOMParser().parseFromString(t,"image/svg+xml");return p(Lt),n(Lt.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:W,gradients:X,xml:Lt.documentElement}}static createFillMaterial(t){let e=t.userData.style;if(e.fill===void 0||e.fill==="none")return null;let n=t.color,i=null,s=Rg.exec(e.fill);if(s){let a=t.userData.gradients&&t.userData.gradients[s[1]];i=tw(a,t)}let o=new kn({opacity:e.fillOpacity*(e.opacity||1),transparent:!0,side:ui,depthWrite:!1});return i!==null?o.map=i:o.color=n,o}static createStrokeMaterial(t){let e=t.userData.style;return e.stroke===void 0||e.stroke==="none"?null:(Rg.test(e.stroke)&&console.warn("THREE.SVGLoader: Gradient strokes are not supported."),new kn({color:new Kt().setStyle(e.stroke,Vl),opacity:e.strokeOpacity*(e.opacity||1),transparent:!0,side:ui,depthWrite:!1}))}static createShapes(t){return console.warn("SVGLoader: createShapes() is deprecated. Use shapePath.toShapes() instead."),t.toShapes()}static getStrokeStyle(t,e,n,i,s){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",i=i!==void 0?i:"butt",s=s!==void 0?s:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:i,strokeMiterLimit:s}}static pointsToStroke(t,e,n,i){let s=[],o=[],a=[];if(r.pointsToStrokeWithBuffers(t,e,n,i,s,o,a)===0)return null;let l=new xn;return l.setAttribute("position",new Ae(s,3)),l.setAttribute("normal",new Ae(o,3)),l.setAttribute("uv",new Ae(a,2)),l}static pointsToStrokeWithBuffers(t,e,n,i,s,o,a,l){let c=new vt,h=new vt,f=new vt,u=new vt,d=new vt,p=new vt,_=new vt,m=new vt,g=new vt,T=new vt,A=new vt,y=new vt,M=new vt,w=new vt,C=new vt,x=new vt,b=new vt;n=n!==void 0?n:12,i=i!==void 0?i:.001,l=l!==void 0?l:0,t=ht(t);let R=t.length;if(R<2)return 0;let k=t[0].equals(t[R-1]),L,Y=t[0],O,W=e.strokeWidth/2,et=1/(R-1),X=0,Z,tt,D,st,gt=!1,yt=0,Et=l*3,Bt=l*2;Lt(t[0],t[1],c).multiplyScalar(W),m.copy(t[0]).sub(c),g.copy(t[0]).add(c),T.copy(m),A.copy(g);for(let I=1;I<R;I++){L=t[I],I===R-1?k?O=t[1]:O=void 0:O=t[I+1];let q=c;if(Lt(Y,L,q),f.copy(q).multiplyScalar(W),y.copy(L).sub(f),M.copy(L).add(f),Z=X+et,tt=!1,O!==void 0){Lt(L,O,h),f.copy(h).multiplyScalar(W),w.copy(L).sub(f),C.copy(L).add(f),D=!0,f.subVectors(O,Y),q.dot(f)<0&&(D=!1),I===1&&(gt=D),f.subVectors(O,L),f.normalize();let H=Math.abs(q.dot(f));if(H>Number.EPSILON){let P=W/H;f.multiplyScalar(-P),u.subVectors(L,Y),d.copy(u).setLength(P).add(f),x.copy(d).negate();let it=d.length(),ut=u.length();u.divideScalar(ut),p.subVectors(O,L);let St=p.length();if(p.divideScalar(St),u.dot(x)<ut&&p.dot(x)<St&&(tt=!0),b.copy(d).add(L),x.add(L),tt){let Q=D?g:m,J=(b.x-Q.x)*(x.y-Q.y)-(b.y-Q.y)*(x.x-Q.x);(D&&J<0||!D&&J>0)&&x.copy(Q)}switch(st=!1,tt?D?(C.copy(x),M.copy(x)):(w.copy(x),y.copy(x)):F(),e.strokeLineJoin){case"bevel":N(D,tt,Z);break;case"round":V(D,tt),D?B(L,y,w,Z,0):B(L,C,M,Z,1);break;default:let Q=W*e.strokeMiterLimit/it;if(Q<1)if(e.strokeLineJoin!=="miter-clip"){N(D,tt,Z);break}else V(D,tt),D?(p.subVectors(b,y).multiplyScalar(Q).add(y),_.subVectors(b,w).multiplyScalar(Q).add(w),z(y,Z,0),z(p,Z,0),z(L,Z,.5),z(L,Z,.5),z(p,Z,0),z(_,Z,0),z(L,Z,.5),z(_,Z,0),z(w,Z,0)):(p.subVectors(b,M).multiplyScalar(Q).add(M),_.subVectors(b,C).multiplyScalar(Q).add(C),z(M,Z,1),z(p,Z,1),z(L,Z,.5),z(L,Z,.5),z(p,Z,1),z(_,Z,1),z(L,Z,.5),z(_,Z,1),z(C,Z,1));else tt?(D?(z(g,X,1),z(m,X,0),z(b,Z,0),z(g,X,1),z(b,Z,0),z(x,Z,1)):(z(g,X,1),z(m,X,0),z(b,Z,1),z(m,X,0),z(x,Z,0),z(b,Z,1)),D?w.copy(b):C.copy(b)):D?(z(y,Z,0),z(b,Z,0),z(L,Z,.5),z(L,Z,.5),z(b,Z,0),z(w,Z,0)):(z(M,Z,1),z(b,Z,1),z(L,Z,.5),z(L,Z,.5),z(b,Z,1),z(C,Z,1)),st=!0;break}}else F()}else F();!k&&I===R-1&&rt(t[0],T,A,D,!0,X),X=Z,Y=L,m.copy(w),g.copy(C)}if(!k)rt(L,y,M,D,!1,Z);else if(tt&&s){let I=b,q=x;gt!==D&&(I=x,q=b),D?(st||gt)&&(q.toArray(s,0),q.toArray(s,9),st&&I.toArray(s,3)):(st||!gt)&&(q.toArray(s,3),q.toArray(s,9),st&&I.toArray(s,0))}if(s){let I=[new vt,new vt,new vt],q=l*3;for(let H=q;H<Et;H+=9)I[0].set(s[H],s[H+1]),I[1].set(s[H+3],s[H+4]),I[2].set(s[H+6],s[H+7]),br.area(I)<0&&(s[H+3]=I[0].x,s[H+4]=I[0].y)}return yt;function Lt(I,q,H){return H.subVectors(q,I),H.set(-H.y,H.x).normalize()}function z(I,q,H){s&&(s[Et]=I.x,s[Et+1]=I.y,s[Et+2]=0,o&&(o[Et]=0,o[Et+1]=0,o[Et+2]=1),Et+=3,a&&(a[Bt]=q,a[Bt+1]=H,Bt+=2)),yt+=3}function B(I,q,H,P,it){c.copy(q).sub(I).normalize(),h.copy(H).sub(I).normalize();let ut=Math.PI,St=c.dot(h);Math.abs(St)<1&&(ut=Math.abs(Math.acos(St))),ut/=n,f.copy(q);for(let Q=0,J=n-1;Q<J;Q++)u.copy(f).rotateAround(I,ut),z(f,P,it),z(u,P,it),z(I,P,.5),f.copy(u);z(f,P,it),z(H,P,it),z(I,P,.5)}function F(){z(g,X,1),z(m,X,0),z(y,Z,0),z(g,X,1),z(y,Z,0),z(M,Z,1)}function N(I,q,H){q?I?(z(g,X,1),z(m,X,0),z(y,Z,0),z(g,X,1),z(y,Z,0),z(x,Z,1),z(y,H,0),z(w,H,0),z(x,H,.5)):(z(g,X,1),z(m,X,0),z(M,Z,1),z(m,X,0),z(x,Z,0),z(M,Z,1),z(M,H,1),z(x,H,0),z(C,H,1)):I?(z(y,H,0),z(w,H,0),z(L,H,.5)):(z(M,H,1),z(C,H,0),z(L,H,.5))}function V(I,q){q&&(I?(z(g,X,1),z(m,X,0),z(y,Z,0),z(g,X,1),z(y,Z,0),z(x,Z,1),z(y,X,0),z(L,Z,.5),z(x,Z,1),z(L,Z,.5),z(w,X,0),z(x,Z,1)):(z(g,X,1),z(m,X,0),z(M,Z,1),z(m,X,0),z(x,Z,0),z(M,Z,1),z(M,X,1),z(x,Z,0),z(L,Z,.5),z(L,Z,.5),z(x,Z,0),z(C,X,1)))}function rt(I,q,H,P,it,ut){switch(e.strokeLineCap){case"round":it?B(I,H,q,ut,.5):B(I,q,H,ut,.5);break;case"square":if(it)c.subVectors(q,I),h.set(c.y,-c.x),f.addVectors(c,h).add(I),u.subVectors(h,c).add(I),P?(f.toArray(s,3),u.toArray(s,0),u.toArray(s,9)):(f.toArray(s,3),a[7]===1?u.toArray(s,9):f.toArray(s,9),u.toArray(s,0));else{c.subVectors(H,I),h.set(c.y,-c.x),f.addVectors(c,h).add(I),u.subVectors(h,c).add(I);let St=s.length;P?(f.toArray(s,St-3),u.toArray(s,St-6),u.toArray(s,St-12)):(u.toArray(s,St-6),f.toArray(s,St-3),u.toArray(s,St-12))}break;default:break}}function ht(I){let q=!1;for(let P=1,it=I.length-1;P<it;P++)if(I[P].distanceTo(I[P+1])<i){q=!0;break}if(!q)return I;let H=[];H.push(I[0]);for(let P=1,it=I.length-1;P<it;P++)I[P].distanceTo(I[P+1])>=i&&H.push(I[P]);return H.push(I[I.length-1]),H}}},Rg=/^\s*url\(\s*(?:["']\s*)?#([^)'"\s]+)(?:\s*["'])?\s*\)\s*$/;function tw(r,t,e=256){if(!r||!Array.isArray(r.stops)||r.stops.length===0)return null;let n=t.userData.transform,i=r.gradientUnits==="objectBoundingBox",s=null;if(i&&(s=ew(t,n),s===null))return null;function o(f,u,d){d.set(f,u,1),r.gradientTransform&&d.applyMatrix3(r.gradientTransform),i&&d.set(s.minX+d.x*s.width,s.minY+d.y*s.height,1),n&&d.applyMatrix3(n)}let a=document.createElement("canvas"),l;if(r.type==="linearGradient"){a.width=e,a.height=1;let f=a.getContext("2d"),u=f.createLinearGradient(0,0,e,0);Pg(u,r.stops),f.fillStyle=u,f.fillRect(0,0,e,1);let d=new G,p=new G;o(r.x1,r.y1,d),o(r.x2,r.y2,p);let _=p.x-d.x,m=p.y-d.y,g=_*_+m*m||1e-20,T=_/g,A=m/g,y=-(T*d.x+A*d.y);l=new re().set(T,A,y,0,0,.5,0,0,1)}else{let f=r.cx,u=r.cy,d=r.fx,p=r.fy,_=r.r;if(r.gradientTransform){let x=new G;x.set(f,u,1).applyMatrix3(r.gradientTransform),f=x.x,u=x.y,x.set(d,p,1).applyMatrix3(r.gradientTransform),d=x.x,p=x.y}if(i&&(f=s.minX+f*s.width,u=s.minY+u*s.height,d=s.minX+d*s.width,p=s.minY+p*s.height,_=_*Math.sqrt((s.width*s.width+s.height*s.height)/2)),_<=0)return null;a.width=e,a.height=e;let m=a.getContext("2d"),g=f-_,T=u-_,A=2*_,y=e/A;m.setTransform(y,0,0,y,-g*y,-T*y);let M=m.createRadialGradient(d,p,0,f,u,_);Pg(M,r.stops),m.fillStyle=M,m.fillRect(g,T,A,A);let w=n?n.clone().invert():new re;l=new re().set(1/A,0,-g/A,0,1/A,-T/A,0,0,1).multiply(w)}let c=new $i(a);c.colorSpace=Vl,c.flipY=!1,c.matrixAutoUpdate=!1,c.matrix=l;let h=r.spreadMethod==="reflect"?Xo:r.spreadMethod==="repeat"?Wo:Ji;return c.wrapS=h,c.wrapT=h,c}function ew(r,t){let e=t?t.clone().invert():null,n=new vt,i=new ia;for(let s of r.subPaths)for(let o of s.getPoints())n.copy(o),e&&n.applyMatrix3(e),i.expandByPoint(n);return i.isEmpty()?null:{minX:i.min.x,minY:i.min.y,width:i.max.x-i.min.x,height:i.max.y-i.min.y}}function Pg(r,t){let e=new Kt;for(let n of t){let i=n.color;if(n.opacity<1){e.setStyle(n.color,Vl);let s=/rgb\(([^)]+)\)/.exec(e.getStyle(Vl));s&&(i=`rgba(${s[1]},${n.opacity})`)}r.addColorStop(Math.max(0,Math.min(1,n.offset)),i)}}var Pu=class extends Qr{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new ys;t.deleteAttribute("uv");let e=new Zs({side:Vn}),n=new Zs,i=new $s(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new Ie(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new ll(t,n,6),a=new _n;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Ie(t,da(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ie(t,da(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Ie(t,da(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new Ie(t,da(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let u=new Ie(t,da(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new Ie(t,da(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function da(r){return new Sl({color:0,emissive:16777215,emissiveIntensity:r})}function ns(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Bg(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var Ei={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ma={duration:.5,overwrite:!1,delay:0},Sp,Hn,rn,tr=1e8,$e=1/tr,hp=Math.PI*2,nw=hp/4,iw=0,zg=Math.sqrt,rw=Math.cos,sw=Math.sin,Pn=function(t){return typeof t=="string"},un=function(t){return typeof t=="function"},rs=function(t){return typeof t=="number"},ku=function(t){return typeof t>"u"},Fr=function(t){return typeof t=="object"},Ai=function(t){return t!==!1},Mp=function(){return typeof window<"u"},Iu=function(t){return un(t)||Pn(t)},kg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ei=Array.isArray,up=/(?:-?\.?\d|\.)+/gi,bp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ro=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ip=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,wp=/[+-]=-?[.\d]+/,Vg=/[^,'"\[\]\s]+/gi,ow=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,on,Nr,fp,Tp,zi={},Uu={},Gg,Hg=function(t){return(Uu=ga(t,zi))&&ni},Vu=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Zl=function(t,e){return!e&&console.warn(t)},Wg=function(t,e){return t&&(zi[t]=e)&&Uu&&(Uu[t]=e)||zi},Jl=function(){return 0},aw={suppressEvents:!0,isStart:!0,kill:!1},Lu={suppressEvents:!0,kill:!1},lw={suppressEvents:!0},Ap={},Ps=[],dp={},Xg,wi={},rp={},Ig=30,Du=[],Ep="",Cp=function(t){var e=t[0],n,i;if(Fr(e)||un(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Du.length;i--&&!Du[i].targetTest(e););n=Du[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Lp(t[i],n)))||t.splice(i,1);return t},Is=function(t){return t._gsap||Cp(er(t))[0]._gsap},Rp=function(t,e,n){return(n=t[e])&&un(n)?t[e]():ku(n)&&t.getAttribute&&t.getAttribute(e)||n},di=function(t,e){return(t=t.split(",")).forEach(e)||t},fn=function(t){return Math.round(t*1e5)/1e5||0},wn=function(t){return Math.round(t*1e7)/1e7||0},so=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},cw=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Fu=function(){var t=Ps.length,e=Ps.slice(0),n,i;for(dp={},Ps.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Pp=function(t){return!!(t._initted||t._startAt||t.add)},qg=function(t,e,n,i){Ps.length&&!Hn&&Fu(),t.render(e,n,i||!!(Hn&&e<0&&Pp(t))),Ps.length&&!Hn&&Fu()},Yg=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Vg).length<2?e:Pn(t)?t.trim():t},Zg=function(t){return t},ki=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},hw=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},ga=function(t,e){for(var n in e)t[n]=e[n];return t},Lg=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Fr(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Ou=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Xl=function(t){var e=t.parent||on,n=t.keyframes?hw(ei(t.keyframes)):ki;if(Ai(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},uw=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Jg=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Gu=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Ls=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},eo=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},fw=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},pp=function(t,e,n,i){return t._startAt&&(Hn?t._startAt.revert(Lu):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},dw=function r(t){return!t||t._ts&&r(t.parent)},Dg=function(t){return t._repeat?_a(t._tTime,t=t.duration()+t._rDelay)*t:0},_a=function(t,e){var n=Math.floor(t=wn(t/e));return t&&n===t?n-1:n},Bu=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Hu=function(t){return t._end=wn(t._start+(t._tDur/Math.abs(t._ts||t._rts||$e)||0))},Wu=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=wn(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Hu(t),n._dirty||eo(n,t)),t},$g=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Bu(t.rawTime(),e),(!e._dur||Ql(0,e.totalDuration(),n)-e._tTime>$e)&&e.render(n,!0)),eo(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-$e}},Ur=function(t,e,n,i){return e.parent&&Ls(e),e._start=wn((rs(n)?n:n||t!==on?ji(t,n,e):t._time)+e._delay),e._end=wn(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Jg(t,e,"_first","_last",t._sort?"_start":0),mp(e)||(t._recent=e),i||$g(t,e),t._ts<0&&Wu(t,t._tTime),t},Kg=function(t,e){return(zi.ScrollTrigger||Vu("scrollTrigger",e))&&zi.ScrollTrigger.create(e,t)},Qg=function(t,e,n,i,s){if(Up(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Hn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Xg!==Ti.frame)return Ps.push(t),t._lazy=[s,i],1},pw=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},mp=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},mw=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&pw(t)&&!(!t._initted&&mp(t))||(t._ts<0||t._dp._ts<0)&&!mp(t))?0:1,a=t._rDelay,l=0,c,h,f;if(a&&t._repeat&&(l=Ql(0,t._tDur,e),h=_a(l,a),t._yoyo&&h&1&&(o=1-o),h!==_a(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Hn||i||t._zTime===$e||!e&&t._zTime){if(!t._initted&&Qg(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?$e:0),n||(n=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&pp(t,e,n,!0),t._onUpdate&&!n&&Bi(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Bi(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Ls(t,1),!n&&!Hn&&(Bi(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},gw=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},xa=function(t,e,n,i){var s=t._repeat,o=wn(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:wn(o*(s+1)+t._rDelay*s):o,a>0&&!i&&Wu(t,t._tTime=t._tDur*a),t.parent&&Hu(t),n||eo(t.parent,t),t},Ng=function(t){return t instanceof Gn?eo(t):xa(t,t._dur)},_w={_start:0,endTime:Jl,totalDuration:Jl},ji=function r(t,e,n){var i=t.labels,s=t._recent||_w,o=t.duration()>=tr?s.endTime(!1):t._dur,a,l,c;return Pn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(ei(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},ql=function(t,e,n){var i=rs(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Ai(l.vars.inherit)&&l.parent;o.immediateRender=Ai(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new yn(e[0],o,e[s+1])},Ds=function(t,e){return t||t===0?e(t):e},Ql=function(t,e,n){return n<t?t:n>e?e:n},Wn=function(t,e){return!Pn(t)||!(e=ow.exec(t))?"":e[1]},xw=function(t,e,n){return Ds(n,function(i){return Ql(t,e,i)})},gp=[].slice,jg=function(t,e){return t&&Fr(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Fr(t[0]))&&!t.nodeType&&t!==Nr},yw=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Pn(i)&&!e||jg(i,1)?(s=n).push.apply(s,er(i)):n.push(i)})||n},er=function(t,e,n){return rn&&!e&&rn.selector?rn.selector(t):Pn(t)&&!n&&(fp||!ya())?gp.call((e||Tp).querySelectorAll(t),0):ei(t)?yw(t,n):jg(t)?gp.call(t,0):t?[t]:[]},_p=function(t){return t=er(t)[0]||Zl("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return er(e,n.querySelectorAll?n:n===t?Zl("Invalid scope")||Tp.createElement("div"):t)}},t_=function(t){return t.sort(function(){return .5-Math.random()})},e_=function(t){if(un(t))return t;var e=Fr(t)?t:{each:t},n=no(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,f=i;return Pn(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],f=i[1]),function(u,d,p){var _=(p||e).length,m=o[_],g,T,A,y,M,w,C,x,b;if(!m){if(b=e.grid==="auto"?0:(e.grid||[1,tr])[1],!b){for(C=-tr;C<(C=p[b++].getBoundingClientRect().left)&&b<_;);b<_&&b--}for(m=o[_]=[],g=l?Math.min(b,_)*h-.5:i%b,T=b===tr?0:l?_*f/b-.5:i/b|0,C=0,x=tr,w=0;w<_;w++)A=w%b-g,y=T-(w/b|0),m[w]=M=c?Math.abs(c==="y"?y:A):zg(A*A+y*y),M>C&&(C=M),M<x&&(x=M);i==="random"&&t_(m),m.max=C-x,m.min=x,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(b>_?_-1:c?c==="y"?_/b:b:Math.max(b,_/b))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Wn(e.amount||e.each)||0,n=n&&_<0?h_(n):n}return _=(m[u]-m.min)/m.max||0,wn(m.b+(n?n(_):_)*m.v)+m.u}},xp=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=wn(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(rs(n)?0:Wn(n))}},n_=function(t,e){var n=ei(t),i,s;return!n&&Fr(t)&&(i=n=t.radius||tr,t.values?(t=er(t.values),(s=!rs(t[0]))&&(i*=i)):t=xp(t.increment)),Ds(e,n?un(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=tr,h=0,f=t.length,u,d;f--;)s?(u=t[f].x-a,d=t[f].y-l,u=u*u+d*d):u=Math.abs(t[f]-a),u<c&&(c=u,h=f);return h=!i||c<=i?t[h]:o,s||h===o||rs(o)?h:h+Wn(o)}:xp(t))},i_=function(t,e,n,i){return Ds(ei(t)?!e:n===!0?!!(n=0):!i,function(){return ei(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},vw=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},Sw=function(t,e){return function(n){return t(parseFloat(n))+(e||Wn(n))}},Mw=function(t,e,n){return s_(t,e,0,1,n)},r_=function(t,e,n){return Ds(n,function(i){return t[~~e(i)]})},bw=function r(t,e,n){var i=e-t;return ei(t)?r_(t,r(0,t.length),e):Ds(n,function(s){return(i+(s-t)%i)%i+t})},ww=function r(t,e,n){var i=e-t,s=i*2;return ei(t)?r_(t,r(0,t.length-1),e):Ds(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},va=function(t){for(var e=0,n="",i,s,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?Vg:up),n+=t.substr(e,i-e)+i_(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},s_=function(t,e,n,i,s){var o=e-t,a=i-n;return Ds(s,function(l){return n+((l-t)/o*a||0)})},Tw=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=Pn(t),a={},l,c,h,f,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(ei(t)&&!ei(e)){for(h=[],f=t.length,u=f-2,c=1;c<f;c++)h.push(r(t[c-1],t[c]));f--,s=function(p){p*=f;var _=Math.min(u,~~p);return h[_](p-_)},n=e}else i||(t=ga(ei(t)?[]:{},t));if(!h){for(l in e)Dp.call(a,t,l,"get",e[l]);s=function(p){return Bp(p,a)||(o?t.p:t)}}}return Ds(n,s)},Ug=function(t,e,n){var i=t.labels,s=tr,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Bi=function(t,e,n){var i=t.vars,s=i[e],o=rn,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Ps.length&&Fu(),a&&(rn=a),h=l?s.apply(c,l):s.call(c),rn=o,h},Hl=function(t){return Ls(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Hn),t.progress()<1&&Bi(t,"onInterrupt"),t},pa,o_=[],a_=function(t){if(t)if(t=!t.name&&t.default||t,Mp()||t.headless){var e=t.name,n=un(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Jl,render:Bp,add:Dp,kill:Vw,modifier:kw,rawVars:0},o={targetTest:0,get:0,getSetter:Xu,aliases:{},register:0};if(ya(),t!==i){if(wi[e])return;ki(i,ki(Ou(t,s),o)),ga(i.prototype,ga(s,Ou(t,o))),wi[i.prop=e]=i,t.targetTest&&(Du.push(i),Ap[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Wg(e,i),t.register&&t.register(ni,i,pi)}else o_.push(t)},Je=255,Wl={aqua:[0,Je,Je],lime:[0,Je,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Je],navy:[0,0,128],white:[Je,Je,Je],olive:[128,128,0],yellow:[Je,Je,0],orange:[Je,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Je,0,0],pink:[Je,192,203],cyan:[0,Je,Je],transparent:[Je,Je,Je,0]},sp=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Je+.5|0},l_=function(t,e,n){var i=t?rs(t)?[t>>16,t>>8&Je,t&Je]:0:Wl.black,s,o,a,l,c,h,f,u,d,p;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Wl[t])i=Wl[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Je,i&Je,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Je,t&Je]}else if(t.substr(0,3)==="hsl"){if(i=p=t.match(up),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=sp(l+1/3,s,o),i[1]=sp(l,s,o),i[2]=sp(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(bp),n&&i.length<4&&(i[3]=1),i}else i=t.match(up)||Wl.transparent;i=i.map(Number)}return e&&!p&&(s=i[0]/Je,o=i[1]/Je,a=i[2]/Je,f=Math.max(s,o,a),u=Math.min(s,o,a),h=(f+u)/2,f===u?l=c=0:(d=f-u,c=h>.5?d/(2-f-u):d/(f+u),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},c_=function(t){var e=[],n=[],i=-1;return t.split(is).forEach(function(s){var o=s.match(ro)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Fg=function(t,e,n){var i="",s=(t+i).match(is),o=e?"hsla(":"rgba(",a=0,l,c,h,f;if(!s)return t;if(s=s.map(function(u){return(u=l_(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=c_(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(is,"1").split(ro),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(is),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},is=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Wl)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),Aw=/hsl[a]?\(/,Ip=function(t){var e=t.join(" "),n;if(is.lastIndex=0,is.test(e))return n=Aw.test(e),t[1]=Fg(t[1],n),t[0]=Fg(t[0],n,c_(t[1])),!0},$l,Ti=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,f,u,d,p=function _(m){var g=r()-i,T=m===!0,A,y,M,w;if((g>t||g<0)&&(n+=g-e),i+=g,M=i-n,A=M-o,(A>0||T)&&(w=++f.frame,u=M-f.time*1e3,f.time=M=M/1e3,o+=A+(A>=s?4:s-A),y=1),T||(l=c(_)),y)for(d=0;d<a.length;d++)a[d](M,u,w,m)};return f={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){Gg&&(!fp&&Mp()&&(Nr=fp=window,Tp=Nr.document||{},zi.gsap=ni,(Nr.gsapVersions||(Nr.gsapVersions=[])).push(ni.version),Hg(Uu||Nr.GreenSockGlobals||!Nr.gsap&&Nr||{}),o_.forEach(a_)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=h||function(m){return setTimeout(m,o-f.time*1e3+1|0)},$l=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),$l=0,c=Jl},lagSmoothing:function(m,g){t=m||1/0,e=Math.min(g||33,t)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,g,T){var A=g?function(y,M,w,C){m(y,M,w,C),f.remove(A)}:m;return f.remove(m),a[T?"unshift":"push"](A),ya(),A},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&d>=g&&d--},_listeners:a},f})(),ya=function(){return!$l&&Ti.wake()},Ee={},Ew=/^[\d.\-M][\d.\-,\s]/,Cw=/["']/g,Rw=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(Cw,"").trim():+c,i=l.substr(a+1).trim();return e},Pw=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Iw=function(t){var e=(t+"").split("("),n=Ee[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Rw(e[1])]:Pw(t).split(",").map(Yg)):Ee._CE&&Ew.test(t)?Ee._CE("",t):n},h_=function(t){return function(e){return 1-t(1-e)}},u_=function r(t,e){for(var n=t._first,i;n;)n instanceof Gn?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},no=function(t,e){return t&&(un(t)?t:Ee[t]||Iw(t))||e},oo=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return di(t,function(a){Ee[a]=zi[a]=s,Ee[o=a.toLowerCase()]=n;for(var l in s)Ee[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ee[a+"."+l]=s[l]}),s},f_=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},op=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/hp*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*sw((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:f_(a);return s=hp/s,l.config=function(c,h){return r(t,c,h)},l},ap=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:f_(n);return i.config=function(s){return r(t,s)},i};di("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;oo(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Ee.Linear.easeNone=Ee.none=Ee.Linear.easeIn;oo("Elastic",op("in"),op("out"),op());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};oo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);oo("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});oo("Circ",function(r){return-(zg(1-r*r)-1)});oo("Sine",function(r){return r===1?1:-rw(r*nw)+1});oo("Back",ap("in"),ap("out"),ap());Ee.SteppedEase=Ee.steps=zi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-$e;return function(a){return((i*Ql(0,o,a)|0)+s)*n}}};ma.ease=Ee["quad.out"];di("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ep+=r+","+r+"Params,"});var Lp=function(t,e){this.id=iw++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Rp,this.set=e?e.getSetter:Xu},Kl=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,xa(this,+e.duration,1,1),this.data=e.data,rn&&(this._ctx=rn,rn.data.push(this)),$l||Ti.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,xa(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ya(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Wu(this,n),!s._dp||s.parent||$g(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ur(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===$e||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),qg(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Dg(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Dg(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?_a(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-$e?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Bu(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-$e?0:this._rts,this.totalTime(Ql(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Hu(this),fw(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ya(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==$e&&(this._tTime-=$e)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ur(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Ai(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Bu(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=lw);var i=Hn;return Hn=n,Pp(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Hn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ng(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ng(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(ji(this,n),Ai(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ai(i)),this._dur||(this._zTime=-$e),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-$e:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-$e,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-$e)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(s){var o=un(n)?n:Zg,a=function(){var c=i.then;i.then=null,un(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Hl(this)},r})();ki(Kl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-$e,_prom:0,_ps:!1,_rts:1});var Gn=(function(r){Bg(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ai(n.sortChildren),on&&Ur(n.parent||on,ns(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Kg(ns(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return ql(0,arguments,this),this},e.from=function(i,s,o){return ql(1,arguments,this),this},e.fromTo=function(i,s,o,a){return ql(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,Xl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new yn(i,s,ji(this,o),1),this},e.call=function(i,s,o){return Ur(this,yn.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new yn(i,o,ji(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,Xl(o).immediateRender=Ai(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,f){return a.startAt=o,Xl(a).immediateRender=Ai(a.immediateRender),this.staggerTo(i,s,a,l,c,h,f)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:wn(i),f=this._zTime<0!=i<0&&(this._initted||!c),u,d,p,_,m,g,T,A,y,M,w,C;if(this!==on&&h>l&&i>=0&&(h=l),h!==this._tTime||o||f){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,y=this._start,A=this._ts,g=!A,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(u=wn(h%m),h===l?(_=this._repeat,u=c):(M=wn(h/m),_=~~M,_&&_===M&&(u=c,_--),u>c&&(u=c)),M=_a(this._tTime,m),!a&&this._tTime&&M!==_&&this._tTime-M*m-this._dur<=0&&(M=_),w&&_&1&&(u=c-u,C=1),_!==M&&!this._lock){var x=w&&M&1,b=x===(w&&_&1);if(_<M&&(x=!x),a=x?0:h%c?c:h,this._lock=1,this.render(a||(C?0:wn(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Bi(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,a=x?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;u_(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=gw(this,wn(a),wn(u)),T&&(h-=u-(u=T._start))),this._tTime=h,this._time=u,this._act=!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!s&&!M&&(Bi(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(d=this._first;d;){if(p=d._next,(d._act||u>=d._start)&&d._ts&&T!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(u-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(u-d._start)*d._ts,s,o),u!==this._time||!this._ts&&!g){T=0,p&&(h+=this._zTime=-$e);break}}d=p}else{d=this._last;for(var R=i<0?i:u;d;){if(p=d._prev,(d._act||R<=d._end)&&d._ts&&T!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(R-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(R-d._start)*d._ts,s,o||Hn&&Pp(d)),u!==this._time||!this._ts&&!g){T=0,p&&(h+=this._zTime=R?-$e:$e);break}}d=p}}if(T&&!s&&(this.pause(),T.render(u>=a?0:-$e)._zTime=u>=a?1:-1,this._ts))return this._start=y,Hu(this),this.render(i,s,o);this._onUpdate&&!s&&Bi(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Ls(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(Bi(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(rs(s)||(s=ji(this,s,i)),!(i instanceof Kl)){if(ei(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Pn(i))return this.addLabel(i,s);if(un(i))i=yn.delayedCall(0,i);else return this}return this!==i?Ur(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-tr);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof yn?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return Pn(i)?this.removeLabel(i):un(i)?this.killTweensOf(i):(i.parent===this&&Gu(this,i),i===this._recent&&(this._recent=this._last),eo(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=wn(Ti.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=ji(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=yn.delayedCall(0,s||Jl,o);return a.data="isPause",this._hasPause=1,Ur(this,a,ji(this,i))},e.removePause=function(i){var s=this._first;for(i=ji(this,i);s;)s._start===i&&s.data==="isPause"&&Ls(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Rs!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=er(i),l=this._first,c=rs(s),h;l;)l instanceof yn?cw(l._targets,a)&&(c?(!Rs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=ji(o,i),l=s,c=l.startAt,h=l.onStart,f=l.onStartParams,u=l.immediateRender,d,p=yn.to(o,ki({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||$e,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&xa(p,m,0,1).render(p._time,!0,!0),d=1}h&&h.apply(p,f||[])}},s));return u?p.render(0):p},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,ki({startAt:{time:ji(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Ug(this,ji(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Ug(this,ji(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+$e)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return eo(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),eo(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=tr,c,h,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ur(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;xa(o,o===on&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(on._ts&&(qg(on,Bu(i,on)),Xg=Ti.frame),Ti.frame>=Ig){Ig+=Ei.autoSleep||120;var s=on._first;if((!s||!s._ts)&&Ei.autoSleep&&Ti._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ti.sleep()}}},t})(Kl);ki(Gn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Lw=function(t,e,n,i,s,o,a){var l=new pi(this._pt,t,e,0,1,Op,null,s),c=0,h=0,f,u,d,p,_,m,g,T;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=va(i)),o&&(T=[n,i],o(T,t,e),n=T[0],i=T[1]),u=n.match(ip)||[];f=ip.exec(i);)p=f[0],_=i.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),p!==u[h++]&&(m=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:p.charAt(1)==="="?so(m,p)-m:parseFloat(p)-m,m:d&&d<4?Math.round:0},c=ip.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(wp.test(i)||g)&&(l.e=0),this._pt=l,l},Dp=function(t,e,n,i,s,o,a,l,c,h){un(i)&&(i=i(s||0,t,o));var f=t[e],u=n!=="get"?n:un(f)?c?t[e.indexOf("set")||!un(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,d=un(f)?c?Ow:m_:Fp,p;if(Pn(i)&&(~i.indexOf("random(")&&(i=va(i)),i.charAt(1)==="="&&(p=so(u,i)+(Wn(u)||0),(p||p===0)&&(i=p))),!h||u!==i||yp)return!isNaN(u*i)&&i!==""?(p=new pi(this._pt,t,e,+u||0,i-(u||0),typeof f=="boolean"?zw:g_,0,d),c&&(p.fp=c),a&&p.modifier(a,this,t),this._pt=p):(!f&&!(e in t)&&Vu(e,i),Lw.call(this,t,e,u,i,d,l||Ei.stringFilter,c))},Dw=function(t,e,n,i,s){if(un(t)&&(t=Yl(t,s,e,n,i)),!Fr(t)||t.style&&t.nodeType||ei(t)||kg(t))return Pn(t)?Yl(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Yl(t[a],s,e,n,i);return o},Np=function(t,e,n,i,s,o){var a,l,c,h;if(wi[t]&&(a=new wi[t]).init(s,a.rawVars?e[t]:Dw(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new pi(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==pa))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Rs,yp,Up=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,u=i.keyframes,d=i.autoRevert,p=t._dur,_=t._startAt,m=t._targets,g=t.parent,T=g&&g.data==="nested"?g.vars.targets:m,A=t._overwrite==="auto"&&!Sp,y=t.timeline,M,w,C,x,b,R,k,L,Y,O,W,et,X;if(y&&(!u||!s)&&(s="none"),t._ease=no(s,ma.ease),t._yEase=f?h_(no(f===!0?s:f,ma.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!y&&!!i.runBackwards,!y||u&&!i.stagger){if(L=m[0]?Is(m[0]).harness:0,et=L&&i[L.prop],M=Ou(i,Ap),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!d?_.render(-1,!0):_.revert(h&&p?Lu:aw),_._lazy=0),o){if(Ls(t._startAt=yn.set(m,ki({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&Ai(l),startAt:null,delay:0,onUpdate:c&&function(){return Bi(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Hn||!a&&!d)&&t._startAt.revert(Lu),a&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&p&&!_){if(e&&(a=!1),C=ki({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Ai(l),immediateRender:a,stagger:0,parent:g},M),et&&(C[L.prop]=et),Ls(t._startAt=yn.set(m,C)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Hn?t._startAt.revert(Lu):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,$e,$e);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&Ai(l)||l&&!p,w=0;w<m.length;w++){if(b=m[w],k=b._gsap||Cp(m)[w]._gsap,t._ptLookup[w]=O={},dp[k.id]&&Ps.length&&Fu(),W=T===m?w:T.indexOf(b),L&&(Y=new L).init(b,et||M,t,W,T)!==!1&&(t._pt=x=new pi(t._pt,b,Y.name,0,1,Y.render,Y,0,Y.priority),Y._props.forEach(function(Z){O[Z]=x}),Y.priority&&(R=1)),!L||et)for(C in M)wi[C]&&(Y=Np(C,M,t,W,b,T))?Y.priority&&(R=1):O[C]=x=Dp.call(t,b,C,"get",M[C],W,T,0,i.stringFilter);t._op&&t._op[w]&&t.kill(b,t._op[w]),A&&t._pt&&(Rs=t,on.killTweensOf(b,O,t.globalTime(e)),X=!t.parent,Rs=0),t._pt&&l&&(dp[k.id]=1)}R&&zp(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!X,u&&e<=0&&y.render(tr,!0,!0)},Nw=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,f,u,d;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,d=t._targets.length;d--;){if(h=u[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return yp=1,t.vars[e]="+=0",Up(t,a),yp=0,l?Zl(e+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)f=c[d],h=f._pt||f,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,f.e&&(f.e=fn(n)+Wn(f.e)),f.b&&(f.b=h.s+Wn(f.b))},Uw=function(t,e){var n=t[0]?Is(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=ga({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Fw=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(ei(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Yl=function(t,e,n,i,s){return un(t)?t.call(e,n,i,s):Pn(t)&&~t.indexOf("random(")?va(t):t},d_=Ep+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",p_={};di(d_+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return p_[r]=1});var yn=(function(r){Bg(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Xl(i))||this;var l=a.vars,c=l.duration,h=l.delay,f=l.immediateRender,u=l.stagger,d=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=l.yoyoEase,T=i.parent||on,A=(ei(n)||kg(n)?rs(n[0]):"length"in i)?[n]:er(n),y,M,w,C,x,b,R,k;if(a._targets=A.length?Cp(A):Zl("GSAP target "+n+" not found. https://gsap.com",!Ei.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,p||u||Iu(c)||Iu(h)){if(i=a.vars,y=a.timeline=new Gn({data:"nested",defaults:_||{},targets:T&&T.data==="nested"?T.vars.targets:A}),y.kill(),y.parent=y._dp=ns(a),y._start=0,u||Iu(c)||Iu(h)){if(C=A.length,R=u&&e_(u),Fr(u))for(x in u)~d_.indexOf(x)&&(k||(k={}),k[x]=u[x]);for(M=0;M<C;M++)w=Ou(i,p_),w.stagger=0,g&&(w.yoyoEase=g),k&&ga(w,k),b=A[M],w.duration=+Yl(c,ns(a),M,b,A),w.delay=(+Yl(h,ns(a),M,b,A)||0)-a._delay,!u&&C===1&&w.delay&&(a._delay=h=w.delay,a._start+=h,w.delay=0),y.to(b,w,R?R(M,b,A):0),y._ease=Ee.none;y.duration()?c=h=0:a.timeline=0}else if(p){Xl(ki(y.vars.defaults,{ease:"none"})),y._ease=no(p.ease||i.ease||"none");var L=0,Y,O,W;if(ei(p))p.forEach(function(et){return y.to(A,et,">")}),y.duration();else{w={};for(x in p)x==="ease"||x==="easeEach"||Fw(x,p[x],w,p.easeEach);for(x in w)for(Y=w[x].sort(function(et,X){return et.t-X.t}),L=0,M=0;M<Y.length;M++)O=Y[M],W={ease:O.e,duration:(O.t-(M?Y[M-1].t:0))/100*c},W[x]=O.v,y.to(A,W,L),L+=W.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return d===!0&&!Sp&&(Rs=ns(a),on.killTweensOf(A),Rs=0),Ur(T,ns(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!p&&a._start===wn(T._time)&&Ai(f)&&dw(ns(a))&&T.data!=="nested")&&(a._tTime=-$e,a.render(Math.max(0,-h)||0)),m&&Kg(ns(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-$e&&!h?l:i<$e?0:i,u,d,p,_,m,g,T,A,y;if(!c)mw(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=f,A=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(u=wn(f%_),f===l?(p=this._repeat,u=c):(m=wn(f/_),p=~~m,p&&p===m?(u=c,p--):u>c&&(u=c)),g=this._yoyo&&p&1,g&&(y=this._yEase,u=c-u),m=_a(this._tTime,_),u===a&&!o&&this._initted&&p===m)return this._tTime=f,this;p!==m&&(A&&this._yEase&&u_(A,g),this.vars.repeatRefresh&&!g&&!this._lock&&u!==_&&this._initted&&(this._lock=o=1,this.render(wn(_*p),!0).invalidate()._lock=0))}if(!this._initted){if(Qg(this,h?i:u,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=T=(y||this._ease)(u/c),this._from&&(this.ratio=T=1-T),!a&&f&&!s&&!m&&(Bi(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(T,d.d),d=d._next;A&&A.render(i<0?i:A._dur*A._ease(u/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&pp(this,i,s,o),Bi(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!s&&this.parent&&Bi(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&pp(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Ls(this,1),!s&&!(h&&!a)&&(f||a||g)&&(Bi(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){$l||Ti.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Up(this,c),h=this._ease(c/this._dur),Nw(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(Wu(this,0),this.parent||Jg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Hl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Hn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Rs&&Rs.vars.overwrite!==!0)._first||Hl(this),this.parent&&o!==this.timeline.totalDuration()&&xa(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?er(i):a,c=this._ptLookup,h=this._pt,f,u,d,p,_,m,g;if((!s||s==="all")&&uw(a,l))return s==="all"&&(this._pt=0),Hl(this);for(f=this._op=this._op||[],s!=="all"&&(Pn(s)&&(_={},di(s,function(T){return _[T]=1}),s=_),s=Uw(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){u=c[g],s==="all"?(f[g]=s,p=u,d={}):(d=f[g]=f[g]||{},p=s);for(_ in p)m=u&&u[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Gu(this,m,"_pt"),delete u[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&Hl(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return ql(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return ql(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return on.killTweensOf(i,s,o)},t})(Kl);ki(yn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});di("staggerTo,staggerFrom,staggerFromTo",function(r){yn[r]=function(){var t=new Gn,e=gp.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Fp=function(t,e,n){return t[e]=n},m_=function(t,e,n){return t[e](n)},Ow=function(t,e,n,i){return t[e](i.fp,n)},Bw=function(t,e,n){return t.setAttribute(e,n)},Xu=function(t,e){return un(t[e])?m_:ku(t[e])&&t.setAttribute?Bw:Fp},g_=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},zw=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Op=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Bp=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},kw=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},Vw=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Gu(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Gw=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},zp=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},pi=(function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||g_,this.d=l||this,this.set=c||Fp,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Gw,this.m=n,this.mt=s,this.tween=i},r})();di(Ep+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Ap[r]=1});zi.TweenMax=zi.TweenLite=yn;zi.TimelineLite=zi.TimelineMax=Gn;on=new Gn({sortChildren:!1,defaults:ma,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ei.stringFilter=Ip;var io=[],Nu={},Hw=[],Og=0,Ww=0,lp=function(t){return(Nu[t]||Hw).map(function(e){return e()})},vp=function(){var t=Date.now(),e=[];t-Og>2&&(lp("matchMediaInit"),io.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Nr.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),lp("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Og=t,lp("matchMedia"))},__=(function(){function r(e,n){this.selector=n&&_p(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Ww++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){un(n)&&(s=i,i=n,n=un);var o=this,a=function(){var c=rn,h=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=_p(s)),rn=o,f=i.apply(o,arguments),un(f)&&o._r.push(f),rn=c,o.selector=h,o.isReverted=!1,f};return o.last=a,n===un?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=rn;rn=null,n(this),rn=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof yn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Gn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof yn)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=io.length;o--;)io[o].id===this.id&&io.splice(o,1)},t.revert=function(n){this.kill(n||{})},r})(),Xw=(function(){function r(e){this.contexts=[],this.scope=e,rn&&rn.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Fr(n)||(n={matches:n});var o=new __(0,s||this.scope),a=o.conditions={},l,c,h;rn&&!o.selector&&(o.selector=rn.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Nr.matchMedia(n[c]),l&&(io.indexOf(o)<0&&io.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(vp):l.addEventListener("change",vp)));return h&&i(o,function(f){return o.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),zu={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return a_(i)})},timeline:function(t){return new Gn(t)},getTweensOf:function(t,e){return on.getTweensOf(t,e)},getProperty:function(t,e,n,i){Pn(t)&&(t=er(t)[0]);var s=Is(t||{}).get,o=n?Zg:Yg;return n==="native"&&(n=""),t&&(e?o((wi[e]&&wi[e].get||s)(t,e,n,i)):function(a,l,c){return o((wi[a]&&wi[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=er(t),t.length>1){var i=t.map(function(h){return ni.quickSetter(h,e,n)}),s=i.length;return function(h){for(var f=s;f--;)i[f](h)}}t=t[0]||{};var o=wi[e],a=Is(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var f=new o;pa._pt=0,f.init(t,n?h+n:h,pa,0,[t]),f.render(1,f),pa._pt&&Bp(1,pa)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=ni.to(t,ki((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return on.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=no(t.ease,ma.ease)),Lg(ma,t||{})},config:function(t){return Lg(Ei,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!wi[a]&&!zi[a]&&Zl(e+" effect requires "+a+" plugin.")}),rp[e]=function(a,l,c){return n(er(a),ki(l||{},s),c)},o&&(Gn.prototype[e]=function(a,l,c){return this.add(rp[e](a,Fr(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Ee[t]=no(e)},parseEase:function(t,e){return arguments.length?no(t,e):Ee},getById:function(t){return on.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Gn(t),i,s;for(n.smoothChildTiming=Ai(t.smoothChildTiming),on.remove(n),n._dp=0,n._time=n._tTime=on._time,i=on._first;i;)s=i._next,(e||!(!i._dur&&i instanceof yn&&i.vars.onComplete===i._targets[0]))&&Ur(n,i,i._start-i._delay),i=s;return Ur(on,n,0),n},context:function(t,e){return t?new __(t,e):rn},matchMedia:function(t){return new Xw(t)},matchMediaRefresh:function(){return io.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||vp()},addEventListener:function(t,e){var n=Nu[t]||(Nu[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Nu[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:bw,wrapYoyo:ww,distribute:e_,random:i_,snap:n_,normalize:Mw,getUnit:Wn,clamp:xw,splitColor:l_,toArray:er,selector:_p,mapRange:s_,pipe:vw,unitize:Sw,interpolate:Tw,shuffle:t_},install:Hg,effects:rp,ticker:Ti,updateRoot:Gn.updateRoot,plugins:wi,globalTimeline:on,core:{PropTween:pi,globals:Wg,Tween:yn,Timeline:Gn,Animation:Kl,getCache:Is,_removeLinkedListItem:Gu,reverting:function(){return Hn},context:function(t){return t&&rn&&(rn.data.push(t),t._ctx=rn),rn},suppressOverwrites:function(t){return Sp=t}}};di("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return zu[r]=yn[r]});Ti.add(Gn.updateRoot);pa=zu.to({},{duration:0});var qw=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Yw=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=qw(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},cp=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Pn(s)&&(l={},di(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Yw(a,s)}}}},ni=zu.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Hn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},cp("roundProps",xp),cp("modifiers"),cp("snap",n_))||zu;yn.version=Gn.version=ni.version="3.13.0";Gg=1;Mp()&&ya();var Zw=Ee.Power0,Jw=Ee.Power1,$w=Ee.Power2,Kw=Ee.Power3,Qw=Ee.Power4,jw=Ee.Linear,tT=Ee.Quad,eT=Ee.Cubic,nT=Ee.Quart,iT=Ee.Quint,rT=Ee.Strong,sT=Ee.Elastic,oT=Ee.Back,aT=Ee.SteppedEase,lT=Ee.Bounce,cT=Ee.Sine,hT=Ee.Expo,uT=Ee.Circ;var x_,Ns,Ma,Xp,ho,fT,y_,qp,dT=function(){return typeof window<"u"},os={},co=180/Math.PI,ba=Math.PI/180,Sa=Math.atan2,v_=1e8,Yp=/([A-Z])/g,pT=/(left|right|width|margin|padding|x)/i,mT=/[\s,\(]\S/,Or={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Vp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},gT=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},_T=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},xT=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},C_=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},R_=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},yT=function(t,e,n){return t.style[e]=n},vT=function(t,e,n){return t.style.setProperty(e,n)},ST=function(t,e,n){return t._gsap[e]=n},MT=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},bT=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},wT=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},an="transform",Ci=an+"Origin",TT=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in os&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Or[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=ss(i,a)}):this.tfm[t]=o.x?o[t]:ss(i,t),t===Ci&&(this.tfm.zOrigin=o.zOrigin);else return Or.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(an)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ci,e,"")),t=an}(s||e)&&this.props.push(t,e,s[t])},P_=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},AT=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Yp,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=qp(),(!s||!s.isStart)&&!n[an]&&(P_(n),i.zOrigin&&n[Ci]&&(n[Ci]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},I_=function(t,e){var n={target:t,props:[],revert:AT,save:TT};return t._gsap||ni.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},L_,Gp=function(t,e){var n=Ns.createElementNS?Ns.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ns.createElement(t);return n&&n.style?n:Ns.createElement(t)},nr=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Yp,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,wa(e)||e,1)||""},S_="O,Moz,ms,Ms,Webkit".split(","),wa=function(t,e,n){var i=e||ho,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(S_[o]+t in s););return o<0?null:(o===3?"ms":o>=0?S_[o]:"")+t},Hp=function(){dT()&&window.document&&(x_=window,Ns=x_.document,Ma=Ns.documentElement,ho=Gp("div")||{style:{}},fT=Gp("div"),an=wa(an),Ci=an+"Origin",ho.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",L_=!!wa("perspective"),qp=ni.core.reverting,Xp=1)},M_=function(t){var e=t.ownerSVGElement,n=Gp("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ma.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ma.removeChild(n),s},b_=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},D_=function(t){var e,n;try{e=t.getBBox()}catch{e=M_(t),n=1}return e&&(e.width||e.height)||n||(e=M_(t)),e&&!e.width&&!e.x&&!e.y?{x:+b_(t,["x","cx","x1"])||0,y:+b_(t,["y","cy","y1"])||0,width:0,height:0}:e},N_=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&D_(t))},uo=function(t,e){if(e){var n=t.style,i;e in os&&e!==Ci&&(e=an),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Yp,"-$1").toLowerCase())):n.removeAttribute(e)}},Us=function(t,e,n,i,s,o){var a=new pi(t._pt,e,n,0,1,o?R_:C_);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},w_={deg:1,rad:1,turn:1},ET={grid:1,flex:1},Fs=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ho.style,l=pT.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,u=i==="px",d=i==="%",p,_,m,g;if(i===o||!s||w_[i]||w_[o])return s;if(o!=="px"&&!u&&(s=r(t,e,n,"px")),g=t.getCTM&&N_(t),(d||o==="%")&&(os[e]||~e.indexOf("adius")))return p=g?t.getBBox()[l?"width":"height"]:t[h],fn(d?s/p*f:s/100*p);if(a[l?"width":"height"]=f+(u?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Ns||!_.appendChild)&&(_=Ns.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Ti.time&&!m.uncache)return fn(s/m.width*f);if(d&&(e==="height"||e==="width")){var T=t.style[e];t.style[e]=f+i,p=t[h],T?t.style[e]=T:uo(t,e)}else(d||o==="%")&&!ET[nr(_,"display")]&&(a.position=nr(t,"position")),_===t&&(a.position="static"),_.appendChild(ho),p=ho[h],_.removeChild(ho),a.position="absolute";return l&&d&&(m=Is(_),m.time=Ti.time,m.width=_[h]),fn(u?p*s/f:p&&s?f/p*s:0)},ss=function(t,e,n,i){var s;return Xp||Hp(),e in Or&&e!=="transform"&&(e=Or[e],~e.indexOf(",")&&(e=e.split(",")[0])),os[e]&&e!=="transform"?(s=ec(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Yu(nr(t,Ci))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=qu[e]&&qu[e](t,e,n)||nr(t,e)||Rp(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Fs(t,e,s,n)+n:s},CT=function(t,e,n,i){if(!n||n==="none"){var s=wa(e,t,1),o=s&&nr(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=nr(t,"borderTopColor"))}var a=new pi(this._pt,t.style,e,0,1,Op),l=0,c=0,h,f,u,d,p,_,m,g,T,A,y,M;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=nr(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=nr(t,e)||i,_?t.style[e]=_:uo(t,e)),h=[n,i],Ip(h),n=h[0],i=h[1],u=n.match(ro)||[],M=i.match(ro)||[],M.length){for(;f=ro.exec(i);)m=f[0],T=i.substring(l,f.index),p?p=(p+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(p=1),m!==(_=u[c++]||"")&&(d=parseFloat(_)||0,y=_.substr((d+"").length),m.charAt(1)==="="&&(m=so(d,m)+y),g=parseFloat(m),A=m.substr((g+"").length),l=ro.lastIndex-A.length,A||(A=A||Ei.units[e]||y,l===i.length&&(i+=A,a.e+=A)),y!==A&&(d=Fs(t,e,_,A)||0),a._pt={_next:a._pt,p:T||c===1?T:",",s:d,c:g-d,m:p&&p<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?R_:C_;return wp.test(i)&&(a.e=0),this._pt=a,a},T_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},RT=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=T_[n]||n,e[1]=T_[i]||i,e.join(" ")},PT=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],os[a]&&(l=1,a=a==="transformOrigin"?Ci:an),uo(n,a);l&&(uo(n,an),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ec(n,1),o.uncache=1,P_(i)))}},qu={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new pi(t._pt,e,n,0,0,PT);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},tc=[1,0,0,1,0,0],U_={},F_=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},A_=function(t){var e=nr(t,an);return F_(e)?tc:e.substr(7).match(bp).map(fn)},Zp=function(t,e){var n=t._gsap||Is(t),i=t.style,s=A_(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?tc:s):(s===tc&&!t.offsetParent&&t!==Ma&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Ma.appendChild(t)),s=A_(t),l?i.display=l:uo(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Ma.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Wp=function(t,e,n,i,s,o){var a=t._gsap,l=s||Zp(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,f=a.xOffset||0,u=a.yOffset||0,d=l[0],p=l[1],_=l[2],m=l[3],g=l[4],T=l[5],A=e.split(" "),y=parseFloat(A[0])||0,M=parseFloat(A[1])||0,w,C,x,b;n?l!==tc&&(C=d*m-p*_)&&(x=y*(m/C)+M*(-_/C)+(_*T-m*g)/C,b=y*(-p/C)+M*(d/C)-(d*T-p*g)/C,y=x,M=b):(w=D_(t),y=w.x+(~A[0].indexOf("%")?y/100*w.width:y),M=w.y+(~(A[1]||A[0]).indexOf("%")?M/100*w.height:M)),i||i!==!1&&a.smooth?(g=y-c,T=M-h,a.xOffset=f+(g*d+T*_)-g,a.yOffset=u+(g*p+T*m)-T):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=M,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Ci]="0px 0px",o&&(Us(o,a,"xOrigin",c,y),Us(o,a,"yOrigin",h,M),Us(o,a,"xOffset",f,a.xOffset),Us(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+M)},ec=function(t,e){var n=t._gsap||new Lp(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=nr(t,Ci)||"0",h,f,u,d,p,_,m,g,T,A,y,M,w,C,x,b,R,k,L,Y,O,W,et,X,Z,tt,D,st,gt,yt,Et,Bt;return h=f=u=_=m=g=T=A=y=0,d=p=1,n.svg=!!(t.getCTM&&N_(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[an]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[an]!=="none"?l[an]:"")),i.scale=i.rotate=i.translate="none"),C=Zp(t,n.svg),n.svg&&(n.uncache?(Z=t.getBBox(),c=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",X=""):X=!e&&t.getAttribute("data-svg-origin"),Wp(t,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,C)),M=n.xOrigin||0,w=n.yOrigin||0,C!==tc&&(k=C[0],L=C[1],Y=C[2],O=C[3],h=W=C[4],f=et=C[5],C.length===6?(d=Math.sqrt(k*k+L*L),p=Math.sqrt(O*O+Y*Y),_=k||L?Sa(L,k)*co:0,T=Y||O?Sa(Y,O)*co+_:0,T&&(p*=Math.abs(Math.cos(T*ba))),n.svg&&(h-=M-(M*k+w*Y),f-=w-(M*L+w*O))):(Bt=C[6],yt=C[7],D=C[8],st=C[9],gt=C[10],Et=C[11],h=C[12],f=C[13],u=C[14],x=Sa(Bt,gt),m=x*co,x&&(b=Math.cos(-x),R=Math.sin(-x),X=W*b+D*R,Z=et*b+st*R,tt=Bt*b+gt*R,D=W*-R+D*b,st=et*-R+st*b,gt=Bt*-R+gt*b,Et=yt*-R+Et*b,W=X,et=Z,Bt=tt),x=Sa(-Y,gt),g=x*co,x&&(b=Math.cos(-x),R=Math.sin(-x),X=k*b-D*R,Z=L*b-st*R,tt=Y*b-gt*R,Et=O*R+Et*b,k=X,L=Z,Y=tt),x=Sa(L,k),_=x*co,x&&(b=Math.cos(x),R=Math.sin(x),X=k*b+L*R,Z=W*b+et*R,L=L*b-k*R,et=et*b-W*R,k=X,W=Z),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),d=fn(Math.sqrt(k*k+L*L+Y*Y)),p=fn(Math.sqrt(et*et+Bt*Bt)),x=Sa(W,et),T=Math.abs(x)>2e-4?x*co:0,y=Et?1/(Et<0?-Et:Et):0),n.svg&&(X=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!F_(nr(t,an)),X&&t.setAttribute("transform",X))),Math.abs(T)>90&&Math.abs(T)<270&&(s?(d*=-1,T+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,T+=T<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=fn(d),n.scaleY=fn(p),n.rotation=fn(_)+a,n.rotationX=fn(m)+a,n.rotationY=fn(g)+a,n.skewX=T+a,n.skewY=A+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Ci]=Yu(c)),n.xOffset=n.yOffset=0,n.force3D=Ei.force3D,n.renderTransform=n.svg?LT:L_?O_:IT,n.uncache=0,n},Yu=function(t){return(t=t.split(" "))[0]+" "+t[1]},kp=function(t,e,n){var i=Wn(e);return fn(parseFloat(e)+parseFloat(Fs(t,"x",n+"px",i)))+i},IT=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,O_(t,e)},ao="0deg",jl="0px",lo=") ",O_=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,u=n.skewX,d=n.skewY,p=n.scaleX,_=n.scaleY,m=n.transformPerspective,g=n.force3D,T=n.target,A=n.zOrigin,y="",M=g==="auto"&&t&&t!==1||g===!0;if(A&&(f!==ao||h!==ao)){var w=parseFloat(h)*ba,C=Math.sin(w),x=Math.cos(w),b;w=parseFloat(f)*ba,b=Math.cos(w),o=kp(T,o,C*b*-A),a=kp(T,a,-Math.sin(w)*-A),l=kp(T,l,x*b*-A+A)}m!==jl&&(y+="perspective("+m+lo),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(M||o!==jl||a!==jl||l!==jl)&&(y+=l!==jl||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+lo),c!==ao&&(y+="rotate("+c+lo),h!==ao&&(y+="rotateY("+h+lo),f!==ao&&(y+="rotateX("+f+lo),(u!==ao||d!==ao)&&(y+="skew("+u+", "+d+lo),(p!==1||_!==1)&&(y+="scale("+p+", "+_+lo),T.style[an]=y||"translate(0, 0)"},LT=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,u=n.scaleY,d=n.target,p=n.xOrigin,_=n.yOrigin,m=n.xOffset,g=n.yOffset,T=n.forceCSS,A=parseFloat(o),y=parseFloat(a),M,w,C,x,b;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ba,c*=ba,M=Math.cos(l)*f,w=Math.sin(l)*f,C=Math.sin(l-c)*-u,x=Math.cos(l-c)*u,c&&(h*=ba,b=Math.tan(c-h),b=Math.sqrt(1+b*b),C*=b,x*=b,h&&(b=Math.tan(h),b=Math.sqrt(1+b*b),M*=b,w*=b)),M=fn(M),w=fn(w),C=fn(C),x=fn(x)):(M=f,x=u,w=C=0),(A&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(A=Fs(d,"x",o,"px"),y=Fs(d,"y",a,"px")),(p||_||m||g)&&(A=fn(A+p-(p*M+_*C)+m),y=fn(y+_-(p*w+_*x)+g)),(i||s)&&(b=d.getBBox(),A=fn(A+i/100*b.width),y=fn(y+s/100*b.height)),b="matrix("+M+","+w+","+C+","+x+","+A+","+y+")",d.setAttribute("transform",b),T&&(d.style[an]=b)},DT=function(t,e,n,i,s){var o=360,a=Pn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?co:1),c=l-i,h=i+c+"deg",f,u;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*v_)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*v_)%o-~~(c/o)*o)),t._pt=u=new pi(t._pt,e,n,i,c,gT),u.e=h,u.u="deg",t._props.push(n),u},E_=function(t,e){for(var n in e)t[n]=e[n];return t},NT=function(t,e,n){var i=E_({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,f,u,d,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[an]=e,a=ec(n,1),uo(n,an),n.setAttribute("transform",c)):(c=getComputedStyle(n)[an],o[an]=e,a=ec(n,1),o[an]=c);for(l in os)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(d=Wn(c),p=Wn(h),f=d!==p?Fs(n,l,c,p):parseFloat(c),u=parseFloat(h),t._pt=new pi(t._pt,a,l,f,u-f,Vp),t._pt.u=p||0,t._props.push(l));E_(a,i)};di("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});qu[t>1?"border"+r:r]=function(a,l,c,h,f){var u,d;if(arguments.length<4)return u=o.map(function(p){return ss(a,p,c)}),d=u.join(" "),d.split(u[0]).length===5?u[0]:d;u=(h+"").split(" "),d={},o.forEach(function(p,_){return d[p]=u[_]=u[_]||u[(_-1)/2|0]}),a.init(l,d,f)}});var Jp={name:"css",register:Hp,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,f,u,d,p,_,m,g,T,A,y,M,w,C,x;Xp||Hp(),this.styles=this.styles||I_(t),x=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(wi[_]&&Np(_,e,n,i,t,s)))){if(d=typeof h,p=qu[_],d==="function"&&(h=h.call(n,i,t,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=va(h)),p)p(this,t,_,h,n)&&(C=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",is.lastIndex=0,is.test(c)||(m=Wn(c),g=Wn(h)),g?m!==g&&(c=Fs(t,_,c,g)+g):m&&(h+=m),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),x.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],Pn(c)&&~c.indexOf("random(")&&(c=va(c)),Wn(c+"")||c==="auto"||(c+=Ei.units[_]||Wn(ss(t,_))||""),(c+"").charAt(1)==="="&&(c=ss(t,_))):c=ss(t,_),u=parseFloat(c),T=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),T&&(h=h.substr(2)),f=parseFloat(h),_ in Or&&(_==="autoAlpha"&&(u===1&&ss(t,"visibility")==="hidden"&&f&&(u=0),x.push("visibility",0,a.visibility),Us(this,a,"visibility",u?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Or[_],~_.indexOf(",")&&(_=_.split(",")[0]))),A=_ in os,A){if(this.styles.save(_),d==="string"&&h.substring(0,6)==="var(--"&&(h=nr(t,h.substring(4,h.indexOf(")"))),f=parseFloat(h)),y||(M=t._gsap,M.renderTransform&&!e.parseTransform||ec(t,e.parseTransform),w=e.smoothOrigin!==!1&&M.smooth,y=this._pt=new pi(this._pt,a,an,0,1,M.renderTransform,M,0,-1),y.dep=1),_==="scale")this._pt=new pi(this._pt,M,"scaleY",M.scaleY,(T?so(M.scaleY,T+f):f)-M.scaleY||0,Vp),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(Ci,0,a[Ci]),h=RT(h),M.svg?Wp(t,h,0,w,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==M.zOrigin&&Us(this,M,"zOrigin",M.zOrigin,g),Us(this,a,_,Yu(c),Yu(h)));continue}else if(_==="svgOrigin"){Wp(t,h,1,w,0,this);continue}else if(_ in U_){DT(this,M,_,u,T?so(u,T+h):h);continue}else if(_==="smoothOrigin"){Us(this,M,"smooth",M.smooth,h);continue}else if(_==="force3D"){M[_]=h;continue}else if(_==="transform"){NT(this,h,t);continue}}else _ in a||(_=wa(_)||_);if(A||(f||f===0)&&(u||u===0)&&!mT.test(h)&&_ in a)m=(c+"").substr((u+"").length),f||(f=0),g=Wn(h)||(_ in Ei.units?Ei.units[_]:m),m!==g&&(u=Fs(t,_,c,g)),this._pt=new pi(this._pt,A?M:a,_,u,(T?so(u,T+f):f)-u,!A&&(g==="px"||_==="zIndex")&&e.autoRound!==!1?xT:Vp),this._pt.u=g||0,m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=_T);else if(_ in a)CT.call(this,t,_,c,T?T+h:h);else if(_ in t)this.add(t,_,c||t[_],T?T+h:h,i,s);else if(_!=="parseTransform"){Vu(_,h);continue}A||(_ in a?x.push(_,0,a[_]):typeof t[_]=="function"?x.push(_,2,t[_]()):x.push(_,1,c||t[_])),o.push(_)}}C&&zp(this)},render:function(t,e){if(e.tween._time||!qp())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ss,aliases:Or,getSetter:function(t,e,n){var i=Or[e];return i&&i.indexOf(",")<0&&(e=i),e in os&&e!==Ci&&(t._gsap.x||ss(t,"x"))?n&&y_===n?e==="scale"?MT:ST:(y_=n||{})&&(e==="scale"?bT:wT):t.style&&!ku(t.style[e])?yT:~e.indexOf("-")?vT:Xu(t,e)},core:{_removeProperty:uo,_getMatrix:Zp}};ni.utils.checkPrefix=wa;ni.core.getStyleSaver=I_;(function(r,t,e,n){var i=di(r+","+t+","+e,function(s){os[s]=1});di(t,function(s){Ei.units[s]="deg",U_[s]=1}),Or[i[13]]=r+","+t,di(n,function(s){var o=s.split(":");Or[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");di("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Ei.units[r]="px"});ni.registerPlugin(Jp);var nc=ni.registerPlugin(Jp)||ni,V3=nc.core.Tween;function B_(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function UT(r,t,e){return t&&B_(r.prototype,t),e&&B_(r,e),r}var Xn,$u,FT,Vi,Os,Bs,Aa,k_,fo,rc,V_,as,_r,G_,H_=function(){return Xn||typeof window<"u"&&(Xn=window.gsap)&&Xn.registerPlugin&&Xn},W_=1,Ta=[],ve=[],xr=[],sc=Date.now,$p=function(t,e){return e},OT=function(){var t=rc.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ve),i.push.apply(i,xr),ve=n,xr=i,$p=function(o,a){return e[o](a)}},cs=function(t,e){return~xr.indexOf(t)&&xr[xr.indexOf(t)+1][e]},oc=function(t){return!!~V_.indexOf(t)},gi=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},mi=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Zu="scrollLeft",Ju="scrollTop",Kp=function(){return as&&as.isPressed||ve.cache++},Ku=function(t,e){var n=function i(s){if(s||s===0){W_&&(Vi.history.scrollRestoration="manual");var o=as&&as.isPressed;s=i.v=Math.round(s)||(as&&as.iOS?1:0),t(s),i.cacheID=ve.cache,o&&$p("ss",s)}else(e||ve.cache!==i.cacheID||$p("ref"))&&(i.cacheID=ve.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},ii={s:Zu,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ku(function(r){return arguments.length?Vi.scrollTo(r,Tn.sc()):Vi.pageXOffset||Os[Zu]||Bs[Zu]||Aa[Zu]||0})},Tn={s:Ju,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ii,sc:Ku(function(r){return arguments.length?Vi.scrollTo(ii.sc(),r):Vi.pageYOffset||Os[Ju]||Bs[Ju]||Aa[Ju]||0})},_i=function(t,e){return(e&&e._ctx&&e._ctx.selector||Xn.utils.toArray)(t)[0]||(typeof t=="string"&&Xn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},BT=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},ls=function(t,e){var n=e.s,i=e.sc;oc(t)&&(t=Os.scrollingElement||Bs);var s=ve.indexOf(t),o=i===Tn.sc?1:2;!~s&&(s=ve.push(t)-1),ve[s+o]||gi(t,"scroll",Kp);var a=ve[s+o],l=a||(ve[s+o]=Ku(cs(t,n),!0)||(oc(t)?i:Ku(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=Xn.getProperty(t,"scrollBehavior")==="smooth"),l},Qu=function(t,e,n){var i=t,s=t,o=sc(),a=o,l=e||50,c=Math.max(500,l*3),h=function(p,_){var m=sc();_||m-o>l?(s=i,i=p,a=o,o=m):n?i+=p:i=s+(p-s)/(m-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},u=function(p){var _=a,m=s,g=sc();return(p||p===0)&&p!==i&&h(p),o===a||g-a>c?0:(i+(n?m:-m))/((n?g:o)-_)*1e3};return{update:h,reset:f,getVelocity:u}},ic=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},z_=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},X_=function(){rc=Xn.core.globals().ScrollTrigger,rc&&rc.core&&OT()},q_=function(t){return Xn=t||H_(),!$u&&Xn&&typeof document<"u"&&document.body&&(Vi=window,Os=document,Bs=Os.documentElement,Aa=Os.body,V_=[Vi,Os,Bs,Aa],FT=Xn.utils.clamp,G_=Xn.core.context||function(){},fo="onpointerenter"in Aa?"pointer":"mouse",k_=dn.isTouch=Vi.matchMedia&&Vi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Vi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,_r=dn.eventTypes=("ontouchstart"in Bs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Bs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return W_=0},500),X_(),$u=1),$u};ii.op=Tn;ve.cache=0;var dn=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){$u||q_(Xn)||console.warn("Please gsap.registerPlugin(Observer)"),rc||X_();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,f=n.onStop,u=n.onStopDelay,d=n.ignore,p=n.wheelSpeed,_=n.event,m=n.onDragStart,g=n.onDragEnd,T=n.onDrag,A=n.onPress,y=n.onRelease,M=n.onRight,w=n.onLeft,C=n.onUp,x=n.onDown,b=n.onChangeX,R=n.onChangeY,k=n.onChange,L=n.onToggleX,Y=n.onToggleY,O=n.onHover,W=n.onHoverEnd,et=n.onMove,X=n.ignoreCheck,Z=n.isNormalizer,tt=n.onGestureStart,D=n.onGestureEnd,st=n.onWheel,gt=n.onEnable,yt=n.onDisable,Et=n.onClick,Bt=n.scrollSpeed,Lt=n.capture,z=n.allowClicks,B=n.lockAxis,F=n.onLockAxis;this.target=a=_i(a)||Bs,this.vars=n,d&&(d=Xn.utils.toArray(d)),i=i||1e-9,s=s||0,p=p||1,Bt=Bt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Vi.getComputedStyle(Aa).lineHeight)||22);var N,V,rt,ht,I,q,H,P=this,it=0,ut=0,St=n.passive||!h&&n.passive!==!1,Q=ls(a,ii),J=ls(a,Tn),S=Q(),At=J(),Dt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&_r[0]==="pointerdown",U=oc(a),v=a.ownerDocument||Os,K=[0,0,0],nt=[0,0,0],ft=0,wt=function(){return ft=sc()},bt=function(Mt,te){return(P.event=Mt)&&d&&BT(Mt.target,d)||te&&Dt&&Mt.pointerType!=="touch"||X&&X(Mt,te)},dt=function(){P._vx.reset(),P._vy.reset(),V.pause(),f&&f(P)},pt=function(){var Mt=P.deltaX=z_(K),te=P.deltaY=z_(nt),Tt=Math.abs(Mt)>=i,ee=Math.abs(te)>=i;k&&(Tt||ee)&&k(P,Mt,te,K,nt),Tt&&(M&&P.deltaX>0&&M(P),w&&P.deltaX<0&&w(P),b&&b(P),L&&P.deltaX<0!=it<0&&L(P),it=P.deltaX,K[0]=K[1]=K[2]=0),ee&&(x&&P.deltaY>0&&x(P),C&&P.deltaY<0&&C(P),R&&R(P),Y&&P.deltaY<0!=ut<0&&Y(P),ut=P.deltaY,nt[0]=nt[1]=nt[2]=0),(ht||rt)&&(et&&et(P),rt&&(m&&rt===1&&m(P),T&&T(P),rt=0),ht=!1),q&&!(q=!1)&&F&&F(P),I&&(st(P),I=!1),N=0},It=function(Mt,te,Tt){K[Tt]+=Mt,nt[Tt]+=te,P._vx.update(Mt),P._vy.update(te),c?N||(N=requestAnimationFrame(pt)):pt()},Wt=function(Mt,te){B&&!H&&(P.axis=H=Math.abs(Mt)>Math.abs(te)?"x":"y",q=!0),H!=="y"&&(K[2]+=Mt,P._vx.update(Mt,!0)),H!=="x"&&(nt[2]+=te,P._vy.update(te,!0)),c?N||(N=requestAnimationFrame(pt)):pt()},Nt=function(Mt){if(!bt(Mt,1)){Mt=ic(Mt,h);var te=Mt.clientX,Tt=Mt.clientY,ee=te-P.x,Yt=Tt-P.y,ae=P.isDragging;P.x=te,P.y=Tt,(ae||(ee||Yt)&&(Math.abs(P.startX-te)>=s||Math.abs(P.startY-Tt)>=s))&&(rt=ae?2:1,ae||(P.isDragging=!0),Wt(ee,Yt))}},Ut=P.onPress=function(Rt){bt(Rt,1)||Rt&&Rt.button||(P.axis=H=null,V.pause(),P.isPressed=!0,Rt=ic(Rt),it=ut=0,P.startX=P.x=Rt.clientX,P.startY=P.y=Rt.clientY,P._vx.reset(),P._vy.reset(),gi(Z?a:v,_r[1],Nt,St,!0),P.deltaX=P.deltaY=0,A&&A(P))},Ct=P.onRelease=function(Rt){if(!bt(Rt,1)){mi(Z?a:v,_r[1],Nt,!0);var Mt=!isNaN(P.y-P.startY),te=P.isDragging,Tt=te&&(Math.abs(P.x-P.startX)>3||Math.abs(P.y-P.startY)>3),ee=ic(Rt);!Tt&&Mt&&(P._vx.reset(),P._vy.reset(),h&&z&&Xn.delayedCall(.08,function(){if(sc()-ft>300&&!Rt.defaultPrevented){if(Rt.target.click)Rt.target.click();else if(v.createEvent){var Yt=v.createEvent("MouseEvents");Yt.initMouseEvent("click",!0,!0,Vi,1,ee.screenX,ee.screenY,ee.clientX,ee.clientY,!1,!1,!1,!1,0,null),Rt.target.dispatchEvent(Yt)}}})),P.isDragging=P.isGesturing=P.isPressed=!1,f&&te&&!Z&&V.restart(!0),rt&&pt(),g&&te&&g(P),y&&y(P,Tt)}},Qt=function(Mt){return Mt.touches&&Mt.touches.length>1&&(P.isGesturing=!0)&&tt(Mt,P.isDragging)},ne=function(){return(P.isGesturing=!1)||D(P)},j=function(Mt){if(!bt(Mt)){var te=Q(),Tt=J();It((te-S)*Bt,(Tt-At)*Bt,1),S=te,At=Tt,f&&V.restart(!0)}},Ft=function(Mt){if(!bt(Mt)){Mt=ic(Mt,h),st&&(I=!0);var te=(Mt.deltaMode===1?l:Mt.deltaMode===2?Vi.innerHeight:1)*p;It(Mt.deltaX*te,Mt.deltaY*te,0),f&&!Z&&V.restart(!0)}},mt=function(Mt){if(!bt(Mt)){var te=Mt.clientX,Tt=Mt.clientY,ee=te-P.x,Yt=Tt-P.y;P.x=te,P.y=Tt,ht=!0,f&&V.restart(!0),(ee||Yt)&&Wt(ee,Yt)}},Ot=function(Mt){P.event=Mt,O(P)},zt=function(Mt){P.event=Mt,W(P)},_t=function(Mt){return bt(Mt)||ic(Mt,h)&&Et(P)};V=P._dc=Xn.delayedCall(u||.25,dt).pause(),P.deltaX=P.deltaY=0,P._vx=Qu(0,50,!0),P._vy=Qu(0,50,!0),P.scrollX=Q,P.scrollY=J,P.isDragging=P.isGesturing=P.isPressed=!1,G_(this),P.enable=function(Rt){return P.isEnabled||(gi(U?v:a,"scroll",Kp),o.indexOf("scroll")>=0&&gi(U?v:a,"scroll",j,St,Lt),o.indexOf("wheel")>=0&&gi(a,"wheel",Ft,St,Lt),(o.indexOf("touch")>=0&&k_||o.indexOf("pointer")>=0)&&(gi(a,_r[0],Ut,St,Lt),gi(v,_r[2],Ct),gi(v,_r[3],Ct),z&&gi(a,"click",wt,!0,!0),Et&&gi(a,"click",_t),tt&&gi(v,"gesturestart",Qt),D&&gi(v,"gestureend",ne),O&&gi(a,fo+"enter",Ot),W&&gi(a,fo+"leave",zt),et&&gi(a,fo+"move",mt)),P.isEnabled=!0,P.isDragging=P.isGesturing=P.isPressed=ht=rt=!1,P._vx.reset(),P._vy.reset(),S=Q(),At=J(),Rt&&Rt.type&&Ut(Rt),gt&&gt(P)),P},P.disable=function(){P.isEnabled&&(Ta.filter(function(Rt){return Rt!==P&&oc(Rt.target)}).length||mi(U?v:a,"scroll",Kp),P.isPressed&&(P._vx.reset(),P._vy.reset(),mi(Z?a:v,_r[1],Nt,!0)),mi(U?v:a,"scroll",j,Lt),mi(a,"wheel",Ft,Lt),mi(a,_r[0],Ut,Lt),mi(v,_r[2],Ct),mi(v,_r[3],Ct),mi(a,"click",wt,!0),mi(a,"click",_t),mi(v,"gesturestart",Qt),mi(v,"gestureend",ne),mi(a,fo+"enter",Ot),mi(a,fo+"leave",zt),mi(a,fo+"move",mt),P.isEnabled=P.isPressed=P.isDragging=!1,yt&&yt(P))},P.kill=P.revert=function(){P.disable();var Rt=Ta.indexOf(P);Rt>=0&&Ta.splice(Rt,1),as===P&&(as=0)},Ta.push(P),Z&&oc(a)&&(as=P),P.enable(_)},UT(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();dn.version="3.13.0";dn.create=function(r){return new dn(r)};dn.register=q_;dn.getAll=function(){return Ta.slice()};dn.getById=function(r){return Ta.filter(function(t){return t.vars.id===r})[0]};H_()&&Xn.registerPlugin(dn);var Jt,Ra,Me,Ke,Wi,ze,fm,mf,yc,dc,lc,ju,ri,yf,sm,yi,Y_,Z_,Pa,hx,Qp,ux,xi,om,fx,dx,zs,am,dm,Ia,pm,gf,lm,jp,tf=1,si=Date.now,tm=si(),sr=0,cc=0,J_=function(t,e,n){var i=Hi(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},$_=function(t,e){return e&&(!Hi(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},zT=function r(){return cc&&requestAnimationFrame(r)},K_=function(){return yf=1},Q_=function(){return yf=0},Br=function(t){return t},hc=function(t){return Math.round(t*1e5)/1e5||0},px=function(){return typeof window<"u"},mx=function(){return Jt||px()&&(Jt=window.gsap)&&Jt.registerPlugin&&Jt},yo=function(t){return!!~fm.indexOf(t)},gx=function(t){return(t==="Height"?pm:Me["inner"+t])||Wi["client"+t]||ze["client"+t]},_x=function(t){return cs(t,"getBoundingClientRect")||(yo(t)?function(){return pf.width=Me.innerWidth,pf.height=pm,pf}:function(){return hs(t)})},kT=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=cs(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?gx(s):t["client"+s])||0}},VT=function(t,e){return!e||~xr.indexOf(t)?_x(t):function(){return pf}},zr=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=cs(t,n))?o()-_x(t)()[s]:yo(t)?(Wi[n]||ze[n])-gx(i):t[n]-t["offset"+i])},ef=function(t,e){for(var n=0;n<Pa.length;n+=3)(!e||~e.indexOf(Pa[n+1]))&&t(Pa[n],Pa[n+1],Pa[n+2])},Hi=function(t){return typeof t=="string"},oi=function(t){return typeof t=="function"},uc=function(t){return typeof t=="number"},po=function(t){return typeof t=="object"},ac=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},em=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},Ea=Math.abs,xx="left",yx="top",mm="right",gm="bottom",go="width",_o="height",pc="Right",mc="Left",gc="Top",_c="Bottom",An="padding",ir="margin",Da="Width",_m="Height",In="px",rr=function(t){return Me.getComputedStyle(t)},GT=function(t){var e=rr(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},j_=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},hs=function(t,e){var n=e&&rr(t)[sm]!=="matrix(1, 0, 0, 1, 0, 0)"&&Jt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},_f=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},vx=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},HT=function(t){return function(e){return Jt.utils.snap(vx(t),e)}},xm=function(t){var e=Jt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},WT=function(t){return function(e,n){return xm(vx(t))(e,n.direction)}},nf=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},On=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},Fn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},rf=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},tx={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},sf={toggleActions:"play",anticipatePin:0},xf={top:0,left:0,center:.5,bottom:1,right:1},hf=function(t,e){if(Hi(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in xf?xf[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},of=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,f=s.fontSize,u=s.indent,d=s.fontWeight,p=Ke.createElement("div"),_=yo(n)||cs(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,g=_?ze:n,T=t.indexOf("start")!==-1,A=T?c:h,y="border-color:"+A+";font-size:"+f+";color:"+A+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(y+=(i===Tn?mm:gm)+":"+(o+parseFloat(u))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=T,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=y,p.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+i.op.d2],uf(p,0,i,T),p},uf=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Da]=1,s["border"+a+Da]=0,s[n.p]=e+"px",Jt.set(t,s)},Se=[],cm={},vc,ex=function(){return si()-sr>34&&(vc||(vc=requestAnimationFrame(us)))},Ca=function(){(!xi||!xi.isPressed||xi.startX>ze.clientWidth)&&(ve.cache++,xi?vc||(vc=requestAnimationFrame(us)):us(),sr||So("scrollStart"),sr=si())},nm=function(){dx=Me.innerWidth,fx=Me.innerHeight},fc=function(t){ve.cache++,(t===!0||!ri&&!ux&&!Ke.fullscreenElement&&!Ke.webkitFullscreenElement&&(!om||dx!==Me.innerWidth||Math.abs(Me.innerHeight-fx)>Me.innerHeight*.25))&&mf.restart(!0)},vo={},XT=[],Sx=function r(){return Fn(ue,"scrollEnd",r)||mo(!0)},So=function(t){return vo[t]&&vo[t].map(function(e){return e()})||XT},Gi=[],Mx=function(t){for(var e=0;e<Gi.length;e+=5)(!t||Gi[e+4]&&Gi[e+4].query===t)&&(Gi[e].style.cssText=Gi[e+1],Gi[e].getBBox&&Gi[e].setAttribute("transform",Gi[e+2]||""),Gi[e+3].uncache=1)},ym=function(t,e){var n;for(yi=0;yi<Se.length;yi++)n=Se[yi],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));gf=!0,e&&Mx(e),e||So("revert")},bx=function(t,e){ve.cache++,(e||!vi)&&ve.forEach(function(n){return oi(n)&&n.cacheID++&&(n.rec=0)}),Hi(t)&&(Me.history.scrollRestoration=dm=t)},vi,xo=0,nx,qT=function(){if(nx!==xo){var t=nx=xo;requestAnimationFrame(function(){return t===xo&&mo(!0)})}},wx=function(){ze.appendChild(Ia),pm=!xi&&Ia.offsetHeight||Me.innerHeight,ze.removeChild(Ia)},ix=function(t){return yc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},mo=function(t,e){if(Wi=Ke.documentElement,ze=Ke.body,fm=[Me,Ke,Wi,ze],sr&&!t&&!gf){On(ue,"scrollEnd",Sx);return}wx(),vi=ue.isRefreshing=!0,ve.forEach(function(i){return oi(i)&&++i.cacheID&&(i.rec=i())});var n=So("refreshInit");hx&&ue.sort(),e||ym(),ve.forEach(function(i){oi(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Se.slice(0).forEach(function(i){return i.refresh()}),gf=!1,Se.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),lm=1,ix(!0),Se.forEach(function(i){var s=zr(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),ix(!1),lm=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ve.forEach(function(i){oi(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),bx(dm,1),mf.pause(),xo++,vi=2,us(2),Se.forEach(function(i){return oi(i.vars.onRefresh)&&i.vars.onRefresh(i)}),vi=ue.isRefreshing=!1,So("refresh")},hm=0,ff=1,xc,us=function(t){if(t===2||!vi&&!gf){ue.isUpdating=!0,xc&&xc.update(0);var e=Se.length,n=si(),i=n-tm>=50,s=e&&Se[0].scroll();if(ff=hm>s?-1:1,vi||(hm=s),i&&(sr&&!yf&&n-sr>200&&(sr=0,So("scrollEnd")),lc=tm,tm=n),ff<0){for(yi=e;yi-- >0;)Se[yi]&&Se[yi].update(0,i);ff=1}else for(yi=0;yi<e;yi++)Se[yi]&&Se[yi].update(0,i);ue.isUpdating=!1}vc=0},um=[xx,yx,gm,mm,ir+_c,ir+pc,ir+gc,ir+mc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],df=um.concat([go,_o,"boxSizing","max"+Da,"max"+_m,"position",ir,An,An+gc,An+pc,An+_c,An+mc]),YT=function(t,e,n){La(n);var i=t._gsap;if(i.spacerIsNative)La(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},im=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=um.length,o=e.style,a=t.style,l;s--;)l=um[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[gm]=a[mm]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[go]=_f(t,ii)+In,o[_o]=_f(t,Tn)+In,o[An]=a[ir]=a[yx]=a[xx]="0",La(i),a[go]=a["max"+Da]=n[go],a[_o]=a["max"+_m]=n[_o],a[An]=n[An],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},ZT=/([A-Z])/g,La=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||Jt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(ZT,"-$1").toLowerCase())}},af=function(t){for(var e=df.length,n=t.style,i=[],s=0;s<e;s++)i.push(df[s],n[df[s]]);return i.t=t,i},JT=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},pf={left:0,top:0},rx=function(t,e,n,i,s,o,a,l,c,h,f,u,d,p){oi(t)&&(t=t(l)),Hi(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?hf("0"+t.substr(3),n):0));var _=d?d.time():0,m,g,T;if(d&&d.seek(0),isNaN(t)||(t=+t),uc(t))d&&(t=Jt.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,u,t)),a&&uf(a,n,i,!0);else{oi(e)&&(e=e(l));var A=(t||"0").split(" "),y,M,w,C;T=_i(e,l)||ze,y=hs(T)||{},(!y||!y.left&&!y.top)&&rr(T).display==="none"&&(C=T.style.display,T.style.display="block",y=hs(T),C?T.style.display=C:T.style.removeProperty("display")),M=hf(A[0],y[i.d]),w=hf(A[1]||"0",n),t=y[i.p]-c[i.p]-h+M+s-w,a&&uf(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(p&&(l[p]=t||-.001,t<0&&(t=0)),o){var x=t+n,b=o._isStart;m="scroll"+i.d2,uf(o,x,i,b&&x>20||!b&&(f?Math.max(ze[m],Wi[m]):o.parentNode[m])<=x+1),f&&(c=hs(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+In))}return d&&T&&(m=hs(T),d.seek(u),g=hs(T),d._caScrollDist=m[i.p]-g[i.p],t=t/d._caScrollDist*u),d&&d.seek(_),d?t:Math.round(t)},$T=/(webkit|moz|length|cssText|inset)/i,sx=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===ze){t._stOrig=s.cssText,a=rr(t);for(o in a)!+o&&!$T.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;Jt.core.getCache(t).uncache=1,e.appendChild(t)}},Tx=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},lf=function(t,e,n){var i={};i[e.p]="+="+n,Jt.set(t,i)},ox=function(t,e){var n=ls(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,f){var u=o.tween,d=l.onComplete,p={};c=c||n();var _=Tx(n,c,function(){u.kill(),o.tween=0});return f=h&&f||0,h=h||a-c,u&&u.kill(),l[i]=a,l.inherit=!1,l.modifiers=p,p[i]=function(){return _(c+h*u.ratio+f*u.ratio*u.ratio)},l.onUpdate=function(){ve.cache++,o.tween&&us()},l.onComplete=function(){o.tween=0,d&&d.call(u)},u=o.tween=Jt.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},On(t,"wheel",n.wheelHandler),ue.isTouch&&On(t,"touchmove",n.wheelHandler),s},ue=(function(){function r(e,n){Ra||r.register(Jt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),am(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!cc){this.update=this.refresh=this.kill=Br;return}n=j_(Hi(n)||uc(n)||n.nodeType?{trigger:n}:n,sf);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,f=s.scrub,u=s.trigger,d=s.pin,p=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,g=s.onScrubComplete,T=s.onSnapComplete,A=s.once,y=s.snap,M=s.pinReparent,w=s.pinSpacer,C=s.containerAnimation,x=s.fastScrollEnd,b=s.preventOverlaps,R=n.horizontal||n.containerAnimation&&n.horizontal!==!1?ii:Tn,k=!f&&f!==0,L=_i(n.scroller||Me),Y=Jt.core.getCache(L),O=yo(L),W=("pinType"in n?n.pinType:cs(L,"pinType")||O&&"fixed")==="fixed",et=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=k&&n.toggleActions.split(" "),Z="markers"in n?n.markers:sf.markers,tt=O?0:parseFloat(rr(L)["border"+R.p2+Da])||0,D=this,st=n.onRefreshInit&&function(){return n.onRefreshInit(D)},gt=kT(L,O,R),yt=VT(L,O),Et=0,Bt=0,Lt=0,z=ls(L,R),B,F,N,V,rt,ht,I,q,H,P,it,ut,St,Q,J,S,At,Dt,U,v,K,nt,ft,wt,bt,dt,pt,It,Wt,Nt,Ut,Ct,Qt,ne,j,Ft,mt,Ot,zt;if(D._startClamp=D._endClamp=!1,D._dir=R,m*=45,D.scroller=L,D.scroll=C?C.time.bind(C):z,V=z(),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(hx=1,n.refreshPriority===-9999&&(xc=D)),Y.tweenScroll=Y.tweenScroll||{top:ox(L,Tn),left:ox(L,ii)},D.tweenTo=B=Y.tweenScroll[R.p],D.scrubDuration=function(Tt){Qt=uc(Tt)&&Tt,Qt?Ct?Ct.duration(Tt):Ct=Jt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Qt,paused:!0,onComplete:function(){return g&&g(D)}}):(Ct&&Ct.progress(1).kill(),Ct=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(f),Nt=0,l||(l=i.vars.id)),y&&((!po(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in ze.style&&Jt.set(O?[ze,Wi]:L,{scrollBehavior:"auto"}),ve.forEach(function(Tt){return oi(Tt)&&Tt.target===(O?Ke.scrollingElement||Wi:L)&&(Tt.smooth=!1)}),N=oi(y.snapTo)?y.snapTo:y.snapTo==="labels"?HT(i):y.snapTo==="labelsDirectional"?WT(i):y.directional!==!1?function(Tt,ee){return xm(y.snapTo)(Tt,si()-Bt<500?0:ee.direction)}:Jt.utils.snap(y.snapTo),ne=y.duration||{min:.1,max:2},ne=po(ne)?dc(ne.min,ne.max):dc(ne,ne),j=Jt.delayedCall(y.delay||Qt/2||.1,function(){var Tt=z(),ee=si()-Bt<500,Yt=B.tween;if((ee||Math.abs(D.getVelocity())<10)&&!Yt&&!yf&&Et!==Tt){var ae=(Tt-ht)/Q,ie=i&&!k?i.totalProgress():ae,pe=ee?0:(ie-Ut)/(si()-lc)*1e3||0,ke=Jt.utils.clamp(-ae,1-ae,Ea(pe/2)*pe/.185),Qe=ae+(y.inertia===!1?0:ke),Le,Fe,_e=y,Xe=_e.onStart,Pe=_e.onInterrupt,ln=_e.onComplete;if(Le=N(Qe,D),uc(Le)||(Le=Qe),Fe=Math.max(0,Math.round(ht+Le*Q)),Tt<=I&&Tt>=ht&&Fe!==Tt){if(Yt&&!Yt._initted&&Yt.data<=Ea(Fe-Tt))return;y.inertia===!1&&(ke=Le-ae),B(Fe,{duration:ne(Ea(Math.max(Ea(Qe-ie),Ea(Le-ie))*.185/pe/.05||0)),ease:y.ease||"power3",data:Ea(Fe-Tt),onInterrupt:function(){return j.restart(!0)&&Pe&&Pe(D)},onComplete:function(){D.update(),Et=z(),i&&!k&&(Ct?Ct.resetTo("totalProgress",Le,i._tTime/i._tDur):i.progress(Le)),Nt=Ut=i&&!k?i.totalProgress():D.progress,T&&T(D),ln&&ln(D)}},Tt,ke*Q,Fe-Tt-ke*Q),Xe&&Xe(D,B.tween)}}else D.isActive&&Et!==Tt&&j.restart(!0)}).pause()),l&&(cm[l]=D),u=D.trigger=_i(u||d!==!0&&d),zt=u&&u._gsap&&u._gsap.stRevert,zt&&(zt=zt(D)),d=d===!0?u:_i(d),Hi(a)&&(a={targets:u,className:a}),d&&(p===!1||p===ir||(p=!p&&d.parentNode&&d.parentNode.style&&rr(d.parentNode).display==="flex"?!1:An),D.pin=d,F=Jt.core.getCache(d),F.spacer?J=F.pinState:(w&&(w=_i(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),F.spacerIsNative=!!w,w&&(F.spacerState=af(w))),F.spacer=Dt=w||Ke.createElement("div"),Dt.classList.add("pin-spacer"),l&&Dt.classList.add("pin-spacer-"+l),F.pinState=J=af(d)),n.force3D!==!1&&Jt.set(d,{force3D:!0}),D.spacer=Dt=F.spacer,Wt=rr(d),wt=Wt[p+R.os2],v=Jt.getProperty(d),K=Jt.quickSetter(d,R.a,In),im(d,Dt,Wt),At=af(d)),Z){ut=po(Z)?j_(Z,tx):tx,P=of("scroller-start",l,L,R,ut,0),it=of("scroller-end",l,L,R,ut,0,P),U=P["offset"+R.op.d2];var _t=_i(cs(L,"content")||L);q=this.markerStart=of("start",l,_t,R,ut,U,0,C),H=this.markerEnd=of("end",l,_t,R,ut,U,0,C),C&&(Ot=Jt.quickSetter([q,H],R.a,In)),!W&&!(xr.length&&cs(L,"fixedMarkers")===!0)&&(GT(O?ze:L),Jt.set([P,it],{force3D:!0}),dt=Jt.quickSetter(P,R.a,In),It=Jt.quickSetter(it,R.a,In))}if(C){var Rt=C.vars.onUpdate,Mt=C.vars.onUpdateParams;C.eventCallback("onUpdate",function(){D.update(0,0,1),Rt&&Rt.apply(C,Mt||[])})}if(D.previous=function(){return Se[Se.indexOf(D)-1]},D.next=function(){return Se[Se.indexOf(D)+1]},D.revert=function(Tt,ee){if(!ee)return D.kill(!0);var Yt=Tt!==!1||!D.enabled,ae=ri;Yt!==D.isReverted&&(Yt&&(Ft=Math.max(z(),D.scroll.rec||0),Lt=D.progress,mt=i&&i.progress()),q&&[q,H,P,it].forEach(function(ie){return ie.style.display=Yt?"none":"block"}),Yt&&(ri=D,D.update(Yt)),d&&(!M||!D.isActive)&&(Yt?YT(d,Dt,J):im(d,Dt,rr(d),bt)),Yt||D.update(Yt),ri=ae,D.isReverted=Yt)},D.refresh=function(Tt,ee,Yt,ae){if(!((ri||!D.enabled)&&!ee)){if(d&&Tt&&sr){On(r,"scrollEnd",Sx);return}!vi&&st&&st(D),ri=D,B.tween&&!Yt&&(B.tween.kill(),B.tween=0),Ct&&Ct.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(kt){return kt.vars.immediateRender&&kt.render(0,!0,!0)})),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var ie=gt(),pe=yt(),ke=C?C.duration():zr(L,R),Qe=Q<=.01||!Q,Le=0,Fe=ae||0,_e=po(Yt)?Yt.end:n.end,Xe=n.endTrigger||u,Pe=po(Yt)?Yt.start:n.start||(n.start===0||!u?0:d?"0 0":"0 100%"),ln=D.pinnedContainer=n.pinnedContainer&&_i(n.pinnedContainer,D),qe=u&&Math.max(0,Se.indexOf(D))||0,be=qe,je,cn,Xi,kr,se,Ce,vn,Ln,E,$,ct,at,lt;for(Z&&po(Yt)&&(at=Jt.getProperty(P,R.p),lt=Jt.getProperty(it,R.p));be-- >0;)Ce=Se[be],Ce.end||Ce.refresh(0,1)||(ri=D),vn=Ce.pin,vn&&(vn===u||vn===d||vn===ln)&&!Ce.isReverted&&($||($=[]),$.unshift(Ce),Ce.revert(!0,!0)),Ce!==Se[be]&&(qe--,be--);for(oi(Pe)&&(Pe=Pe(D)),Pe=J_(Pe,"start",D),ht=rx(Pe,u,ie,R,z(),q,P,D,pe,tt,W,ke,C,D._startClamp&&"_startClamp")||(d?-.001:0),oi(_e)&&(_e=_e(D)),Hi(_e)&&!_e.indexOf("+=")&&(~_e.indexOf(" ")?_e=(Hi(Pe)?Pe.split(" ")[0]:"")+_e:(Le=hf(_e.substr(2),ie),_e=Hi(Pe)?Pe:(C?Jt.utils.mapRange(0,C.duration(),C.scrollTrigger.start,C.scrollTrigger.end,ht):ht)+Le,Xe=u)),_e=J_(_e,"end",D),I=Math.max(ht,rx(_e||(Xe?"100% 0":ke),Xe,ie,R,z()+Le,H,it,D,pe,tt,W,ke,C,D._endClamp&&"_endClamp"))||-.001,Le=0,be=qe;be--;)Ce=Se[be],vn=Ce.pin,vn&&Ce.start-Ce._pinPush<=ht&&!C&&Ce.end>0&&(je=Ce.end-(D._startClamp?Math.max(0,Ce.start):Ce.start),(vn===u&&Ce.start-Ce._pinPush<ht||vn===ln)&&isNaN(Pe)&&(Le+=je*(1-Ce.progress)),vn===d&&(Fe+=je));if(ht+=Le,I+=Le,D._startClamp&&(D._startClamp+=Le),D._endClamp&&!vi&&(D._endClamp=I||-.001,I=Math.min(I,zr(L,R))),Q=I-ht||(ht-=.01)&&.001,Qe&&(Lt=Jt.utils.clamp(0,1,Jt.utils.normalize(ht,I,Ft))),D._pinPush=Fe,q&&Le&&(je={},je[R.a]="+="+Le,ln&&(je[R.p]="-="+z()),Jt.set([q,H],je)),d&&!(lm&&D.end>=zr(L,R)))je=rr(d),kr=R===Tn,Xi=z(),nt=parseFloat(v(R.a))+Fe,!ke&&I>1&&(ct=(O?Ke.scrollingElement||Wi:L).style,ct={style:ct,value:ct["overflow"+R.a.toUpperCase()]},O&&rr(ze)["overflow"+R.a.toUpperCase()]!=="scroll"&&(ct.style["overflow"+R.a.toUpperCase()]="scroll")),im(d,Dt,je),At=af(d),cn=hs(d,!0),Ln=W&&ls(L,kr?ii:Tn)(),p?(bt=[p+R.os2,Q+Fe+In],bt.t=Dt,be=p===An?_f(d,R)+Q+Fe:0,be&&(bt.push(R.d,be+In),Dt.style.flexBasis!=="auto"&&(Dt.style.flexBasis=be+In)),La(bt),ln&&Se.forEach(function(kt){kt.pin===ln&&kt.vars.pinSpacing!==!1&&(kt._subPinOffset=!0)}),W&&z(Ft)):(be=_f(d,R),be&&Dt.style.flexBasis!=="auto"&&(Dt.style.flexBasis=be+In)),W&&(se={top:cn.top+(kr?Xi-ht:Ln)+In,left:cn.left+(kr?Ln:Xi-ht)+In,boxSizing:"border-box",position:"fixed"},se[go]=se["max"+Da]=Math.ceil(cn.width)+In,se[_o]=se["max"+_m]=Math.ceil(cn.height)+In,se[ir]=se[ir+gc]=se[ir+pc]=se[ir+_c]=se[ir+mc]="0",se[An]=je[An],se[An+gc]=je[An+gc],se[An+pc]=je[An+pc],se[An+_c]=je[An+_c],se[An+mc]=je[An+mc],S=JT(J,se,M),vi&&z(0)),i?(E=i._initted,Qp(1),i.render(i.duration(),!0,!0),ft=v(R.a)-nt+Q+Fe,pt=Math.abs(Q-ft)>1,W&&pt&&S.splice(S.length-2,2),i.render(0,!0,!0),E||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Qp(0)):ft=Q,ct&&(ct.value?ct.style["overflow"+R.a.toUpperCase()]=ct.value:ct.style.removeProperty("overflow-"+R.a));else if(u&&z()&&!C)for(cn=u.parentNode;cn&&cn!==ze;)cn._pinOffset&&(ht-=cn._pinOffset,I-=cn._pinOffset),cn=cn.parentNode;$&&$.forEach(function(kt){return kt.revert(!1,!0)}),D.start=ht,D.end=I,V=rt=vi?Ft:z(),!C&&!vi&&(V<Ft&&z(Ft),D.scroll.rec=0),D.revert(!1,!0),Bt=si(),j&&(Et=-1,j.restart(!0)),ri=0,i&&k&&(i._initted||mt)&&i.progress()!==mt&&i.progress(mt||0,!0).render(i.time(),!0,!0),(Qe||Lt!==D.progress||C||_||i&&!i._initted)&&(i&&!k&&(i._initted||Lt||i.vars.immediateRender!==!1)&&i.totalProgress(C&&ht<-.001&&!Lt?Jt.utils.normalize(ht,I,0):Lt,!0),D.progress=Qe||(V-ht)/Q===Lt?0:Lt),d&&p&&(Dt._pinOffset=Math.round(D.progress*ft)),Ct&&Ct.invalidate(),isNaN(at)||(at-=Jt.getProperty(P,R.p),lt-=Jt.getProperty(it,R.p),lf(P,R,at),lf(q,R,at-(ae||0)),lf(it,R,lt),lf(H,R,lt-(ae||0))),Qe&&!vi&&D.update(),h&&!vi&&!St&&(St=!0,h(D),St=!1)}},D.getVelocity=function(){return(z()-rt)/(si()-lc)*1e3||0},D.endAnimation=function(){ac(D.callbackAnimation),i&&(Ct?Ct.progress(1):i.paused()?k||ac(i,D.direction<0,1):ac(i,i.reversed()))},D.labelToScroll=function(Tt){return i&&i.labels&&(ht||D.refresh()||ht)+i.labels[Tt]/i.duration()*Q||0},D.getTrailing=function(Tt){var ee=Se.indexOf(D),Yt=D.direction>0?Se.slice(0,ee).reverse():Se.slice(ee+1);return(Hi(Tt)?Yt.filter(function(ae){return ae.vars.preventOverlaps===Tt}):Yt).filter(function(ae){return D.direction>0?ae.end<=ht:ae.start>=I})},D.update=function(Tt,ee,Yt){if(!(C&&!Yt&&!Tt)){var ae=vi===!0?Ft:D.scroll(),ie=Tt?0:(ae-ht)/Q,pe=ie<0?0:ie>1?1:ie||0,ke=D.progress,Qe,Le,Fe,_e,Xe,Pe,ln,qe;if(ee&&(rt=V,V=C?z():ae,y&&(Ut=Nt,Nt=i&&!k?i.totalProgress():pe)),m&&d&&!ri&&!tf&&sr&&(!pe&&ht<ae+(ae-rt)/(si()-lc)*m?pe=1e-4:pe===1&&I>ae+(ae-rt)/(si()-lc)*m&&(pe=.9999)),pe!==ke&&D.enabled){if(Qe=D.isActive=!!pe&&pe<1,Le=!!ke&&ke<1,Pe=Qe!==Le,Xe=Pe||!!pe!=!!ke,D.direction=pe>ke?1:-1,D.progress=pe,Xe&&!ri&&(Fe=pe&&!ke?0:pe===1?1:ke===1?2:3,k&&(_e=!Pe&&X[Fe+1]!=="none"&&X[Fe+1]||X[Fe],qe=i&&(_e==="complete"||_e==="reset"||_e in i))),b&&(Pe||qe)&&(qe||f||!i)&&(oi(b)?b(D):D.getTrailing(b).forEach(function(Xi){return Xi.endAnimation()})),k||(Ct&&!ri&&!tf?(Ct._dp._time-Ct._start!==Ct._time&&Ct.render(Ct._dp._time-Ct._start),Ct.resetTo?Ct.resetTo("totalProgress",pe,i._tTime/i._tDur):(Ct.vars.totalProgress=pe,Ct.invalidate().restart())):i&&i.totalProgress(pe,!!(ri&&(Bt||Tt)))),d){if(Tt&&p&&(Dt.style[p+R.os2]=wt),!W)K(hc(nt+ft*pe));else if(Xe){if(ln=!Tt&&pe>ke&&I+1>ae&&ae+1>=zr(L,R),M)if(!Tt&&(Qe||ln)){var be=hs(d,!0),je=ae-ht;sx(d,ze,be.top+(R===Tn?je:0)+In,be.left+(R===Tn?0:je)+In)}else sx(d,Dt);La(Qe||ln?S:At),pt&&pe<1&&Qe||K(nt+(pe===1&&!ln?ft:0))}}y&&!B.tween&&!ri&&!tf&&j.restart(!0),a&&(Pe||A&&pe&&(pe<1||!jp))&&yc(a.targets).forEach(function(Xi){return Xi.classList[Qe||A?"add":"remove"](a.className)}),o&&!k&&!Tt&&o(D),Xe&&!ri?(k&&(qe&&(_e==="complete"?i.pause().totalProgress(1):_e==="reset"?i.restart(!0).pause():_e==="restart"?i.restart(!0):i[_e]()),o&&o(D)),(Pe||!jp)&&(c&&Pe&&em(D,c),et[Fe]&&em(D,et[Fe]),A&&(pe===1?D.kill(!1,1):et[Fe]=0),Pe||(Fe=pe===1?1:3,et[Fe]&&em(D,et[Fe]))),x&&!Qe&&Math.abs(D.getVelocity())>(uc(x)?x:2500)&&(ac(D.callbackAnimation),Ct?Ct.progress(1):ac(i,_e==="reverse"?1:!pe,1))):k&&o&&!ri&&o(D)}if(It){var cn=C?ae/C.duration()*(C._caScrollDist||0):ae;dt(cn+(P._isFlipped?1:0)),It(cn)}Ot&&Ot(-ae/C.duration()*(C._caScrollDist||0))}},D.enable=function(Tt,ee){D.enabled||(D.enabled=!0,On(L,"resize",fc),O||On(L,"scroll",Ca),st&&On(r,"refreshInit",st),Tt!==!1&&(D.progress=Lt=0,V=rt=Et=z()),ee!==!1&&D.refresh())},D.getTween=function(Tt){return Tt&&B?B.tween:Ct},D.setPositions=function(Tt,ee,Yt,ae){if(C){var ie=C.scrollTrigger,pe=C.duration(),ke=ie.end-ie.start;Tt=ie.start+ke*Tt/pe,ee=ie.start+ke*ee/pe}D.refresh(!1,!1,{start:$_(Tt,Yt&&!!D._startClamp),end:$_(ee,Yt&&!!D._endClamp)},ae),D.update()},D.adjustPinSpacing=function(Tt){if(bt&&Tt){var ee=bt.indexOf(R.d)+1;bt[ee]=parseFloat(bt[ee])+Tt+In,bt[1]=parseFloat(bt[1])+Tt+In,La(bt)}},D.disable=function(Tt,ee){if(D.enabled&&(Tt!==!1&&D.revert(!0,!0),D.enabled=D.isActive=!1,ee||Ct&&Ct.pause(),Ft=0,F&&(F.uncache=1),st&&Fn(r,"refreshInit",st),j&&(j.pause(),B.tween&&B.tween.kill()&&(B.tween=0)),!O)){for(var Yt=Se.length;Yt--;)if(Se[Yt].scroller===L&&Se[Yt]!==D)return;Fn(L,"resize",fc),O||Fn(L,"scroll",Ca)}},D.kill=function(Tt,ee){D.disable(Tt,ee),Ct&&!ee&&Ct.kill(),l&&delete cm[l];var Yt=Se.indexOf(D);Yt>=0&&Se.splice(Yt,1),Yt===yi&&ff>0&&yi--,Yt=0,Se.forEach(function(ae){return ae.scroller===D.scroller&&(Yt=1)}),Yt||vi||(D.scroll.rec=0),i&&(i.scrollTrigger=null,Tt&&i.revert({kill:!1}),ee||i.kill()),q&&[q,H,P,it].forEach(function(ae){return ae.parentNode&&ae.parentNode.removeChild(ae)}),xc===D&&(xc=0),d&&(F&&(F.uncache=1),Yt=0,Se.forEach(function(ae){return ae.pin===d&&Yt++}),Yt||(F.spacer=0)),n.onKill&&n.onKill(D)},Se.push(D),D.enable(!1,!1),zt&&zt(D),i&&i.add&&!Q){var te=D.update;D.update=function(){D.update=te,ve.cache++,ht||I||D.refresh()},Jt.delayedCall(.01,D.update),Q=.01,ht=I=0}else D.refresh();d&&qT()},r.register=function(n){return Ra||(Jt=n||mx(),px()&&window.document&&r.enable(),Ra=cc),Ra},r.defaults=function(n){if(n)for(var i in n)sf[i]=n[i];return sf},r.disable=function(n,i){cc=0,Se.forEach(function(o){return o[i?"kill":"disable"](n)}),Fn(Me,"wheel",Ca),Fn(Ke,"scroll",Ca),clearInterval(ju),Fn(Ke,"touchcancel",Br),Fn(ze,"touchstart",Br),nf(Fn,Ke,"pointerdown,touchstart,mousedown",K_),nf(Fn,Ke,"pointerup,touchend,mouseup",Q_),mf.kill(),ef(Fn);for(var s=0;s<ve.length;s+=3)rf(Fn,ve[s],ve[s+1]),rf(Fn,ve[s],ve[s+2])},r.enable=function(){if(Me=window,Ke=document,Wi=Ke.documentElement,ze=Ke.body,Jt&&(yc=Jt.utils.toArray,dc=Jt.utils.clamp,am=Jt.core.context||Br,Qp=Jt.core.suppressOverwrites||Br,dm=Me.history.scrollRestoration||"auto",hm=Me.pageYOffset||0,Jt.core.globals("ScrollTrigger",r),ze)){cc=1,Ia=document.createElement("div"),Ia.style.height="100vh",Ia.style.position="absolute",wx(),zT(),dn.register(Jt),r.isTouch=dn.isTouch,zs=dn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),om=dn.isTouch===1,On(Me,"wheel",Ca),fm=[Me,Ke,Wi,ze],Jt.matchMedia?(r.matchMedia=function(c){var h=Jt.matchMedia(),f;for(f in c)h.add(f,c[f]);return h},Jt.addEventListener("matchMediaInit",function(){return ym()}),Jt.addEventListener("matchMediaRevert",function(){return Mx()}),Jt.addEventListener("matchMedia",function(){mo(0,1),So("matchMedia")}),Jt.matchMedia().add("(orientation: portrait)",function(){return nm(),nm})):console.warn("Requires GSAP 3.11.0 or later"),nm(),On(Ke,"scroll",Ca);var n=ze.hasAttribute("style"),i=ze.style,s=i.borderTopStyle,o=Jt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=hs(ze),Tn.m=Math.round(a.top+Tn.sc())||0,ii.m=Math.round(a.left+ii.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(ze.setAttribute("style",""),ze.removeAttribute("style")),ju=setInterval(ex,250),Jt.delayedCall(.5,function(){return tf=0}),On(Ke,"touchcancel",Br),On(ze,"touchstart",Br),nf(On,Ke,"pointerdown,touchstart,mousedown",K_),nf(On,Ke,"pointerup,touchend,mouseup",Q_),sm=Jt.utils.checkPrefix("transform"),df.push(sm),Ra=si(),mf=Jt.delayedCall(.2,mo).pause(),Pa=[Ke,"visibilitychange",function(){var c=Me.innerWidth,h=Me.innerHeight;Ke.hidden?(Y_=c,Z_=h):(Y_!==c||Z_!==h)&&fc()},Ke,"DOMContentLoaded",mo,Me,"load",mo,Me,"resize",fc],ef(On),Se.forEach(function(c){return c.enable(0,1)}),l=0;l<ve.length;l+=3)rf(Fn,ve[l],ve[l+1]),rf(Fn,ve[l],ve[l+2])}},r.config=function(n){"limitCallbacks"in n&&(jp=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ju)||(ju=i)&&setInterval(ex,i),"ignoreMobileResize"in n&&(om=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ef(Fn)||ef(On,n.autoRefreshEvents||"none"),ux=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=_i(n),o=ve.indexOf(s),a=yo(s);~o&&ve.splice(o,a?6:2),i&&(a?xr.unshift(Me,i,ze,i,Wi,i):xr.unshift(s,i))},r.clearMatchMedia=function(n){Se.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Hi(n)?_i(n):n).getBoundingClientRect(),a=o[s?go:_o]*i||0;return s?o.right-a>0&&o.left+a<Me.innerWidth:o.bottom-a>0&&o.top+a<Me.innerHeight},r.positionInViewport=function(n,i,s){Hi(n)&&(n=_i(n));var o=n.getBoundingClientRect(),a=o[s?go:_o],l=i==null?a/2:i in xf?xf[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/Me.innerWidth:(o.top+l)/Me.innerHeight},r.killAll=function(n){if(Se.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=vo.killAll||[];vo={},i.forEach(function(s){return s()})}},r})();ue.version="3.13.0";ue.saveStyles=function(r){return r?yc(r).forEach(function(t){if(t&&t.style){var e=Gi.indexOf(t);e>=0&&Gi.splice(e,5),Gi.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Jt.core.getCache(t),am())}}):Gi};ue.revert=function(r,t){return ym(!r,t)};ue.create=function(r,t){return new ue(r,t)};ue.refresh=function(r){return r?fc(!0):(Ra||ue.register())&&mo(!0)};ue.update=function(r){return++ve.cache&&us(r===!0?2:0)};ue.clearScrollMemory=bx;ue.maxScroll=function(r,t){return zr(r,t?ii:Tn)};ue.getScrollFunc=function(r,t){return ls(_i(r),t?ii:Tn)};ue.getById=function(r){return cm[r]};ue.getAll=function(){return Se.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ue.isScrolling=function(){return!!sr};ue.snapDirectional=xm;ue.addEventListener=function(r,t){var e=vo[r]||(vo[r]=[]);~e.indexOf(t)||e.push(t)};ue.removeEventListener=function(r,t){var e=vo[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};ue.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var f=[],u=[],d=Jt.delayedCall(i,function(){h(f,u),f=[],u=[]}).pause();return function(p){f.length||d.restart(!0),f.push(p.trigger),u.push(p),s<=f.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&oi(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return oi(s)&&(s=s(),On(ue,"refresh",function(){return s=t.batchMax()})),yc(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(ue.create(c))}),e};var ax=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},rm=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(dn.isTouch?" pinch-zoom":""):"none",t===Wi&&r(ze,e)},cf={auto:1,scroll:1},KT=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Jt.core.getCache(s),a=si(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==ze&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(cf[(l=rr(s)).overflowY]||cf[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!yo(s)&&(cf[(l=rr(s)).overflowY]||cf[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Ax=function(t,e,n,i){return dn.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&KT,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&On(Ke,dn.eventTypes[0],cx,!1,!0)},onDisable:function(){return Fn(Ke,dn.eventTypes[0],cx,!0)}})},QT=/(input|label|select|textarea)/i,lx,cx=function(t){var e=QT.test(t.target.tagName);(e||lx)&&(t._gsapAllow=!0,lx=e)},jT=function(t){po(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=_i(t.target)||Wi,h=Jt.core.globals().ScrollSmoother,f=h&&h.get(),u=zs&&(t.content&&_i(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),d=ls(c,Tn),p=ls(c,ii),_=1,m=(dn.isTouch&&Me.visualViewport?Me.visualViewport.scale*Me.visualViewport.width:Me.outerWidth)/Me.innerWidth,g=0,T=oi(i)?function(){return i(a)}:function(){return i||2.8},A,y,M=Ax(c,t.type,!0,s),w=function(){return y=!1},C=Br,x=Br,b=function(){l=zr(c,Tn),x=dc(zs?1:0,l),n&&(C=dc(0,zr(c,ii))),A=xo},R=function(){u._gsap.y=hc(parseFloat(u._gsap.y)+d.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},k=function(){if(y){requestAnimationFrame(w);var Z=hc(a.deltaY/2),tt=x(d.v-Z);if(u&&tt!==d.v+d.offset){d.offset=tt-d.v;var D=hc((parseFloat(u&&u._gsap.y)||0)-d.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",u._gsap.y=D+"px",d.cacheID=ve.cache,us()}return!0}d.offset&&R(),y=!0},L,Y,O,W,et=function(){b(),L.isActive()&&L.vars.scrollY>l&&(d()>l?L.progress(1)&&d(l):L.resetTo("scrollY",l))};return u&&Jt.set(u,{y:"+=0"}),t.ignoreCheck=function(X){return zs&&X.type==="touchmove"&&k(X)||_>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},t.onPress=function(){y=!1;var X=_;_=hc((Me.visualViewport&&Me.visualViewport.scale||1)/m),L.pause(),X!==_&&rm(c,_>1.01?!0:n?!1:"x"),Y=p(),O=d(),b(),A=xo},t.onRelease=t.onGestureStart=function(X,Z){if(d.offset&&R(),!Z)W.restart(!0);else{ve.cache++;var tt=T(),D,st;n&&(D=p(),st=D+tt*.05*-X.velocityX/.227,tt*=ax(p,D,st,zr(c,ii)),L.vars.scrollX=C(st)),D=d(),st=D+tt*.05*-X.velocityY/.227,tt*=ax(d,D,st,zr(c,Tn)),L.vars.scrollY=x(st),L.invalidate().duration(tt).play(.01),(zs&&L.vars.scrollY>=l||D>=l-1)&&Jt.to({},{onUpdate:et,duration:tt})}o&&o(X)},t.onWheel=function(){L._ts&&L.pause(),si()-g>1e3&&(A=0,g=si())},t.onChange=function(X,Z,tt,D,st){if(xo!==A&&b(),Z&&n&&p(C(D[2]===Z?Y+(X.startX-X.x):p()+Z-D[1])),tt){d.offset&&R();var gt=st[2]===tt,yt=gt?O+X.startY-X.y:d()+tt-st[1],Et=x(yt);gt&&yt!==Et&&(O+=Et-yt),d(Et)}(tt||Z)&&us()},t.onEnable=function(){rm(c,n?!1:"x"),ue.addEventListener("refresh",et),On(Me,"resize",et),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=p.smooth=!1),M.enable()},t.onDisable=function(){rm(c,!0),Fn(Me,"resize",et),ue.removeEventListener("refresh",et),M.kill()},t.lockAxis=t.lockAxis!==!1,a=new dn(t),a.iOS=zs,zs&&!d()&&d(1),zs&&Jt.ticker.add(Br),W=a._dc,L=Jt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Tx(d,d(),function(){return L.pause()})},onUpdate:us,onComplete:W.vars.onComplete}),a};ue.sort=function(r){if(oi(r))return Se.sort(r);var t=Me.pageYOffset||0;return ue.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+Me.innerHeight}),Se.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ue.observe=function(r){return new dn(r)};ue.normalizeScroll=function(r){if(typeof r>"u")return xi;if(r===!0&&xi)return xi.enable();if(r===!1){xi&&xi.kill(),xi=r;return}var t=r instanceof dn?r:jT(r);return xi&&xi.target===t.target&&xi.kill(),yo(t.target)&&(xi=t),t};ue.core={_getVelocityProp:Qu,_inputObserver:Ax,_scrollers:ve,_proxies:xr,bridge:{ss:function(){sr||So("scrollStart"),sr=si()},ref:function(){return ri}}};mx()&&Jt.registerPlugin(ue);var tA=`
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+10.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0); const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy)); vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz); vec3 l=1.0-g; vec3 i1=min(g.xyz,l.zxy); vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx; vec3 x2=x0-i2+C.yyy; vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857; vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z); vec4 x_=floor(j*ns.z); vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy; vec4 y=y_*ns.x+ns.yyyy; vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy); vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0; vec4 s1=floor(b1)*2.0+1.0; vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy; vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x); vec3 p1=vec3(a0.zw,h.y); vec3 p2=vec3(a1.xy,h.z); vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
  vec4 m=max(0.5-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0); m=m*m;
  return 105.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
float fbm(vec3 p){ float a=0.5, s=0.0; for(int i=0;i<6;i++){ s+=a*snoise(p); p=p*2.03+vec3(1.7,9.2,3.1); a*=0.5; } return s; }
float ridge(vec3 p){ float a=0.5, s=0.0; for(int i=0;i<5;i++){ float n=1.0-abs(snoise(p)); s+=a*n*n; p=p*2.1+vec3(4.1,1.3,7.7); a*=0.5; } return s; }
// brand light (linear): orange #FD8502, teal #02818B, cream #F4F1EA \u2014 gas is slightly softened toward natural emission
const vec3 ORANGE=vec3(0.982,0.235,0.0006);
const vec3 TEAL=vec3(0.0006,0.223,0.258);
const vec3 CREAM=vec3(0.905,0.879,0.823);
const vec3 GAS_O=vec3(1.0,0.30,0.035);
const vec3 GAS_T=vec3(0.02,0.42,0.47);
`,eA="varying vec2 vUv; void main(){ vUv=uv; gl_Position=vec4(position.xy,0.0,1.0); }";function Na(r,t,e,n,i={},s=!1){let o=new Qn(t,e,{generateMipmaps:!0,minFilter:Ir,magFilter:En,depthBuffer:!1});s||(o.texture.colorSpace=en);let a=new jn({vertexShader:eA,fragmentShader:tA+n,uniforms:i,depthTest:!1,depthWrite:!1}),l=new Ie(new ts(2,2),a),c=new Qr;c.add(l);let h=new ws(-1,1,1,-1,0,1),f=r.getRenderTarget(),u=r.toneMapping;return r.toneMapping=0,r.setRenderTarget(o),r.render(c,h),r.setRenderTarget(f),r.toneMapping=u,a.dispose(),l.geometry.dispose(),o}var Si={az0:-1.75,az1:1.75,el0:-.85,el1:1.05,R:950},nA=`
varying vec2 vUv; uniform vec4 uRange;
vec3 dirOf(vec2 uv){ float az=mix(uRange.x,uRange.y,uv.x), el=mix(uRange.z,uRange.w,uv.y);
  return vec3(sin(az)*cos(el), sin(el), -cos(az)*cos(el)); }
void main(){
  vec3 d=dirOf(vUv);
  // galactic band: a tilted great circle crossing the whole journey, brightest toward its bulge
  vec3 nG=normalize(vec3(0.42,0.88,0.22));
  float bd=dot(d,nG);
  vec3 bulgeDir=normalize(vec3(0.55,0.30,-0.78));
  float bulge=pow(max(dot(d,bulgeDir),0.0),60.0);
  float band=exp(-pow(bd/0.14,2.0))*smoothstep(0.35,0.85,fbm(d*3.0+2.0)*0.6+0.55);
  float glowWide=exp(-pow(bd/0.35,2.0));
  // unresolved starlight: a fine granular texture inside the band (photographic, not noise on black)
  float grain=0.45+0.55*smoothstep(-0.1,0.9,fbm(d*55.0+7.0));
  vec3 bandCol=mix(vec3(0.70,0.74,0.84),CREAM,0.5+0.5*snoise(d*1.3));
  vec3 col=bandCol*band*grain*0.045 + vec3(0.006,0.0065,0.009)*glowWide;
  col+=mix(CREAM,GAS_O,0.4)*bulge*0.14*grain;
  // emission gas: two large brand-coloured formations, domain-warped, with filamentary ridges
  vec3 q=d*1.7; vec3 w=vec3(fbm(q+vec3(1.0)),fbm(q+vec3(5.2,1.3,2.8)),fbm(q+vec3(9.1,4.4,7.7)));
  float gas=fbm(d*2.4+w*1.6)*0.5+0.5;
  float fil=ridge(d*3.2+w*0.9);
  float warmM=smoothstep(0.15,0.85,fbm(d*0.8+vec3(3.0,7.0,1.0))*0.8+0.5+0.35*dot(d,normalize(vec3(-0.6,0.45,-0.65))));
  float coolM=smoothstep(0.15,0.85,fbm(d*0.8+vec3(8.0,2.0,5.0))*0.8+0.5+0.35*dot(d,normalize(vec3(0.7,-0.35,-0.62))));
  float g=pow(gas,2.4);
  g*=smoothstep(0.45,0.8,gas);                                          // gas only where the field is dense: real voids between
  vec3 emi=GAS_O*warmM*(g*0.10+fil*g*0.12) + GAS_T*coolM*(g*0.11+fil*g*0.13);
  emi+=CREAM*pow(g*max(warmM,coolM),4.0)*0.12;                       // hot cores whiten
  col+=emi;
  // a cool, very large ambient glow so the void is deep charcoal-blue, never dead black
  col+=vec3(0.0045,0.0050,0.0062)*(0.6+0.4*fbm(d*1.1+20.0));
  // dust lanes: filamentary absorption along the band and through the gas
  float dl=smoothstep(0.0,0.55,fbm(d*3.2+w*0.6+13.0))*exp(-pow(bd/0.09,2.0));
  float dg=smoothstep(0.3,0.9,fbm(d*2.2+31.0)+0.15);
  col*=exp(-2.2*dl)*(1.0-0.6*dg);
  // horizon fade below the journey's lowest view \u2192 charcoal
  col*=smoothstep(-0.85,-0.45,d.y)*0.85+0.15;
  gl_FragColor=vec4(max(col,0.0),1.0);
}`,vm=`
varying vec2 vUv; uniform float uSeed; uniform vec3 uA; uniform vec3 uB; uniform float uGain;
void main(){
  vec2 p=(vUv-0.5)*2.0;
  vec3 q=vec3(p*0.95,uSeed);
  vec3 w=vec3(fbm(q+vec3(0.0,0.0,1.7)),fbm(q+vec3(5.2,1.3,3.1)),0.0);
  float n=fbm(q*1.05+w*1.25)*0.5+0.5;
  float fil=ridge(q*1.9+w*1.1);
  // a soft, irregular outline: zero at every edge of the card, never a visible rectangle or circle
  float r=length(p*vec2(1.0,1.2))+0.32*fbm(q*0.8+9.0);
  float shape=smoothstep(0.95,0.15,r);
  // mostly empty: only the dense part of the field becomes gas, with wispy filaments at its edges
  float body=smoothstep(0.42,0.92,n)*shape;
  float dens=pow(body,1.7);
  float wisp=fil*smoothstep(0.3,0.75,n)*shape*0.35;
  // colour runs from B at the rim to A in the body; dense cores whiten (natural emission)
  vec3 col=mix(uB,uA,smoothstep(0.0,0.45,dens))*(dens*0.62+wisp*0.5+fil*dens*0.35);
  col+=CREAM*pow(dens,4.0)*0.55;
  gl_FragColor=vec4(max(col*uGain,0.0),1.0);
}`,iA=`
varying vec2 vUv; uniform float uSeed;
void main(){
  vec2 p=(vUv-0.5)*2.0;
  vec3 q=vec3(p*1.4,uSeed);
  vec3 w=vec3(fbm(q+3.0),fbm(q+vec3(7.0,2.0,1.0)),0.0);
  float n=fbm(q*1.2+w*1.3)*0.5+0.5;
  float fil=ridge(q*2.0+w);
  float r=length(p)+0.3*fbm(q*0.8+5.0);
  float a=smoothstep(0.42,0.82,n*0.75+fil*0.35)*smoothstep(1.0,0.35,r);
  gl_FragColor=vec4(vec3(a),1.0);
}`,rA=`
varying vec2 vUv; uniform float uSeed;
void main(){
  vec2 p=(vUv-0.5)*2.0; float r=length(p); float a=atan(p.y,p.x);
  float core=exp(-r*r*80.0)*0.75 + exp(-r*r*12.0)*0.16;
  float spiral=0.5+0.5*cos(2.0*(a-log(r+0.02)*2.6)+uSeed);
  float noise=0.55+0.45*fbm(vec3(p*6.0,uSeed));
  float disk=exp(-r*3.0)*smoothstep(1.0,0.75,r);
  float arms=pow(spiral,3.0)*disk*noise;
  float lanes=pow(1.0-spiral,6.0)*disk*0.6;
  vec3 armCol=mix(GAS_T*1.4+0.12,CREAM,0.45);
  vec3 col=mix(CREAM,GAS_O,0.25)*core + armCol*arms*0.75 + GAS_O*pow(spiral,9.0)*disk*noise*0.35;
  col*=1.0-lanes*0.6;
  col*=smoothstep(1.0,0.9,r);
  gl_FragColor=vec4(max(col*0.9,0.0),1.0);
}`,Cx=`
attribute float aSize; attribute vec3 aColor; varying vec3 vColor; uniform float uDpr;
void main(){
  vColor=aColor;
  vec4 mv=modelViewMatrix*vec4(position,1.0);
  gl_Position=projectionMatrix*mv;
  gl_PointSize=aSize*uDpr;                     // stars are point sources: no distance attenuation
}`,sA=`
varying vec3 vColor; uniform float uBright;
void main(){
  vec2 c=gl_PointCoord-0.5; float r2=dot(c,c)*4.0;
  float core=exp(-r2*14.0), halo=exp(-r2*3.0)*0.14;
  float a=core+halo; if(a<0.004) discard;
  gl_FragColor=vec4(vColor*a*uBright,1.0);    // additive
}`,oA=`
varying vec3 vColor; uniform float uBright;
void main(){
  vec2 c=(gl_PointCoord-0.5)*2.0; float r2=dot(c,c);
  float core=exp(-r2*60.0)*1.6, glow=exp(-r2*7.0)*0.32, wide=exp(-r2*2.2)*0.07;
  float spikes=(exp(-abs(c.x)*55.0)+exp(-abs(c.y)*55.0))*exp(-r2*3.5)*0.22;
  float a=core+glow+wide+spikes; if(a<0.004) discard;
  gl_FragColor=vec4(vColor*a*uBright,1.0);
}`,aA=`
attribute float aSize; attribute vec3 aColor; varying vec3 vColor; varying float vFade; uniform float uDpr; uniform float uScale;
void main(){
  vColor=aColor;
  vec4 mv=modelViewMatrix*vec4(position,1.0);
  gl_Position=projectionMatrix*mv;
  float dist=-mv.z;
  gl_PointSize=clamp(aSize*uScale/max(dist,0.5),0.0,90.0)*uDpr;
  vFade=smoothstep(1.5,6.0,dist)*(1.0-smoothstep(60.0,110.0,dist));   // never pops at the lens, fades in the distance
}`,lA=`
varying vec3 vColor; varying float vFade; uniform float uBright;
void main(){
  vec2 c=gl_PointCoord-0.5; float r2=dot(c,c)*4.0;
  float a=exp(-r2*3.5)*vFade; if(a<0.003) discard;
  gl_FragColor=vec4(vColor*a*uBright,1.0);
}`;function Sm(r){return()=>{r|=0,r=r+1831565813|0;let t=Math.imul(r^r>>>15,1|r);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Ex=new G(.42,.88,.22).normalize(),Mm=(r,t,e)=>new jn({vertexShader:r,fragmentShader:t,uniforms:e,transparent:!0,depthWrite:!1,blending:fi});function cA(r,t,e){let n=Sm(e),i=new Float32Array(r*3),s=new Float32Array(r),o=new Float32Array(r*3),a=new G,l=new Kt,c=d=>d<.16?"#C9D8FF":d<.4?"#E6EDFF":d<.7?"#FFFFFF":d<.87?"#FFF0DA":d<.97?"#FFD9AE":"#FFBE8E",h=[[.12,60,150],[.33,160,400],[.55,420,880]];for(let d=0;d<r;d++){let p=n(),_=p<h[0][0]?h[0]:p<h[0][0]+h[1][0]?h[1]:h[2];if(a.set(n()*2-1,n()*2-1,n()*2-1).normalize(),n()<.5){let y=a.dot(Ex);a.addScaledVector(Ex,-y*(.8+.2*n())).normalize()}a.z>.35&&n()<.6&&(a.z=-a.z);let m=Ue.lerp(_[1],_[2],n());i.set([a.x*m,a.y*m,a.z*m],d*3);let g=Math.pow(n(),3),T=_===h[0]?1.2:_===h[1]?1:.85;s[d]=(1+g*3.4)*T,l.set(c(n()));let A=.3+.75*Math.pow(g,.75);o.set([l.r*A,l.g*A,l.b*A],d*3)}let f=new xn;f.setAttribute("position",new Ae(i,3)),f.setAttribute("aSize",new Ae(s,1)),f.setAttribute("aColor",new Ae(o,3));let u=new qs(f,Mm(Cx,sA,{uDpr:{value:t},uBright:{value:1}}));return u.frustumCulled=!1,u}function hA(r,t,e){let n=Sm(e),i=[],s=[],o=[],a=new G,l=new Kt;for(let f=0;f<r;f++){let u=(n()*2-1)*1.5,d=-.5+n()*1.3,p=300+n()*400;a.set(Math.sin(u)*Math.cos(d),Math.sin(d),-Math.cos(u)*Math.cos(d)).multiplyScalar(p),i.push(a.x,a.y,a.z),s.push(14+n()*18),l.set(n()<.3?"#CFDBFF":n()<.7?"#FFF6EA":"#FFD8A8");let _=.55+.45*n();o.push(l.r*_,l.g*_,l.b*_)}let c=new xn;c.setAttribute("position",new Ae(i,3)),c.setAttribute("aSize",new Ae(s,1)),c.setAttribute("aColor",new Ae(o,3));let h=new qs(c,Mm(Cx,oA,{uDpr:{value:t},uBright:{value:1}}));return h.frustumCulled=!1,h}function uA(r,t,e){let n=Sm(e),i=[],s=[],o=[],a=new Kt,l=["#FD8502","#02818B","#F4F1EA","#F9A24A","#2AC4CC"];for(let f=0;f<r;f++){i.push((n()*2-1)*46,(n()*2-1)*26+3,46-n()*120),s.push(.6+Math.pow(n(),2)*2.4),a.set(l[Math.floor(n()*l.length)]);let u=.05+.1*n();o.push(a.r*u,a.g*u,a.b*u)}let c=new xn;c.setAttribute("position",new Ae(i,3)),c.setAttribute("aSize",new Ae(s,1)),c.setAttribute("aColor",new Ae(o,3));let h=new qs(c,Mm(aA,lA,{uDpr:{value:t},uScale:{value:300},uBright:{value:1}}));return h.frustumCulled=!1,h}function fA(r=96){let t=r,e=Math.round(r*(Si.el1-Si.el0)/(Si.az1-Si.az0))+2,n=[],i=[],s=[];for(let a=0;a<=e;a++)for(let l=0;l<=t;l++){let c=l/t,h=a/e,f=Ue.lerp(Si.az0,Si.az1,c),u=Ue.lerp(Si.el0,Si.el1,h);n.push(Math.sin(f)*Math.cos(u)*Si.R,Math.sin(u)*Si.R,-Math.cos(f)*Math.cos(u)*Si.R),i.push(c,h)}for(let a=0;a<e;a++)for(let l=0;l<t;l++){let c=a*(t+1)+l,h=c+1,f=c+t+1,u=f+1;s.push(c,f,h,h,f,u)}let o=new xn;return o.setIndex(s),o.setAttribute("position",new Ae(n,3)),o.setAttribute("uv",new Ae(i,2)),o}async function Rx(r,t,e={}){let n=e.yieldFn||(async()=>{}),i=t==="high",s=t==="mobile",o=new Kn,a=[],l=R=>new Kt(R),c=Na(r,i?2048:s?1024:1280,i?1112:s?556:696,nA,{uRange:{value:[Si.az0,Si.az1,Si.el0,Si.el1]}});a.push(c),await n();let h=new Ie(fA(i?96:64),new kn({map:c.texture,side:ui,depthWrite:!1,fog:!1}));h.renderOrder=-10,o.add(h),a.push(h.geometry,h.material);let f=i?1024:512,u=Na(r,f,f,vm,{uSeed:{value:2.3},uA:{value:l("#FD8502")},uB:{value:l("#7A2A12")},uGain:{value:1}});await n();let d=Na(r,f,f,vm,{uSeed:{value:7.9},uA:{value:l("#1FA6AE")},uB:{value:l("#02818B")},uGain:{value:1}});await n();let p=Na(r,f,f,vm,{uSeed:{value:12.4},uA:{value:l("#F7A54A")},uB:{value:l("#02818B")},uGain:{value:1}});await n();let _=Na(r,i?1024:512,i?1024:512,iA,{uSeed:{value:4.4}},!0);await n(),a.push(u,d,p,_);let m=[],g=(R,k,L,Y,O,W,et=!1)=>{let X=et?new kn({color:"#050608",alphaMap:R.texture,transparent:!0,depthWrite:!1,fog:!1,opacity:W}):new kn({map:R.texture,blending:fi,transparent:!0,depthWrite:!1,fog:!1,opacity:W}),Z=new Ie(new ts(k,L),X);return Z.position.set(...Y),Z.lookAt(0,Y[1]*.4,30),Z.rotateZ(O),Z.renderOrder=et?-8:-9,o.add(Z),a.push(Z.geometry,Z.material),m.push({m:Z,op:W,home:new G(...Y),portrait:null}),Z};g(u,220,180,[-150,75,-340],.4,.8),g(d,240,190,[165,-30,-370],-.5,.85),g(p,200,170,[40,150,-430],2.1,.7),g(d,170,150,[-210,-50,-300],1.2,.65),g(u,150,130,[215,55,-270],-1.9,.55),g(p,110,100,[-60,-55,-215],.9,.3),g(_,230,190,[-70,30,-240],.3,.85,!0),g(_,200,170,[110,-20,-280],2.4,.8,!0),g(_,150,130,[10,-70,-180],1.4,.7,!0);let T=Na(r,i?1024:512,i?1024:512,rA,{uSeed:{value:1.3}});await n(),a.push(T);let A=new Ie(new ts(120,120),new kn({map:T.texture,blending:fi,transparent:!0,depthWrite:!1,fog:!1}));A.position.set(150,125,-420),A.lookAt(0,0,0),A.rotateX(-.95),A.rotateZ(.6),A.renderOrder=-8,o.add(A),a.push(A.geometry,A.material),await n();let y=r.getPixelRatio(),M=cA(i?26e3:s?11e3:17e3,y,20261026);M.renderOrder=-7,o.add(M),a.push(M.geometry,M.material);let w=hA(s?22:40,y,7);w.renderOrder=-7,o.add(w),a.push(w.geometry,w.material);let C=uA(i?420:s?150:260,y,99);C.renderOrder=-6,o.add(C),a.push(C.geometry,C.material);let x=[M.material,w.material,C.material],b={sky:c,cloudO:u,cloudT:d,cloudM:p,dark:_,galaxy:T};return{group:o,debugRead(R){let k=b[R],L=k.width,Y=k.height,O=new Uint8Array(L*Y*4);r.readRenderTargetPixels(k,0,0,L,Y,O);let W=document.createElement("canvas");W.width=L,W.height=Y;let et=W.getContext("2d"),X=et.createImageData(L,Y);for(let Z=0;Z<Y;Z++)X.data.set(O.subarray((Y-1-Z)*L*4,(Y-Z)*L*4),Z*L*4);return et.putImageData(X,0,0),W.toDataURL("image/png")},galaxy:A.position.clone(),setPixelRatio(R){for(let k of x)k.uniforms.uDpr.value=R},setPortrait(R){for(let k of m)k.m.position.set(k.home.x*(R?.42:1),k.home.y*(R?.8:1),k.home.z);C.material.uniforms.uScale.value=R?200:300},setBrightness(R){h.material.color.setScalar(R);for(let k of m)k.m.material.opacity=k.op*R;A.material.opacity=R;for(let k of x)k.uniforms.uBright.value=R},dispose(){for(let R of a)R.dispose&&R.dispose()}}}var Ri=(r,t,e)=>Ue.smoothstep(e,r,t),Px=new Kt("#FD8502"),J3=new Kt("#02818B"),bm=new Kt("#2AC4CC"),dA=new Kt("#F4F1EA");function pA(){let r=document.createElement("canvas");r.width=r.height=128;let t=r.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,.85)"),e.addColorStop(.18,"rgba(255,255,255,.32)"),e.addColorStop(.5,"rgba(255,255,255,.07)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);let n=new $i(r);return n.colorSpace=en,n}var mA=2.39996,gA=[{src:"i-cut",c:"teal",y:-2.55,r:.2,s:1},{src:"bulb-band-2",c:"orange",y:-1.7,r:.85,s:1.1},{src:"dot-growth",c:"teal",y:-.75,r:1.35,s:.55,chip:!0},{src:"bulb-band-1",c:"orange",y:.15,r:1.55,s:1.15},{src:"dot-spark",c:"orange",y:1,r:1.25,s:.55,chip:!0}],Ix=2.45,_A=1.25,xA=[[0,1],[0,2],[1,2],[1,3],[2,3],[2,4],[3,4],[3,5],[4,5]],yA=Ix+.9-(-2.55-.35);function Lx({scene:r,logo:t,byName:e,DOT:n,SEAM_N:i,MAT:s,SIDE:o}){let a=new Kn,l=new Kn;r.add(l),l.visible=!1;let c=pA(),h=new gn,f=new gn,u=new G,d=new G,p=new G,_=(gt,yt)=>{let Et=new Cr(new dr({map:c,color:gt,blending:fi,depthWrite:!1,transparent:!0,opacity:0,fog:!1}));return Et.scale.setScalar(yt),Et.renderOrder=2,Et},m=(gt,yt)=>{let Et=e[gt],Bt=s[yt].clone(),Lt=o[yt].clone(),z=new Ie(Et.mesh.geometry,[Bt,Lt]);return z.castShadow=z.receiveShadow=!1,{m:z,front:Bt,back:Lt,src:Et}},g=gA.map((gt,yt)=>{let{m:Et,front:Bt,back:Lt,src:z}=m(gt.src,gt.c),B=new Kn;B.add(Et),l.add(B);let F=yt*mA+.6,N=new G(Math.cos(F)*gt.r*1.35,gt.y,Math.sin(F)*gt.r*1.1),V=new gn().setFromEuler(new Ni(.18*Math.sin(F*1.3),.55*Math.sin(F),.25*Math.cos(F))),rt=_(gt.c==="orange"?Px:bm,1.6);return l.add(rt),{...gt,k:yt,g:B,m:Et,front:Bt,back:Lt,src:z,local:N,localQ:V,halo:rt,world:new G,lit:0}}),T=new Kn;l.add(T);let A=m("dot-spark","orange"),y=m("dot-growth","teal"),M=e["dot-spark"].home.clone().sub(n),w=e["dot-growth"].home.clone().sub(n);T.add(A.m,y.m);let C=_(new Kt("#FFC27E"),4.5);l.add(C);let x=_(bm,7);l.add(x);let b=new G(i.x,i.y,0),R=new G(0,Ix,0),k=new G,L=gt=>gt===5?dA:g[gt].c==="orange"?Px:bm,Y=xA.map(([gt,yt])=>{let Et=new ul(1,1,1,6,1,!0).translate(0,.5,0),Bt=Et.attributes.position,Lt=[],z=L(gt),B=L(yt),F=new Kt;for(let ht=0;ht<Bt.count;ht++)F.copy(z).lerp(B,Bt.getY(ht)),Lt.push(F.r,F.g,F.b);Et.setAttribute("color",new Ae(Lt,3));let N=new kn({vertexColors:!0,blending:fi,transparent:!0,depthWrite:!1,opacity:0,fog:!1}),V=new Ie(Et,N);V.renderOrder=1,V.frustumCulled=!1,l.add(V);let rt=_(B,.9);return l.add(rt),{i:gt,j:yt,mesh:V,mat:N,tip:rt}}),O=new G(0,1,0),W={pos:new G,quat:new gn,scale:1,portrait:!1,drop:new G,across:new G},et=new G,X=(gt,yt,Et,Bt,Lt)=>{if(!W.portrait){gt.lerpVectors(yt,Et,Bt);return}et.copy(Et).add(W.drop).addScaledVector(W.across,(Lt-2.5)*.28),gt.lerpVectors(et,Et,Bt)},Z=new gn().setFromEuler(new Ni(.1,0,0)),tt=new gn,D=new G(0,1,0),st=(gt,yt)=>yt.copy(gt).multiplyScalar(W.scale).applyQuaternion(a.quaternion).add(a.position);return{layer:l,setAnchor({camPos:gt,camQuat:yt,depth:Et,screenX:Bt,screenY:Lt,vfov:z,aspect:B,heightShare:F,portrait:N}){let V=Math.tan(z/2)*Et,rt=V*B;p.set(Bt*rt,Lt*V,-Et).applyQuaternion(yt),W.pos.copy(gt).add(p),W.quat.copy(yt).multiply(Z),W.scale=F*2*V/yA,W.portrait=N,W.drop.set(0,-.98*V,0).applyQuaternion(yt),W.across.set(rt,0,0).applyQuaternion(yt)},update(gt,yt,Et,Bt=0){let Lt=W.portrait,z=Lt?0:Ri(0,.7,Et);tt.setFromAxisAngle(D,(Lt?.5:.75)*(yt-.4)+.25*Et),a.quaternion.copy(W.quat).multiply(tt),a.position.copy(W.pos),a.position.y+=Bt,p.set(0,-5*z,-14*z),a.position.add(p);let B=W.scale*(1-.4*z),F=W.scale;W.scale=B,t.updateMatrixWorld();let N=!1,V=!1;for(let Q of g){let J=Lt?Ri(.28+.03*Q.k,.9+.015*Q.k,gt):Ri(.03+.05*Q.k,.66+.05*Q.k,gt);if(Q.chip||(Q.src.mesh.visible=!(J>5e-4)),N=N||J>5e-4,Q.g.visible=J>5e-4&&Et<.999,!Q.g.visible){Q.halo.visible=!1;continue}V=!0;let S=J*J*(3-2*J);Q.src.mesh.updateWorldMatrix(!0,!1),Q.src.mesh.matrixWorld.decompose(u,h,d),st(Q.local,Q.world),X(Q.g.position,u,Q.world,S,Q.k);let At=Math.sin(Math.PI*S);Q.g.position.y+=At*(Lt?.8:1.6+.3*Q.k),Q.g.position.z+=At*(Lt?1.2:3-.4*Q.k),f.copy(a.quaternion).multiply(Q.localQ),Q.g.quaternion.copy(h).slerp(f,S),Q.m.rotation.set(At*.9*(Q.k%2?1:-1),At*1.4,0);let Dt=Q.chip||Lt?0:d.x;Q.g.scale.setScalar(Ue.lerp(Dt,Q.s*B,Lt?Math.min(1,S*1.6):S)),Q.halo.position.copy(Q.g.position)}let rt=Lt?Ri(.42,.98,gt):Ri(.06,.9,gt);if(e["dot-spark"].mesh.visible=e["dot-growth"].mesh.visible=!(rt>5e-4),T.visible=rt>5e-4&&Et<.999,T.visible){V=!0;let Q=rt*rt*(3-2*rt);u.copy(n).applyMatrix4(t.matrixWorld),t.getWorldQuaternion(h),st(R,k),X(T.position,u,k,Q,2.5);let J=Math.sin(Math.PI*Q);T.position.y+=J*(Lt?1:3),T.position.z+=J*(Lt?1.5:4),T.quaternion.copy(h).slerp(a.quaternion,Q),T.scale.setScalar(Ue.lerp(Lt?0:t.scale.x,_A*B,Lt?Math.min(1,Q*1.6):Q))}let ht=Ri(.74,.96,yt),I=(T.visible?.2*Math.min(1,rt*3):0)*(1-ht);A.m.position.copy(M).addScaledVector(b,-I),y.m.position.copy(w).addScaledVector(b,I),A.m.rotation.z=.35*I/.2,y.m.rotation.z=-.25*I/.2;let q=Q=>Q===5?T.position:g[Q].g.position;Y.forEach((Q,J)=>{let S=.02+J*.085,At=Ri(S,S+.16,yt),Dt=At>.001&&Et<.999&&(Lt?!0:z<.98);if(Q.mesh.visible=Dt,Q.tip.visible=Dt&&At<.999,!Dt)return;let U=q(Q.i),v=q(Q.j);p.copy(v).sub(U);let K=p.length();Q.mesh.position.copy(U),Q.mesh.quaternion.setFromUnitVectors(O,p.normalize());let nt=B*(Lt?.02:.016);Q.mesh.scale.set(nt,K*At,nt),Q.mat.opacity=1-z,Q.tip.position.copy(U).addScaledVector(p,K*At),Q.tip.material.opacity=.9*Math.sin(Math.PI*At)*(1-z),Q.tip.scale.setScalar(B*.9)});let H=Ri(Lt?.85:.7,1,gt)*(1-z);g.forEach(Q=>{let J=0;Y.forEach((At,Dt)=>{(At.i===Q.k||At.j===Q.k)&&(J=Math.max(J,Ri(.02+Dt*.085,.1+Dt*.085,yt)))}),J*=1-z,Q.front.emissiveIntensity=Q.back.emissiveIntensity=.22*J;let S=Math.max(J,.25*H);Q.halo.visible=Q.g.visible&&S>.003,Q.halo.material.opacity=.7*S,Q.halo.scale.setScalar(B*2.6*Q.s)});let P=ht*(1-z),it=Math.sin(Math.PI*Ri(.8,1,yt))*.5;A.front.emissiveIntensity=A.back.emissiveIntensity=.08*P+.3*it,y.front.emissiveIntensity=y.back.emissiveIntensity=.1*P+.3*it,C.visible=x.visible=T.visible&&P>.003,C.position.copy(T.position),x.position.copy(T.position),C.material.opacity=.6*P,x.material.opacity=.22*P,C.scale.setScalar(B*4.2),x.scale.setScalar(B*8),W.scale=F,l.visible=V;let ut=yt>0&&(Lt?Et<=0:Et<.35)?Math.min(3,Math.floor(yt*4.0001)):-1,St=(Lt?Ri(.75,1,gt):Ri(.55,.95,gt))*(1-z);return{active:ut,presence:St,flying:N}},summitWorld(gt){return gt.copy(T.position)}}}var ks=(r,t,e)=>Ue.smoothstep(e,r,t);function vA(r,t,e){let[n,i]=e[0],[s,o]=e[1],[a,l]=e[2],[c,h]=e[3],f=n-s+a-c,u=i-o+l-h,d,p,_,m,g,T,A,y;if(Math.abs(f)<1e-9&&Math.abs(u)<1e-9)d=s-n,p=c-n,_=n,m=o-i,g=h-i,T=i,A=0,y=0;else{let k=s-a,L=c-a,Y=o-l,O=h-l,W=k*O-L*Y;A=(f*O-L*u)/W,y=(k*u-f*Y)/W,d=s-n+A*s,p=c-n+y*c,_=n,m=o-i+A*o,g=h-i+y*h,T=i}let M=d/r,w=p/t,C=m/r,x=g/t,b=A/r,R=y/t;return`matrix3d(${M},${C},0,${b},${w},${x},0,${R},0,0,1,0,${_},${T},0,1)`}function SA(){let r=document.createElement("canvas");r.width=r.height=128;let t=r.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,.55)"),e.addColorStop(.35,"rgba(255,255,255,.16)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);let n=new $i(r);return n.colorSpace=en,n}function Dx({scene:r,camera:t}){let e=document.getElementById("selected-work"),n=e&&e.querySelector(".showcase__sticky"),i=e&&e.querySelector(".showcase__intro");if(!e||!n||!i)return null;let s=()=>e.querySelector(".showcase__frame"),o=new Cr(new dr({map:SA(),color:new Kt("#FF6A2B"),blending:fi,depthWrite:!1,transparent:!0,opacity:0,fog:!1}));o.renderOrder=-5,o.visible=!1,r.add(o);let a=new G,l=new G,c=new G,h=new G,f=new gn,u=()=>({el:null,box:{x:0,y:0,w:1,h:1},corners:[0,1,2,3].map(()=>new G),centre:new G,fwd:new G,up:new G,width:1,ok:!1}),d={intro:u(),frame:u()},p={w:1,h:1,portrait:!1};function _(x,b,R,k){if(x.el=b,x.ok=!1,!b)return;let L=0,Y=0;for(let tt=b;tt&&tt!==n;tt=tt.offsetParent)L+=tt.offsetLeft,Y+=tt.offsetTop;let O=b.offsetWidth,W=b.offsetHeight;if(!O||!W)return;x.box={x:L,y:Y,w:O,h:W};let et=Math.tan(Ue.degToRad(t.fov)/2),X=p.w/p.h,Z=(tt,D,st)=>st.set((tt/p.w*2-1)*et*X*k,(1-D/p.h*2)*et*k,-k).applyQuaternion(R.quat).add(R.pos);Z(L,Y,x.corners[0]),Z(L+O,Y,x.corners[1]),Z(L+O,Y+W,x.corners[2]),Z(L,Y+W,x.corners[3]),Z(L+O/2,Y+W/2,x.centre),x.fwd.set(0,0,-1).applyQuaternion(R.quat),x.up.set(0,1,0).applyQuaternion(R.quat),x.width=x.corners[0].distanceTo(x.corners[1]),x.ok=!0}let m=new WeakMap;function g(x,b,R){let k=m.get(x);k||(k={},m.set(x,k)),k[b]!==R&&(k[b]=R,x.style[b]=R)}let T=!1,A={introIn:0,introOut:0,frameIn:0,infoIn:0},y=[[0,0],[0,0],[0,0],[0,0]],M=new G,w=new G;function C(x,b,R,k){let L=x.el;if(!x.ok||!L)return!1;f.setFromAxisAngle(x.up,R),t.updateMatrixWorld();for(let Y=0;Y<4;Y++){if(M.copy(x.corners[Y]).sub(x.centre).applyQuaternion(f).add(x.centre).addScaledVector(x.fwd,b).addScaledVector(x.up,k),w.copy(M).applyMatrix4(t.matrixWorldInverse),w.z>-t.near*1.5)return!1;M.project(t),y[Y][0]=(M.x+1)/2*p.w-x.box.x,y[Y][1]=(1-M.y)/2*p.h-x.box.y}return g(L,"transform",vA(x.box.w,x.box.h,y)),!0}return{layout(x,b,R,k){p.w=x,p.h=b,p.portrait=k;for(let L of["intro","frame"]){let Y=d[L];Y.el&&g(Y.el,"transform","")}T=!1,_(d.intro,i,R.intro,k?7:9),_(d.frame,s(),R.frame,k?11:14),o.scale.setScalar(d.frame.width*2.4)},update(x,b,R){if(x<=0&&b<=0&&T)return A;T=x<=0&&b<=0;let k=x>0&&b<=0,L=p.portrait?ks(.07,.18,x):ks(.12,.26,x),Y=ks(.32,.44,x),O=k&&Y<1&&C(d.intro,0,0,0);d.intro.el&&(g(d.intro.el,"visibility",O?"":"hidden"),O||g(d.intro.el,"transform",""));let W=ks(.3,.88,x),et=(1-W)*(1-W)*(p.portrait?22:46),X=(1-W)*.32*-R,Z=(1-W)*-1.2,tt=d.frame.el||s();b>0||x>=1?tt&&(g(tt,"transform",""),g(tt,"visibility","")):tt&&(O=x>.28&&C(d.frame,et,X,Z),g(tt,"visibility",O?"":"hidden"),O||g(tt,"transform",""));let D=ks(.45,.9,x)*(1-ks(0,.5,b));return o.visible=D>.003&&d.frame.ok,o.visible&&(o.position.copy(d.frame.centre).addScaledVector(d.frame.fwd,3+et),o.material.opacity=.32*D),{introIn:L,introOut:Y,frameIn:ks(.3,.4,x),infoIn:ks(.76,.93,x)}},reset(){for(let x of["intro","frame"]){let b=d[x];b.el&&(g(b.el,"transform",""),g(b.el,"visibility",""))}o.visible=!1}}}var fs={source:"ICREATIVE WHITE LOGO PNG.png (2172x724)",viewBox:[171,56,1838,592],colors:{white:"#FDFDFD",orange:"#FD8502",teal:"#02818B"},dot:{cx:223.79,cy:258.61,r:52.31,seamAngleDeg:-32.71},pieces:[{name:"dot-spark",group:"i",role:"spark",cls:2,method:"circle-split",bbox:[171,205,270,290],cx:213.04,cy:240.91,area:4735,d:"M181.8 289.8A52.31 52.31 0 1 1 269.63 233.39Z"},{name:"dot-growth",group:"i",role:"growth",cls:3,method:"circle-split",bbox:[180,232,276,311],cx:235.5,cy:278.53,area:4003,d:"M269.63 233.39A52.31 52.31 0 0 1 181.8 289.8Z"},{name:"i-stem",group:"i",role:"base",cls:1,method:"potrace",bbox:[183,328,259,532],cx:216.21,cy:407.2,area:11668,d:"M 183 430 C 183 486.1, 183.23 532, 183.51 532 C 184.13 532, 194 518.68, 226.68 473.69 C 240.75 454.34, 253.77 436.62, 255.63 434.33 L 259 430.16 259 379.08 L 259 328 221 328 L 183 328 183 430"},{name:"i-cut",group:"i",role:"growth",cls:3,method:"potrace",bbox:[183,431,259,533],cx:233.29,cy:498.01,area:3912,d:"M 253.73 436.75 C 251.32 439.91, 239.06 456.68, 226.48 474 C 213.91 491.32, 199.02 511.69, 193.4 519.25 L 183.17 533 221.09 533 L 259 533 259 482 C 259 453.95, 258.8 431, 258.56 431 C 258.32 431, 256.14 433.59, 253.73 436.75"},{name:"C",group:"C",role:"base",cls:1,method:"potrace",bbox:[313,237,572,537],cx:429.52,cy:387.84,area:39129,d:"M 460 238 C 447.37 239.45, 432.07 242.94, 422.04 246.65 C 382 261.48, 347.2 292.59, 328.19 330.57 C 323.76 339.42, 318.31 355.73, 315.88 367.35 C 314.3 374.92, 313.75 381.19, 313.73 392 C 313.68 421.27, 320.86 445.46, 336.75 469.5 C 347.29 485.44, 363.47 501.5, 379.37 511.8 C 388.38 517.64, 406.45 526.15, 416.5 529.29 C 440.32 536.74, 465.95 538.86, 487.5 535.18 C 509.05 531.5, 524.56 525.49, 541.25 514.38 C 551.83 507.34, 564.99 495.14, 569.56 488.14 L 572.41 483.78 566.45 478.36 C 563.18 475.38, 557.58 470.49, 554 467.5 C 550.42 464.51, 543.23 458.45, 538.01 454.03 C 532.78 449.61, 527.9 446, 527.14 446 C 526.39 446, 522.86 448.04, 519.29 450.53 C 506.15 459.72, 494.08 464.43, 479.47 466.05 C 454.8 468.81, 429.58 460.18, 412.17 443.04 C 403.76 434.76, 399.07 426.99, 394.36 413.5 L 391.56 405.5 391.59 392 C 391.61 376.29, 393.01 369.76, 399.06 357.07 C 406.66 341.13, 416.09 330.42, 431 320.81 C 445.85 311.24, 461.34 307.2, 478.81 308.34 C 494.9 309.39, 505.78 313.22, 520 322.86 L 527.5 327.94 537.53 317.72 C 551.84 303.13, 572 280.95, 572 279.79 C 572 277.87, 558.63 265, 551.62 260.16 C 537.03 250.1, 518.67 242.72, 500.43 239.59 C 489.08 237.64, 469.7 236.88, 460 238"},{name:"R",group:"R",role:"base",cls:1,method:"potrace",bbox:[591,242,801,533],cx:679.28,cy:383.01,area:49964,d:"M 591 387.5 L 591 533 696 533 C 753.75 533, 801 532.79, 801 532.54 C 801 531.86, 789.1 518.32, 768.5 495.56 C 758.6 484.63, 744.05 468.44, 736.16 459.59 C 720.31 441.8, 712.62 433.33, 696.12 415.5 L 685.02 403.5 688.76 402.81 C 690.82 402.43, 699.78 402.09, 708.68 402.06 C 727.34 401.99, 734.66 400.75, 747 395.55 C 763.6 388.55, 780.21 373.56, 786.95 359.5 C 798.61 335.16, 798.65 311.15, 787.08 286.43 C 779.49 270.23, 762.41 254.84, 744.1 247.72 C 729.73 242.13, 727.67 242, 656.41 242 L 591 242 591 387.5"},{name:"E1-top",group:"E1",role:"base",cls:1,method:"rect",bbox:[817,243,982,318],cx:898.98,cy:279.88,area:12324,d:"M817.41 243.36H981.94V317.54H817.41Z"},{name:"E1-mid",group:"E1",role:"base",cls:1,method:"rect",bbox:[817,352,982,425],cx:899.42,cy:387.96,area:11958,d:"M817.54 351.87H981.84V424.61H817.54Z"},{name:"E1-bot",group:"E1",role:"base",cls:1,method:"rect",bbox:[817,460,982,533],cx:899.1,cy:496.52,area:11865,d:"M817.41 460.56H981.83V532.96H817.41Z"},{name:"A",group:"A",role:"base",cls:1,method:"potrace",bbox:[993,243,1252,533],cx:1122.79,cy:420.76,area:33737,d:"M 1119.46 243.91 C 1118.25 244.43, 1116.38 247.35, 1114.83 251.14 C 1113.41 254.64, 1105.61 272.8, 1097.5 291.5 C 1089.39 310.2, 1080.74 330.23, 1078.29 336 C 1073.88 346.39, 1072.39 349.75, 1059.71 378 C 1056.13 385.98, 1051.64 396.1, 1049.74 400.5 C 1040.41 422.03, 1036.47 431.02, 1033.85 436.71 C 1032.28 440.12, 1031 443.13, 1031 443.4 C 1031 443.67, 1027.57 451.67, 1023.37 461.19 C 1019.18 470.71, 1014.04 482.55, 1011.96 487.5 C 1009.88 492.45, 1006.51 500.32, 1004.47 505 C 999.71 515.91, 993.08 531.98, 993.32 532.06 C 995.12 532.63, 1056.39 533.06, 1063.24 532.55 L 1072.8 531.83 1078.52 518.66 C 1084.11 505.81, 1096.37 478.5, 1101.94 466.5 C 1116.17 435.86, 1122.36 423, 1122.88 423 C 1123.54 423.01, 1129.97 436.22, 1138.23 454.5 C 1149.46 479.38, 1168.93 522.82, 1170.84 527.25 L 1172.89 532 1177.69 532.15 C 1194.79 532.67, 1251.2 532.48, 1251.57 531.89 C 1251.81 531.5, 1250.38 527.43, 1248.38 522.84 C 1246.39 518.25, 1243.3 510.9, 1241.51 506.5 C 1233.8 487.53, 1220.75 456.06, 1218.5 451 C 1216.43 446.36, 1209.87 430.94, 1192.86 390.75 C 1191.29 387.04, 1188.72 380.96, 1187.17 377.25 C 1185.61 373.54, 1182.26 365.55, 1179.72 359.5 C 1169.31 334.7, 1163.41 320.75, 1157.51 307 C 1154.08 299.02, 1146.66 281.7, 1141.01 268.5 C 1135.36 255.3, 1130.68 244.43, 1130.62 244.34 C 1130.04 243.59, 1121.05 243.24, 1119.46 243.91"},{name:"T",group:"T",role:"base",cls:1,method:"potrace",bbox:[1225,242,1434,533],cx:1328.67,cy:352.47,area:32633,d:"M 1226.25 242.68 C 1225.28 243.06, 1225 251.98, 1225 282.58 L 1225 322 1257.99 322 L 1290.99 322 1291.24 427.11 L 1291.5 532.22 1329 532.36 L 1366.5 532.5 1366.67 428 C 1366.76 370.52, 1366.88 323.16, 1366.92 322.75 C 1366.96 322.34, 1380.67 322, 1397.38 322 C 1414.08 322, 1429.16 321.72, 1430.88 321.38 L 1434 320.75 1434 281.98 L 1434 243.22 1431.61 242.62 C 1428.78 241.91, 1228.07 241.97, 1226.25 242.68"},{name:"bulb-glass",group:"bulb",role:"spark",cls:1,method:"potrace",bbox:[1420,56,1595,271],cx:1507.38,cy:156.69,area:27553,d:"M 1493.72 57.52 C 1483.89 59.38, 1469.77 64.81, 1462.28 69.59 C 1454.86 74.34, 1443.02 85.78, 1437.37 93.66 C 1431.58 101.74, 1425.71 114.44, 1422.88 125 C 1421.08 131.74, 1420.6 136.19, 1420.59 146.5 C 1420.56 161.76, 1422.62 170.62, 1429.09 183.05 C 1435.73 195.82, 1449.41 210.2, 1462.25 217.91 C 1466.63 220.54, 1466.38 218.74, 1466.11 246.43 C 1466 256.83, 1466.2 266.62, 1466.54 268.18 L 1467.16 271 1497.83 271 C 1514.7 270.99, 1532.89 270.7, 1538.25 270.34 L 1548 269.7 1548.07 246.6 C 1548.11 233.9, 1548.45 222.72, 1548.82 221.78 C 1549.2 220.83, 1551.81 218.58, 1554.61 216.78 C 1567.19 208.71, 1578.92 196.47, 1585.76 184.3 C 1587.55 181.11, 1590.22 174.9, 1591.69 170.5 L 1594.37 162.5 1594.43 145.5 C 1594.49 131.91, 1594.13 127.1, 1592.63 121.5 C 1588.34 105.42, 1578.56 89.36, 1566.06 77.86 C 1557.13 69.65, 1542.9 62.08, 1530.5 58.96 C 1519.78 56.25, 1503.69 55.62, 1493.72 57.52"},{name:"bulb-band-1",group:"bulb",role:"spark",cls:2,method:"rect",bbox:[1466,280,1549,290],cx:1506.8,cy:284.51,area:826,d:"M1465.96 279.72H1548.52V290.28H1465.96Z"},{name:"bulb-band-2",group:"bulb",role:"spark",cls:2,method:"rect",bbox:[1466,297,1548,308],cx:1506.54,cy:301.99,area:901,d:"M1466.01 296.65H1548.48V307.58H1466.01Z"},{name:"bulb-cap",group:"bulb",role:"base",cls:1,method:"rect",bbox:[1485,316,1531,327],cx:1507.5,cy:321,area:506,d:"M1484.67 316.35H1531.22V327.29H1484.67Z"},{name:"bulb-stem",group:"bulb",role:"base",cls:1,method:"rect",bbox:[1466,338,1548,532],cx:1506.47,cy:434.56,area:15865,d:"M1466.42 338.36H1547.61V532.23H1466.42Z"},{name:"V",group:"V",role:"base",cls:1,method:"potrace",bbox:[1563,242,1834,532],cx:1696.04,cy:360.51,area:36329,d:"M 1563 242.93 C 1563 244.1, 1568.61 258.51, 1595.71 327 C 1603.91 347.71, 1620.51 388.4, 1627.74 405.5 C 1630.77 412.65, 1635.6 424.35, 1638.48 431.5 C 1641.36 438.65, 1646.22 450.35, 1649.29 457.5 C 1652.36 464.65, 1658.48 479.27, 1662.89 490 C 1672.15 512.52, 1679.18 528.96, 1680.32 530.75 C 1680.89 531.64, 1684.81 532, 1694.1 532 L 1707.09 532 1709.55 529.55 C 1710.89 528.19, 1712 526.6, 1712 526.01 C 1712 525.41, 1713.98 520.55, 1716.39 515.21 C 1718.81 509.87, 1722.36 501.9, 1724.28 497.5 C 1726.2 493.1, 1729.35 485.9, 1731.27 481.5 C 1733.2 477.1, 1739.14 463.38, 1744.48 451 C 1749.83 438.63, 1757.58 420.85, 1761.7 411.5 C 1765.83 402.15, 1770.74 391.01, 1772.61 386.75 C 1774.47 382.49, 1777.55 375.51, 1779.44 371.25 C 1781.33 366.99, 1784.88 358.77, 1787.32 353 C 1789.76 347.23, 1797.05 330.35, 1803.5 315.5 C 1809.96 300.65, 1817.45 283.32, 1820.16 277 C 1822.87 270.68, 1826.4 262.57, 1828.01 259 C 1830.62 253.18, 1834 244.36, 1834 243.37 C 1834 243.17, 1816.06 243, 1794.14 243 L 1754.29 243 1750.25 252.25 C 1748.02 257.34, 1739.81 276.57, 1732 295 C 1724.19 313.43, 1715.42 333.9, 1712.52 340.5 C 1709.61 347.1, 1706.07 355.44, 1704.64 359.03 C 1703.2 362.63, 1700.75 368.22, 1699.18 371.47 L 1696.33 377.36 1683.26 344.43 C 1676.07 326.32, 1663.99 295.86, 1656.42 276.75 L 1642.66 242 1602.83 242 C 1579.05 242, 1563 242.37, 1563 242.93"},{name:"E2-top",group:"E2",role:"base",cls:1,method:"rect",bbox:[1848,243,2009,318],cx:1928.06,cy:279.8,area:11983,d:"M1848.46 243.35H2008.95V317.52H1848.46Z"},{name:"E2-mid",group:"E2",role:"base",cls:1,method:"rect",bbox:[1848,352,2009,425],cx:1928.22,cy:387.86,area:11681,d:"M1848.47 351.88H2008.96V424.58H1848.47Z"},{name:"E2-bot",group:"E2",role:"base",cls:1,method:"rect",bbox:[1848,460,2009,532],cx:1928.1,cy:495.52,area:11575,d:"M1848.45 460.31H2008.96V532.23H1848.45Z"},{name:"ag-A",group:"agency",role:"base",cls:1,method:"potrace",bbox:[1475,570,1555,646],cx:1514.24,cy:611.25,area:2238,d:"M 1504.91 576.75 C 1499.88 587.67, 1475 644.97, 1475 645.62 C 1475 645.88, 1477.98 645.96, 1481.62 645.8 L 1488.25 645.5 1492.4 636 L 1496.56 626.5 1514.31 626.23 L 1532.07 625.95 1536.68 635.98 L 1541.3 646 1548.11 646 L 1554.92 646 1551.57 638.25 C 1549.73 633.99, 1544.96 623.3, 1540.98 614.5 C 1533.62 598.23, 1526.31 581.92, 1522.94 574.25 L 1521.07 570 1514.55 570 L 1508.02 570 1504.91 576.75 M 1513.01 586.48 C 1512.4 588.08, 1510.62 592.34, 1509.04 595.94 C 1507.47 599.55, 1505.07 605.27, 1503.7 608.66 L 1501.21 614.82 1511.36 615.43 C 1516.93 615.76, 1522.92 615.69, 1524.65 615.26 L 1527.8 614.5 1520.96 599.03 L 1514.12 583.56 1513.01 586.48"},{name:"ag-G",group:"agency",role:"base",cls:1,method:"potrace",bbox:[1576,569,1647,647],cx:1612.26,cy:609.8,area:2546,d:"M 1604 570.53 C 1597.87 572.23, 1589.31 577.67, 1585.31 582.39 C 1578.67 590.26, 1575.29 603.64, 1576.94 615.55 C 1578.78 628.76, 1585.73 638.64, 1596.85 643.85 C 1601.83 646.19, 1603.68 646.49, 1612.5 646.42 C 1623.59 646.34, 1627.52 645.12, 1633.46 639.9 L 1637 636.79 1637.01 639.15 C 1637.02 640.44, 1637.3 642.51, 1637.63 643.75 C 1638.14 645.65, 1638.92 646, 1642.62 646 L 1647 646 1647 625.5 C 1647 609.78, 1646.71 604.99, 1645.75 604.97 C 1645.06 604.95, 1638.66 604.7, 1631.51 604.42 C 1614.41 603.74, 1614 603.86, 1614 609.52 L 1614 614 1619.25 614.01 C 1622.14 614.01, 1626.86 614.3, 1629.75 614.65 L 1635 615.28 1634.98 618.39 C 1634.95 622.8, 1631.82 629.13, 1628.15 632.22 C 1621.27 638.01, 1608.25 637.84, 1600.1 631.85 C 1594.56 627.76, 1591.25 621.81, 1590.12 613.87 C 1588.04 599.13, 1593.83 586.9, 1605.21 582.01 C 1609.36 580.22, 1611.67 579.86, 1616.51 580.25 C 1623.85 580.84, 1628.28 582.96, 1633.19 588.24 L 1636.88 592.21 1641.41 588.96 L 1645.93 585.71 1643.92 582.88 C 1640.84 578.56, 1633.82 573.21, 1628.91 571.43 C 1622.5 569.12, 1610.63 568.69, 1604 570.53"},{name:"ag-E",group:"agency",role:"base",cls:1,method:"potrace",bbox:[1680,571,1732,646],cx:1699.46,cy:608.07,area:2086,d:"M 1680 608.5 L 1680 646 1705.48 646 L 1730.96 646 1731.56 643.6 C 1731.89 642.28, 1732.02 640.14, 1731.83 638.85 L 1731.5 636.5 1712.25 636.23 L 1693 635.96 1693 624.48 L 1693 613 1710.5 613 L 1728 613 1728 608 L 1728 603 1713.63 603 C 1697.35 603, 1693.39 602.47, 1692.51 600.16 C 1692.16 599.27, 1692.19 594.59, 1692.57 589.77 L 1693.26 581 1712.13 581 L 1731 581 1731 576 L 1731 571 1705.5 571 L 1680 571 1680 608.5"},{name:"ag-N",group:"agency",role:"base",cls:1,method:"potrace",bbox:[1762,571,1826,647],cx:1793.58,cy:608.09,area:2610,d:"M 1762 608.39 L 1762 645.78 1765.25 646.14 C 1767.04 646.34, 1769.73 646.36, 1771.23 646.18 L 1773.97 645.87 1774.23 618.23 L 1774.5 590.59 1780.92 600.04 C 1789.88 613.23, 1812.88 644.81, 1814.07 645.54 C 1814.61 645.88, 1817.52 646.4, 1820.53 646.72 L 1826 647.28 1826 609.14 L 1826 571 1820 571 L 1814 571 1814 598 C 1814 612.85, 1813.66 624.99, 1813.25 624.98 C 1812.84 624.97, 1810.03 621.28, 1807 616.79 C 1803.97 612.3, 1798.13 604.02, 1794 598.39 C 1789.88 592.77, 1783.83 584.31, 1780.56 579.59 L 1774.61 571 1768.31 571 L 1762 571 1762 608.39"},{name:"ag-C",group:"agency",role:"base",cls:1,method:"potrace",bbox:[1853,569,1920,648],cx:1881.22,cy:608.35,area:1950,d:"M 1880.5 570.35 C 1877.75 571.06, 1873.97 572.44, 1872.1 573.42 C 1866.74 576.23, 1859.65 583.97, 1856.44 590.51 L 1853.5 596.5 1853.5 609 L 1853.5 621.5 1856.22 627.03 C 1860.34 635.42, 1865.22 640.49, 1872.77 644.21 L 1879.46 647.5 1889.48 647.45 C 1898.28 647.41, 1900.18 647.08, 1905.13 644.69 C 1910.36 642.16, 1920 633.35, 1920 631.09 C 1920 630.54, 1918.08 628.78, 1915.74 627.17 L 1911.48 624.24 1907.76 628.52 C 1898.17 639.54, 1883.92 639.96, 1873.43 629.53 C 1867.48 623.61, 1866 619.18, 1866 607.25 C 1866 600.81, 1866.46 598.46, 1868.58 594.22 C 1876.52 578.29, 1895.84 575.23, 1907.43 588.06 C 1909.39 590.23, 1911.33 591.98, 1911.75 591.96 C 1912.16 591.94, 1914.19 590.48, 1916.26 588.71 L 1920.02 585.49 1917.56 581.87 C 1914.69 577.66, 1907.16 572.38, 1902.06 571.03 C 1895.64 569.32, 1885.68 569.01, 1880.5 570.35"},{name:"ag-Y",group:"agency",role:"base",cls:1,method:"potrace",bbox:[1941,571,2009,647],cx:1974.35,cy:601.42,area:1546,d:"M 1942.1 573.25 C 1942.75 574.49, 1948.95 584.95, 1955.89 596.5 L 1968.5 617.5 1969 632 L 1969.5 646.5 1975 646.5 L 1980.5 646.5 1981 632.5 L 1981.5 618.5 1993.91 597 C 2000.74 585.17, 2006.98 574.49, 2007.78 573.25 L 2009.23 571 2002.37 571.03 L 1995.5 571.06 1990.21 580.28 C 1987.3 585.35, 1982.78 593.22, 1980.15 597.77 L 1975.38 606.04 1968.35 594.27 C 1964.48 587.8, 1959.86 579.91, 1958.08 576.75 L 1954.85 571 1947.89 571 L 1940.93 571 1942.1 573.25"}]};var Nx=()=>new Promise(r=>requestAnimationFrame(()=>r()));async function cC(r){let t=document.documentElement,e=document.getElementById("home"),n=document.getElementById("h3dCanvas"),i=new URLSearchParams(location.search),s=t.classList.contains("motion-reduce"),o=matchMedia("(hover: hover) and (pointer: fine)").matches,a=i.get("h3d"),l=matchMedia("(pointer: coarse)").matches,c=(navigator.hardwareConcurrency||8)<=4||(navigator.deviceMemory||8)<=4,h=i.get("tier")||(l||innerWidth<760?"mobile":c?"mid":"high"),f={high:{dpr:2,shadow:2048,bevelSeg:4,curveSeg:14},mid:{dpr:1.5,shadow:1024,bevelSeg:3,curveSeg:10},mobile:{dpr:1.5,shadow:1024,bevelSeg:2,curveSeg:8}}[h]||{dpr:1.5,shadow:1024,bevelSeg:3,curveSeg:10},u=.01,[d,p,_,m]=fs.viewBox,g=d+_/2,T=p+m/2,A=52,y=7,M=4.5,w=-(p+m-T)*u,C={white:"#FDFDFD",orange:fs.colors.orange,teal:fs.colors.teal},x=fs.dot.seamAngleDeg*Math.PI/180,b=new vt(-Math.sin(x),-Math.cos(x)),R=new vt(Math.cos(x),-Math.sin(x)),k=(ot,Pt)=>new G((ot-g)*u,-(Pt-T)*u,0),L=k(1507,160),Y=k(fs.dot.cx,fs.dot.cy),O=new Eu({canvas:n,context:r,antialias:!0,stencil:!1});O.outputColorSpace=en,O.toneMapping=Oi,O.shadowMap.enabled=h!=="mobile",O.shadowMap.type=Nh;let W=f.dpr;O.setPixelRatio(Math.min(devicePixelRatio||1,W)),n.addEventListener("webglcontextlost",ot=>{ot.preventDefault(),et("context-lost")},!1);function et(ot){t.classList.remove("has-webgl"),t.classList.add("no-webgl"),e&&e.setAttribute("data-h3d","fallback:"+ot)}let X=new Qr;X.background=new Kt("#05070A");let Z=new ua(O),tt=new Pu,D=Z.fromScene(tt,.04).texture;tt.traverse(ot=>{ot.geometry&&ot.geometry.dispose(),ot.material&&ot.material.dispose()}),Z.dispose(),X.environment=D,X.environmentIntensity=0;let st=new Nn(26,1,.5,2e3),gt=new G,yt=new G,Et=new vt,Bt=new vt,Lt=await Rx(O,h,{portrait:innerHeight>innerWidth,yieldFn:Nx});X.add(Lt.group);let z=new na("#FFFFFF",0);z.castShadow=h!=="mobile",z.shadow.mapSize.set(f.shadow,f.shadow),Object.assign(z.shadow.camera,{left:-14,right:14,top:9,bottom:-8,near:1,far:70}),z.shadow.bias=-4e-4,z.shadow.normalBias=.025,z.shadow.intensity=.7,X.add(z,z.target);let B=new G(-7,11,15),F=new G(-24,1.5,4),N=new na("#A9DDE0",0);N.position.set(7,9,-12),X.add(N);let V=new $s("#FFB463",0,11,2);V.position.copy(L).add(new G(0,-.2,.9)),X.add(V);let rt=15/Math.hypot(-7,11,15),ht={key:Math.PI/rt,rim:.7,env:.015,exposure:1,cc:0,rough:.55,spec:.1};for(let ot of Object.keys(ht))i.has("L"+ot)&&(ht[ot]=+i.get("L"+ot));O.toneMappingExposure=ht.exposure;let I=new Gl,q=new Kn;X.add(q);let H={fog:!1,roughness:ht.rough,metalness:0,specularIntensity:ht.spec,clearcoat:ht.cc,clearcoatRoughness:.3},P={white:new vs({color:C.white,...H}),orange:new vs({color:C.orange,...H,emissive:C.orange,emissiveIntensity:0}),teal:new vs({color:C.teal,...H,emissive:C.teal,emissiveIntensity:0}),glass:new vs({color:C.white,...H,emissive:"#FFC27E",emissiveIntensity:0})},it=ot=>{let Pt=ot.clone();return Pt.clearcoat=.25,Pt.roughness=.5,Pt},ut={white:it(P.white),orange:it(P.orange),teal:it(P.teal),glass:it(P.glass)},St={1:"white",2:"orange",3:"teal"};function Q(ot){let Pt=Math.sin(ot*127.1+311.7)*43758.5453;return Pt-Math.floor(Pt)}function J(ot,Pt){let Vt=ot.method==="potrace"?' fill-rule="evenodd"':"",ce=I.parse(`<svg xmlns="http://www.w3.org/2000/svg"><path transform="scale(1,-1)" d="${ot.d}"${Vt}/></svg>`).paths.flatMap(vr=>Gl.createShapes(vr)),xe=Math.min(ot.bbox[2]-ot.bbox[0],ot.bbox[3]-ot.bbox[1]),Ge=Math.min(M,xe*.16),ai=Math.min(y,xe*.25),He=new vl(ce,{depth:A,curveSegments:f.curveSeg,bevelEnabled:!0,bevelThickness:ai,bevelSize:Ge,bevelOffset:-Ge,bevelSegments:f.bevelSeg});He.translate(-ot.cx,ot.cy,-A/2),He.scale(u,u,u);let li=ot.name==="bulb-glass"?"glass":St[ot.cls],mn=new Ie(He,[P[li],ut[li]]);mn.castShadow=mn.receiveShadow=!0,ot.name==="bulb-glass"&&(mn.castShadow=!1);let Hr=k(ot.cx,ot.cy),qn=new _n;return qn.position.copy(Hr),qn.add(mn),q.add(qn),{name:ot.name,role:ot.role,holder:qn,mesh:mn,home:Hr,m:Ue.clamp(Math.sqrt(ot.area/12e3),.55,1.9),floorOff:(ot.bbox[3]-ot.cy)*u,spin:(Q(Pt)<.5?-1:1)*(.35+.65*Q(Pt+7)),ex:{z:(Q(Pt+21)-.35)*5,rx:(Q(Pt+23)-.5)*.9,ry:(Q(Pt+29)-.5)*1.1},p:new G,v:new G,r:new G,w:new G,tp:new G,tr:new G,glow:0}}let S=[];for(let ot=0;ot<fs.pieces.length;ot++)S.push(J(fs.pieces[ot],ot)),ot%6===5&&await Nx();let At=Object.fromEntries(S.map(ot=>[ot.name,ot])),Dt=At["dot-spark"],U=At["dot-growth"],v=At["bulb-glass"],K=Lx({scene:X,logo:q,byName:At,DOT:Y,SEAM_N:b,MAT:P,SIDE:ut}),nt=document.getElementById("who"),ft=nt?[...nt.querySelectorAll(".who__step")]:[],wt={pos:new G,dir:new G,quat:new gn},bt=new G(-8,1.6,-32),dt=new G(-.42,.02,-1).normalize(),pt=new Nn,It=1,Wt=Dx({scene:X,camera:st}),Nt=document.getElementById("selected-work"),Ut={off:new G,dir:new G},Ct=(ot,Pt,Vt)=>Ue.smoothstep(Vt,ot,Pt),Qt=ot=>.22*Ct(0,.3,ot)+.78*Ct(.26,1,ot),ne=new G,j="";function Ft(ot,Pt,Vt,de,ce,xe,Ge=0){if(ie.portrait){let li=Qt(Vt),mn=2.2*Pt+9*li+3*Ct(0,1,de)+14*Ge;ce.set(gt.x+3*Ge,gt.y+1.2*li+2*Ge,gt.z-mn),xe.set(yt.x,yt.y+1.2*li,-mn-10*li).sub(ce).normalize();return}let ai=Ct(.1,1,ot),He=Ct(0,1,de);ce.lerpVectors(gt,wt.pos,ai),ce.x+=1.6*Pt*It,ce.y+=-.3*Pt,ce.z+=-.8*Pt,ce.addScaledVector(Ut.off,Qt(Vt)),ce.x+=6*It*He,ce.y+=5*He,ce.z+=-8*He,xe.copy(yt).sub(ce).normalize().lerp(wt.dir,ai).normalize(),xe.lerp(Ut.dir,Ct(0,1,Vt)).normalize(),ne.copy(Lt.galaxy).sub(ce).normalize(),xe.lerp(ne,Ct(.1,.95,de)).normalize(),Ge>0&&(ce.x+=-12*It*Ge,ce.y+=3*Ge,ce.z+=-26*Ge,xe.applyAxisAngle(mt,.55*It*Ge).normalize())}let mt=new G(0,1,0),Ot={pos:new G,dir:new G};function zt(ot,Pt,Vt,de){return Ft(ot,Pt,Vt,de,Ot.pos,Ot.dir),pt.position.copy(Ot.pos),pt.lookAt(Ot.pos.clone().add(Ot.dir)),{pos:Ot.pos.clone(),quat:pt.quaternion.clone()}}let _t={radius:3.1,push:.38,lift:1.05,tilt:.3,maxXY:.75,maxZ:1.6},Rt={base:{f:2.2,z:.58,push:1,lift:1,spin:1},spark:{f:3.1,z:.42,push:1.15,lift:1.25,spin:1.35},growth:{f:1.5,z:.82,push:.75,lift:.8,spin:.6}},Mt=1,te=1;function Tt(){let ot=document.createElement("canvas");ot.width=ot.height=128;let Pt=ot.getContext("2d"),Vt=Pt.createRadialGradient(64,64,0,64,64,64);Vt.addColorStop(0,"rgba(255,214,160,1)"),Vt.addColorStop(.25,"rgba(253,150,40,.45)"),Vt.addColorStop(1,"rgba(253,133,2,0)"),Pt.fillStyle=Vt,Pt.fillRect(0,0,128,128);let de=new $i(ot);return de.colorSpace=en,de}let ee=new Cr(new dr({map:Tt(),blending:fi,depthWrite:!1,transparent:!0,opacity:0,fog:!1}));ee.scale.set(4.2,4.2,1),X.add(ee);function Yt(){let ot=document.createElement("canvas");ot.width=256,ot.height=128;let Pt=ot.getContext("2d");Pt.scale(2,1);let Vt=Pt.createRadialGradient(64,64,0,64,64,64);Vt.addColorStop(0,"rgba(70,120,130,.55)"),Vt.addColorStop(.45,"rgba(30,60,70,.22)"),Vt.addColorStop(1,"rgba(0,0,0,0)"),Pt.fillStyle=Vt,Pt.fillRect(0,0,256,128);let de=new $i(ot);return de.colorSpace=en,de}let ae=new Cr(new dr({map:Yt(),blending:fi,depthWrite:!1,transparent:!0,opacity:0,fog:!1}));ae.scale.set(34,15,1),ae.position.set(0,.3,-9),ae.renderOrder=-6,q.add(ae);let ie={w:1,h:1,portrait:!1},pe=0,ke=0;function Qe(ot){if(a==="silhouette"&&t.classList.contains("h3d-silhouette")){be();return}let Pt=n.parentElement.getBoundingClientRect();if(ot!==!0&&l&&pe&&Math.round(Pt.width)===pe&&Math.abs(Pt.height-ke)/ke<.2)return;pe=Math.round(Pt.width),ke=Pt.height,ie.w=Math.max(1,Pt.width),ie.h=Math.max(1,Pt.height),ie.portrait=ie.h>ie.w,O.setPixelRatio(Math.min(devicePixelRatio||1,W)),O.setSize(ie.w,ie.h,!1),st.aspect=ie.w/ie.h;let Vt=ie.portrait?.9:ie.w<1100?.76:.64,de=ie.portrait?.3:.48,ce=Ue.degToRad(st.fov),xe=2*Math.atan(Math.tan(ce/2)*st.aspect),Ge=_*u/Vt/(2*Math.tan(xe/2)),ai=m*u/de/(2*Math.tan(ce/2)),He=Math.max(Ge,ai),li=ie.portrait?.5:.3;yt.set(0,-li*m*u*(ie.portrait?1.25:1),0);let mn=document.querySelector(".h3d__copy");if(ie.portrait&&mn){let vr=Math.max(156,mn.offsetTop-18),Sc=vr-76,Ua=Math.tan(ce/2);He=Math.max(Ge,m*u*ie.h/(2*Ua*.82*Sc));let Yi=ie.h/(2*He*Ua);yt.set(0,-(ie.h/2-(76+vr)/2)/Yi,0)}gt.set(0,yt.y+He*.085,He),Lt.setPixelRatio(O.getPixelRatio()),Lt.setPortrait(ie.portrait),It=t.dir==="rtl"?-1:1,ie.portrait?(pt.position.copy(gt),pt.lookAt(yt),K.setAnchor({camPos:gt,camQuat:pt.quaternion,depth:18,screenX:0,screenY:.38,vfov:Ue.degToRad(st.fov),aspect:st.aspect,heightShare:.31,portrait:!0})):(wt.pos.copy(gt).add(bt.clone().setX(bt.x*It)),wt.dir.copy(dt).setX(dt.x*It).normalize(),pt.position.copy(wt.pos),pt.lookAt(wt.pos.clone().add(wt.dir)),wt.quat.copy(pt.quaternion),K.setAnchor({camPos:wt.pos,camQuat:wt.quat,depth:22,screenX:.47*It,screenY:-.08,vfov:Ue.degToRad(st.fov),aspect:st.aspect,heightShare:.6,portrait:!1}),Ut.off.copy(wt.dir).multiplyScalar(18),Ut.off.y+=1.5,Ut.dir.set(dt.x*.45*It,.06,-1).normalize()),st.updateProjectionMatrix(),Wt&&!s&&Wt.layout(ie.w,ie.h,{intro:zt(1,1,.24,0),frame:zt(1,1,1,0)},ie.portrait),be()}let Le=!1,Fe=0,_e=0,Xe=!s&&!a,Pe=!0,ln=[],qe={req:0,why:{}};function be(){qe.req++,!(Le||!Pe||document.hidden)&&(Le=!0,_e=performance.now(),requestAnimationFrame(Zt))}let je=new El,cn=new vt,Xi=new Di(new G(0,0,1),0),kr=new G,se={world:new G,smooth:new G,vel:new G,has:!1,inside:!1,presence:0},Ce=0,vn=0,Ln=0,E=0,$=new G,ct=new G,at=new G,lt=new G,kt=new G,qt=1,Gt=1;function Zt(ot){if(!Pe||document.hidden){Le=!1;return}let Pt=Math.min((ot-_e)/1e3,1/30);_e=ot,ln.length<240&&ln.push(Pt);let Vt=Xe;if(se.has){let xt=se.smooth.clone();se.smooth.lerp(se.world,1-Math.exp(-Pt*18));let Ze=se.smooth.clone().sub(xt).divideScalar(Math.max(Pt,.001));se.vel.lerp(Ze,1-Math.exp(-Pt*12))}let de=he.active&&Ln<.02,ce=(se.inside||de)&&!Xe&&!s;se.presence+=((ce?1:0)-se.presence)*(1-Math.exp(-Pt*(ce?de?14:6:3))),!ce&&se.presence<.002&&(se.presence=0),se.presence>0&&(Vt=!0,qe.why.presence=(qe.why.presence||0)+1);let xe=se.vel.length(),Ge=1+Math.min(.8,xe/30);Et.lerp(Bt,1-Math.exp(-Pt*3)),Et.distanceTo(Bt)>1e-4&&(Vt=!0,qe.why.parallax=(qe.why.parallax||0)+1),E+=(Ln-E)*(1-Math.exp(-Pt*(ie.portrait?16:7)));let ai=Ln-E;Math.abs(ai)>.12&&(E=Ln-Math.sign(ai)*.12),Math.abs(Ln-E)>1e-4?(Vt=!0,qe.why.scroll=(qe.why.scroll||0)+1):E=Ln;let He=(xt,Ze,Yn)=>Ue.smoothstep(Yn,xt,Ze),li=(s?0:E)*5,mn=Ue.clamp(li,0,1),Hr=Ue.clamp(li-1,0,1),qn=Ue.clamp(li-2,0,1),vr=Ue.clamp(li-3,0,1),Sc=Ue.clamp(li-4,0,1),Ua=mn,Yi,Ux,Fx;if(ie.portrait){Yi=He(0,1,Ua),Ux=0,Fx=0;let xt=-10*Yi,Ze=gt.z-xt,Yn=ie.h/(2*Ze*Math.tan(Ue.degToRad(st.fov)/2));q.position.set(0,Ua*qt*1.15/Yn,xt),q.rotation.x=-.38*Yi,Ft(mn,Hr,qn,vr,$,ct,Sc),$.x+=Et.x*.5,$.y+=Et.y*.3,st.position.copy($),st.lookAt($.x+ct.x,$.y+ct.y,$.z+ct.z)}else{Yi=He(0,.9,mn),q.position.set(16*It*He(.3,1,mn),2.2*Yi,-55*Yi),q.rotation.x=-.14*Yi,Ft(mn,Hr,qn,vr,$,ct,Sc);let xt=1-He(.2,.8,qn);$.x+=Et.x*1.1*xt,$.y+=Et.y*.6*xt,st.position.copy($),st.lookAt($.x+ct.x,$.y+ct.y,$.z+ct.z)}let wm=0;if(ie.portrait&&qn>0){let xt=Math.max(6,18-(2.2*Hr+9*Qt(qn)));wm=qn*Gt/(ie.h/(2*xt*Math.tan(Ue.degToRad(st.fov)/2)))}let Mc=K.update(mn,Hr,Math.min(1,qn/.22),wm);nt&&(nt.style.setProperty("--who-in",(ie.portrait?He(.25,.75,mn):He(.5,1,mn)).toFixed(4)),nt.style.setProperty("--who-out",(ie.portrait?He(0,.07,qn):He(0,.12,qn)).toFixed(4)),nt.style.setProperty("--who-labels",Mc.presence.toFixed(4)),nt.style.setProperty("--who-b",Hr.toFixed(4)),nt.dataset.active!==String(Mc.active)&&(nt.dataset.active=String(Mc.active),ft.forEach((xt,Ze)=>xt.classList.toggle("is-active",Ze===Mc.active))));let bc=_t.radius,Mo=se.presence;for(let xt of S){if(xt.tp.set(0,0,0),xt.tr.set(0,0,0),Xe||Mo<=0)continue;let Ze=xt.home.x-se.smooth.x,Yn=xt.home.y-se.smooth.y,Sr=Math.hypot(Ze,Yn);if(Sr>=bc)continue;let zn=1-Sr/bc;zn=zn*zn*(3-2*zn)*Mo;let or=Rt[xt.role],Zn=Sr>.001?Ze/Sr:0,bo=Sr>.001?Yn/Sr:1,Mf=Math.sqrt(xt.m),Fa=_t.push*zn*or.push*Ge/Mf;xt.tp.set(Zn*Fa,bo*Fa,_t.lift*zn*or.lift*(.8+.2*Ge)/Mf);let kx=xe>.05?(Zn*se.vel.y-bo*se.vel.x)/40:0;if(xt.tr.set(-bo*_t.tilt*zn*or.spin,Zn*_t.tilt*zn*or.spin,zn*(xt.spin*.07+Ue.clamp(kx,-.12,.12))),xe>6){let Tm=zn*Pt*.25/xt.m;xt.v.x+=se.vel.x*Tm,xt.v.y+=se.vel.y*Tm}}if(!Xe&&Mo>0){let xt=se.smooth.distanceTo(Y),Ze=Ue.smoothstep(1-xt/(bc*1.2),0,1)*Mo;Dt.tp.x-=b.x*.16*Ze,Dt.tp.y-=b.y*.16*Ze,Dt.tp.z+=.35*Ze,U.tp.x+=b.x*.08*Ze,U.tp.y+=b.y*.08*Ze;let Yn=.55*Ze;Dt.tr.x+=R.x*Yn,Dt.tr.y+=R.y*Yn,U.tr.x-=R.x*Yn*.5,U.tr.y-=R.y*Yn*.5}let Ox=se.smooth.distanceTo(L),vf=Math.max(Xe?0:Ue.smoothstep(1-Ox/(bc*1.3),0,1)*Mo,vn);if(Ce+=(vf-Ce)*(1-Math.exp(-Pt*(vf>Ce?8:3))),vn*=Math.exp(-Pt*1.6),vn<.005&&(vn=0),Ce<.002&&vf===0?Ce=0:(Vt=!0,qe.why.ignite=(qe.why.ignite||0)+1),!Xe&&Mo>0&&(v.tp.z+=.25*Ce,v.tr.z+=.05*Ce*Math.sin(ot/900)),!Xe)for(let xt of S){let Ze=Math.hypot(xt.tp.x,xt.tp.y);Ze>_t.maxXY&&(xt.tp.x*=_t.maxXY/Ze,xt.tp.y*=_t.maxXY/Ze),xt.tp.z=Math.min(xt.tp.z,_t.maxZ);let Yn=Rt[xt.role],Sr=2*Math.PI*Yn.f,zn=Sr*Sr*Mt/xt.m,or=2*Yn.z*Sr*te/Math.sqrt(xt.m),Zn=Pt/2;for(let Fa=0;Fa<2;Fa++)xt.v.x+=(-zn*(xt.p.x-xt.tp.x)-or*xt.v.x)*Zn,xt.p.x+=xt.v.x*Zn,xt.v.y+=(-zn*(xt.p.y-xt.tp.y)-or*xt.v.y)*Zn,xt.p.y+=xt.v.y*Zn,xt.v.z+=(-zn*(xt.p.z-xt.tp.z)-or*xt.v.z)*Zn,xt.p.z+=xt.v.z*Zn,xt.w.x+=(-zn*(xt.r.x-xt.tr.x)-or*xt.w.x)*Zn,xt.r.x+=xt.w.x*Zn,xt.w.y+=(-zn*(xt.r.y-xt.tr.y)-or*xt.w.y)*Zn,xt.r.y+=xt.w.y*Zn,xt.w.z+=(-zn*(xt.r.z-xt.tr.z)-or*xt.w.z)*Zn,xt.r.z+=xt.w.z*Zn;let bo=w+xt.floorOff-xt.home.y;xt.p.y<bo&&(xt.p.y=bo,xt.v.y<0&&(xt.v.y*=-.35),xt.v.x*=.85,xt.v.z*=.85),xt.p.lengthSq()<1e-7&&xt.r.lengthSq()<1e-7&&xt.v.lengthSq()<1e-6&&xt.w.lengthSq()<1e-6&&xt.tp.lengthSq()===0&&xt.tr.lengthSq()===0?(xt.p.set(0,0,0),xt.v.set(0,0,0),xt.r.set(0,0,0),xt.w.set(0,0,0)):(Vt=!0,qe.why["spring:"+xt.name]=(qe.why["spring:"+xt.name]||0)+1)}for(let xt of S){let Ze=.35*Yi*(ie.portrait?1:.6);xt.holder.position.set(xt.home.x+xt.p.x,Math.max(xt.home.y+xt.p.y,w+xt.floorOff),xt.home.z+xt.p.z+xt.ex.z*Ze),xt.holder.rotation.set(xt.r.x+xt.ex.rx*Ze,xt.r.y+xt.ex.ry*Ze,xt.r.z);let Yn=Ue.clamp(xt.p.z/.9,0,1);xt.glow=xt.role==="base"?0:Yn}let Bx=Math.max(Dt.glow,At["bulb-band-1"].glow*.8,Ce*.9);P.orange.emissiveIntensity=ut.orange.emissiveIntensity=.85*Bx;let zx=Math.max(U.glow,At["i-cut"].glow);P.teal.emissiveIntensity=ut.teal.emissiveIntensity=.7*zx,P.glass.emissiveIntensity=ut.glass.emissiveIntensity=1.5*Ce,V.intensity=22*Ce*me.v,V.position.set(L.x+v.p.x,L.y+v.p.y-.2,L.z+v.p.z+.9),ee.position.set(L.x+v.p.x,L.y+v.p.y+.1,L.z+v.p.z+.45),ee.material.opacity=.85*Ce*me.v,ee.visible=ee.material.opacity>.003;let Sf=1-(ie.portrait?.2:.25)*Yi;if(z.intensity=ht.key*me.v*Sf,z.position.lerpVectors(F,B,me.sweep),N.intensity=ht.rim*me.v*Sf,Lt.setBrightness(me.space),ae.material.opacity=.55*me.space*(1-Yi),X.environmentIntensity=ht.env*me.v*Sf,e.style.setProperty("--h3d-exit",ie.portrait?"0":He(0,.3,mn).toFixed(4)),t.style.setProperty("--cosmos-fade",(1-.3*He(ie.portrait?.45:.6,1,vr)).toFixed(4)),q.visible=vr<.999,Wt&&Nt&&!s){let xt=Wt.update(qn,vr,It),Ze=xt.introIn.toFixed(4)+xt.introOut.toFixed(4)+xt.frameIn.toFixed(4)+xt.infoIn.toFixed(4);Ze!==j&&(j=Ze,Nt.style.setProperty("--sc-intro-in",xt.introIn.toFixed(4)),Nt.style.setProperty("--sc-intro-out",xt.introOut.toFixed(4)),Nt.style.setProperty("--sc-frame-in",xt.frameIn.toFixed(4)),Nt.style.setProperty("--sc-info",xt.infoIn.toFixed(4)),Nt.toggleAttribute("data-info-off",xt.infoIn<.02))}O.render(X,st),Fe++,Vt?requestAnimationFrame(Zt):Le=!1}function jt(ot,Pt){let Vt=n.getBoundingClientRect();return cn.set((ot-Vt.left)/Vt.width*2-1,-((Pt-Vt.top)/Vt.height)*2+1),je.setFromCamera(cn,st),je.ray.intersectPlane(Xi,kr)?kr.clone().sub(q.position):null}o&&!s&&!a&&(addEventListener("pointermove",ot=>{if(ot.pointerType!=="mouse"&&ot.pointerType!=="pen")return;let Pt=e.getBoundingClientRect(),Vt=ot.clientY>=Pt.top&&ot.clientY<=Pt.bottom;se.inside=Vt&&Ln<.02;let de=Vt&&jt(ot.clientX,ot.clientY);de&&(se.world.copy(de),se.has||(se.smooth.copy(de),se.has=!0)),Bt.set((ot.clientX/innerWidth-.5)*2,(.5-ot.clientY/innerHeight)*2),be()},{passive:!0}),addEventListener("mouseout",ot=>{ot.relatedTarget||(se.inside=!1,Bt.set(0,0),be())}));let fe=document.getElementById("h3dStage"),he={id:-1,active:!1},$t=ot=>ot&&Math.abs(ot.x)<_*u/2+_t.radius&&Math.abs(ot.y)<m*u/2+_t.radius;function Re(ot,Pt){let Vt=jt(ot.clientX,ot.clientY);return $t(Vt)?(se.world.copy(Vt),Pt&&(se.smooth.copy(Vt),se.vel.set(0,0,0),se.has=!0),!0):!1}function hn(ot){for(let Pt of S){let Vt=Pt.home.x-ot.x,de=Pt.home.y-ot.y,ce=Math.hypot(Vt,de);if(ce>=_t.radius)continue;let xe=1-ce/_t.radius;xe=xe*xe*(3-2*xe);let Ge=Rt[Pt.role],ai=ce>.001?Vt/ce:0,He=ce>.001?de/ce:1;Pt.v.x+=ai*1.1*xe*Ge.push/Pt.m,Pt.v.y+=He*1.1*xe*Ge.push/Pt.m,Pt.v.z+=3.2*xe*Ge.lift/Pt.m,Pt.w.x+=-He*1.6*xe*Ge.spin/Pt.m,Pt.w.y+=ai*1.6*xe*Ge.spin/Pt.m}}function Ve(ot){ot.pointerId===he.id&&(he.active=!1,he.id=-1,be())}!s&&!a&&(fe.addEventListener("pointerdown",ot=>{ot.pointerType!=="mouse"&&(Ln>=.02||!Re(ot,!0)||(he.id=ot.pointerId,he.active=!0,Xe?qi&&qi.timeScale(4):hn(se.world),be()))},{passive:!0}),fe.addEventListener("pointermove",ot=>{ot.pointerId!==he.id||!he.active||(Re(ot,!1),be())},{passive:!0}),fe.addEventListener("pointerup",Ve,{passive:!0}),fe.addEventListener("pointercancel",Ve,{passive:!0}),fe.addEventListener("lostpointercapture",Ve,{passive:!0}));let De=null;function Sn(ot,Pt){if(s){vn=.9,be();return}for(let Vt of S){let de=Math.max(.3,Math.hypot(Vt.home.x-ot.x,Vt.home.y-ot.y)),ce=Pt*(.5+.5*(1-Math.min(de/15,1)))/Vt.m;Vt.v.x+=(Vt.home.x-ot.x)/de*ce*.55,Vt.v.y+=(Vt.home.y-ot.y)/de*ce*.55+ce*.35,Vt.v.z+=ce*(.9+Q(Vt.home.x*13)*.6),Vt.w.x+=(Q(Vt.home.y*7)-.5)*ce*.9,Vt.w.y+=(Q(Vt.home.x*5)-.5)*ce*.9,Vt.w.z+=Vt.spin*ce*.25}vn=1,De&&De.kill(),Mt=.16,te=.42,De=nc.to({s:.16,d:.42},{s:1,d:1,duration:1.7,delay:.2,ease:"power2.in",onUpdate(){Mt=this.targets()[0].s,te=this.targets()[0].d,be()}}),be()}fe.addEventListener("click",ot=>{if(Xe||a)return;if(ot.detail===0){Sn(L,9);return}let Pt=jt(ot.clientX,ot.clientY);if(!Pt||Math.abs(Pt.x)>_*u/2+.6||Math.abs(Pt.y)>m*u/2+.8)return;let Vt=Pt.distanceTo(L)<1.3;Sn(Vt?L:Pt,Vt?9:o?6.5:7.5)}),nc.registerPlugin(ue);let Xt=document.getElementById("casesGrid");function Bn(ot){!Pe&&ot<1&&(E=ot),Ln=ot,ot<1&&(Pe=!0),be()}ue.config({ignoreMobileResize:!0});let we=()=>innerHeight>innerWidth,Mn={a:0,b:0,c:0,d:0,e:0},pn=(ot,Pt)=>{Mn[ot]=Pt,Bn((Mn.a+Mn.b+Mn.c+Mn.d+Mn.e)/5)};ue.create({trigger:e,start:"top top",end:"bottom top",invalidateOnRefresh:!0,onUpdate:ot=>pn("a",ot.progress),onRefresh:ot=>{qt=Math.max(1,ot.end-ot.start),pn("a",ot.progress)}}),ue.create({trigger:nt||e,start:"top top",end:"bottom bottom",invalidateOnRefresh:!0,onUpdate:ot=>pn("b",ot.progress),onRefresh:ot=>pn("b",ot.progress)});let Pi=Nt||nt||e;ue.create({trigger:Pi,start:Nt?"top top":"bottom bottom",end:"bottom bottom",invalidateOnRefresh:!0,onUpdate:ot=>pn("c",ot.progress),onRefresh:ot=>{Gt=Math.max(1,ot.end-ot.start),pn("c",ot.progress)}}),ue.create({trigger:Pi,start:"bottom bottom",endTrigger:Xt||Pi,end:()=>Xt?we()?"top 78%":"top 68%":"bottom top",invalidateOnRefresh:!0,onUpdate:ot=>pn("d",ot.progress),onRefresh:ot=>pn("d",ot.progress)}),t.classList.add("who-3d"),s||t.classList.add("cosmos-site"),ue.create({trigger:Xt||Pi,start:()=>Xt?we()?"top 78%":"top 68%":"bottom top",endTrigger:document.documentElement,end:"bottom bottom",invalidateOnRefresh:!0,onUpdate:ot=>pn("e",ot.progress),onRefresh:ot=>pn("e",ot.progress)}),location.hash==="#work"&&requestAnimationFrame(()=>{ue.refresh();let ot=document.getElementById("work");ot&&ot.scrollIntoView({block:"start",behavior:"instant"})}),document.addEventListener("visibilitychange",()=>be()),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>ue.refresh()),addEventListener("load",()=>ue.refresh(),{once:!0});let Vr=0,Ne=0;new ResizeObserver(()=>{let ot=document.documentElement.scrollHeight;ot!==Vr&&(Vr=ot,clearTimeout(Ne),Ne=setTimeout(()=>ue.refresh(),300))}).observe(document.body);let me={v:0,sweep:0,space:0},qi=null;function Ye(){Xe=!0;let ot=qi=nc.timeline({onUpdate:be,onComplete(){Xe=!1;for(let Pt of S)Pt.v.set(0,0,0),Pt.w.set(0,0,0);yr(),e.classList.add("is-ready"),be()}});S.forEach((Pt,Vt)=>{let de=Math.atan2(Pt.home.y,Pt.home.x)+(Q(Vt+3)-.5)*1.2,ce=2.5+Q(Vt+11)*3.5;Pt.p.set(Math.cos(de)*ce,Math.sin(de)*ce*.6,-4-Q(Vt+13)*7),Pt.r.set((Q(Vt+5)-.5)*2.4,(Q(Vt+17)-.5)*2.4,(Q(Vt+19)-.5)*1.4);let xe=.1+Pt.home.distanceTo(Y)/(_*u)*.8;ot.to(Pt.p,{x:0,y:0,z:0,duration:1.6,ease:"expo.out"},xe).to(Pt.r,{x:0,y:0,z:0,duration:1.7,ease:"expo.out"},xe)}),ot.fromTo(me,{v:.12,sweep:0},{v:1,sweep:1,duration:2.6,ease:"power2.inOut"},0).fromTo(me,{space:.3},{space:1,duration:2.4,ease:"power1.inOut"},.2).add(()=>{vn=1},1.9),be()}function yr(){if(ln.length<30)return;let ot=[...ln].sort((Vt,de)=>Vt-de),Pt=ot[ot.length>>1];Pt>1/32&&(W=Math.max(1,W-.5),Qe(),e.setAttribute("data-h3d-adapted",`dpr ${W}, median frame ${(Pt*1e3).toFixed(1)}ms`))}if(a==="silhouette"){X.background=new Kt("#000000"),X.fog=null,X.environment=null,Lt.group.visible=!1,ae.visible=!1;for(let ot of S)ot.mesh.material=new kn({color:ot.mesh.material[0].color});O.toneMapping=0,O.shadowMap.enabled=!1}new ResizeObserver(()=>Qe()).observe(n.parentElement);let Gr=document.querySelector(".h3d__copy");if(Gr&&new ResizeObserver(()=>Qe(!0)).observe(Gr),Nt){let ot=new ResizeObserver(()=>Qe(!0));Nt.querySelectorAll(".showcase__intro, .showcase__project, .showcase__frame").forEach(Pt=>ot.observe(Pt))}if(new MutationObserver(()=>Qe(!0)).observe(t,{attributes:!0,attributeFilter:["dir"]}),Qe(),O.compileAsync)try{await O.compileAsync(X,st)}catch{}if(a==="silhouette"){st.fov=.5,st.near=100,st.far=1e5;let ot=m*u/2/Math.tan(Ue.degToRad(.25));st.aspect=_/m,st.updateProjectionMatrix(),O.setPixelRatio(1),O.setSize(_,m,!1),gt.set(0,0,ot),yt.set(0,0,0),me.v=1,me.sweep=1,me.space=1,t.classList.add("h3d-silhouette")}else s?(me.v=1,me.sweep=1,me.space=1,e.classList.add("is-ready")):Ye();t.classList.add("h3d-live"),be(),window.__hero3d={tier:h,quality:f,get renders(){return Fe},get running(){return Le},pieces:S,burst:(ot=9)=>Sn(L,ot),get intro(){return Xe},project(ot){let Vt=At[ot].home.clone().add(new G(0,0,A/2*u)).project(st),de=n.getBoundingClientRect();return{x:de.left+(Vt.x+1)/2*de.width,y:de.top+(1-Vt.y)/2*de.height}},dbg:qe,touch:()=>({active:he.active,id:he.id,presence:se.presence,scrollP:Ln}),snapshot(){return O.render(X,st),n.toDataURL("image/png")},cosmosRead:ot=>Lt.debugRead(ot),journey:()=>({p:Ln,s:E,seg:{...Mn},active:nt?+nt.dataset.active:-1,logoZ:q.position.z,cam:st.position.toArray().map(ot=>+ot.toFixed(3)),visible:Pe}),lights:()=>({key:z.intensity,keyPos:z.position.toArray().map(ot=>+ot.toFixed(2)),rim:N.intensity,env:X.environmentIntensity,bulb:V.intensity,intro:{v:me.v,sweep:me.sweep,space:me.space},toneMapping:O.toneMapping}),info:()=>({...O.info.memory,calls:O.info.render.calls,triangles:O.info.render.triangles,dpr:O.getPixelRatio()}),frameTimes:ln,whoBox(){let ot=n.getBoundingClientRect(),Pt=[],Vt=new G;return K.layer.updateMatrixWorld(),K.layer.traverse(de=>{if(!de.isMesh||!de.visible||!de.parent.visible)return;de.geometry.boundingBox||de.geometry.computeBoundingBox();let ce=de.geometry.boundingBox,xe={x0:1e9,y0:1e9,x1:-1e9,y1:-1e9,n:0};for(let Ge=0;Ge<8;Ge++){if(Vt.set(Ge&1?ce.max.x:ce.min.x,Ge&2?ce.max.y:ce.min.y,Ge&4?ce.max.z:ce.min.z).applyMatrix4(de.matrixWorld).project(st),Vt.z>1)continue;let ai=ot.left+(Vt.x+1)/2*ot.width,He=ot.top+(1-Vt.y)/2*ot.height;xe.x0=Math.min(xe.x0,ai),xe.y0=Math.min(xe.y0,He),xe.x1=Math.max(xe.x1,ai),xe.y1=Math.max(xe.y1,He),xe.n++}xe.n&&Pt.push(xe)}),Pt}}}export{cC as start};
