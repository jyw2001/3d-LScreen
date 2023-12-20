/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.109.2
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import{a as Q}from"./chunk-XAJJXO3A.js";import{a as z}from"./chunk-A2NS5WZM.js";import{a as _}from"./chunk-Q5I3HUFC.js";import{a as K}from"./chunk-XP6ACU7K.js";import{a as H}from"./chunk-EL2VM6U2.js";import{b as J,c as W,d as P}from"./chunk-XF2PZXQF.js";import{d as j}from"./chunk-3YXTKO5F.js";import{d as k}from"./chunk-R7VOEVKL.js";import{a as L}from"./chunk-IX2OLS2H.js";import{a as b}from"./chunk-DTDIGECF.js";import{a as Z}from"./chunk-KTKCENRU.js";import{a as x}from"./chunk-YEJ6O6A4.js";import{a as F}from"./chunk-VGVFMVO3.js";import{e as g}from"./chunk-DBO65MJ7.js";var M=new k,ot=new b,nt=new b,it=new b,st=new b;function O(t){t=x(t,x.EMPTY_OBJECT);let n=t.length,e=t.topRadius,h=t.bottomRadius,o=x(t.vertexFormat,_.DEFAULT),r=x(t.slices,128);if(!g(n))throw new F("options.length must be defined.");if(!g(e))throw new F("options.topRadius must be defined.");if(!g(h))throw new F("options.bottomRadius must be defined.");if(r<3)throw new F("options.slices must be greater than or equal to 3.");if(g(t.offsetAttribute)&&t.offsetAttribute===z.TOP)throw new F("GeometryOffsetAttribute.TOP is not a supported options.offsetAttribute for this geometry.");this._length=n,this._topRadius=e,this._bottomRadius=h,this._vertexFormat=_.clone(o),this._slices=r,this._offsetAttribute=t.offsetAttribute,this._workerName="createCylinderGeometry"}O.packedLength=_.packedLength+5;O.pack=function(t,n,e){if(!g(t))throw new F("value is required");if(!g(n))throw new F("array is required");return e=x(e,0),_.pack(t._vertexFormat,n,e),e+=_.packedLength,n[e++]=t._length,n[e++]=t._topRadius,n[e++]=t._bottomRadius,n[e++]=t._slices,n[e]=x(t._offsetAttribute,-1),n};var X=new _,C={vertexFormat:X,length:void 0,topRadius:void 0,bottomRadius:void 0,slices:void 0,offsetAttribute:void 0};O.unpack=function(t,n,e){if(!g(t))throw new F("array is required");n=x(n,0);let h=_.unpack(t,n,X);n+=_.packedLength;let o=t[n++],r=t[n++],p=t[n++],D=t[n++],w=t[n];return g(e)?(e._vertexFormat=_.clone(h,e._vertexFormat),e._length=o,e._topRadius=r,e._bottomRadius=p,e._slices=D,e._offsetAttribute=w===-1?void 0:w,e):(C.length=o,C.topRadius=r,C.bottomRadius=p,C.slices=D,C.offsetAttribute=w===-1?void 0:w,new O(C))};O.createGeometry=function(t){let n=t._length,e=t._topRadius,h=t._bottomRadius,o=t._vertexFormat,r=t._slices;if(n<=0||e<0||h<0||e===0&&h===0)return;let p=r+r,D=r+p,w=p+p,E=Q.computePositions(n,e,h,r,!0),N=o.st?new Float32Array(w*2):void 0,c=o.normal?new Float32Array(w*3):void 0,m=o.tangent?new Float32Array(w*3):void 0,u=o.bitangent?new Float32Array(w*3):void 0,i,U=o.normal||o.tangent||o.bitangent;if(U){let T=o.tangent||o.bitangent,f=0,d=0,l=0,q=Math.atan2(h-e,n),A=ot;A.z=Math.sin(q);let B=Math.cos(q),R=it,y=nt;for(i=0;i<r;i++){let Y=i/r*Z.TWO_PI,tt=B*Math.cos(Y),et=B*Math.sin(Y);U&&(A.x=tt,A.y=et,T&&(R=b.normalize(b.cross(b.UNIT_Z,A,R),R)),o.normal&&(c[f++]=A.x,c[f++]=A.y,c[f++]=A.z,c[f++]=A.x,c[f++]=A.y,c[f++]=A.z),o.tangent&&(m[d++]=R.x,m[d++]=R.y,m[d++]=R.z,m[d++]=R.x,m[d++]=R.y,m[d++]=R.z),o.bitangent&&(y=b.normalize(b.cross(A,R,y),y),u[l++]=y.x,u[l++]=y.y,u[l++]=y.z,u[l++]=y.x,u[l++]=y.y,u[l++]=y.z))}for(i=0;i<r;i++)o.normal&&(c[f++]=0,c[f++]=0,c[f++]=-1),o.tangent&&(m[d++]=1,m[d++]=0,m[d++]=0),o.bitangent&&(u[l++]=0,u[l++]=-1,u[l++]=0);for(i=0;i<r;i++)o.normal&&(c[f++]=0,c[f++]=0,c[f++]=1),o.tangent&&(m[d++]=1,m[d++]=0,m[d++]=0),o.bitangent&&(u[l++]=0,u[l++]=1,u[l++]=0)}let $=12*r-12,s=K.createTypedArray(w,$),a=0,v=0;for(i=0;i<r-1;i++)s[a++]=v,s[a++]=v+2,s[a++]=v+3,s[a++]=v,s[a++]=v+3,s[a++]=v+1,v+=2;for(s[a++]=p-2,s[a++]=0,s[a++]=1,s[a++]=p-2,s[a++]=1,s[a++]=p-1,i=1;i<r-1;i++)s[a++]=p+i+1,s[a++]=p+i,s[a++]=p;for(i=1;i<r-1;i++)s[a++]=D,s[a++]=D+i,s[a++]=D+i+1;let V=0;if(o.st){let T=Math.max(e,h);for(i=0;i<w;i++){let f=b.fromArray(E,i*3,st);N[V++]=(f.x+T)/(2*T),N[V++]=(f.y+T)/(2*T)}}let S=new H;o.position&&(S.position=new P({componentDatatype:L.DOUBLE,componentsPerAttribute:3,values:E})),o.normal&&(S.normal=new P({componentDatatype:L.FLOAT,componentsPerAttribute:3,values:c})),o.tangent&&(S.tangent=new P({componentDatatype:L.FLOAT,componentsPerAttribute:3,values:m})),o.bitangent&&(S.bitangent=new P({componentDatatype:L.FLOAT,componentsPerAttribute:3,values:u})),o.st&&(S.st=new P({componentDatatype:L.FLOAT,componentsPerAttribute:2,values:N})),M.x=n*.5,M.y=Math.max(h,e);let I=new j(b.ZERO,k.magnitude(M));if(g(t._offsetAttribute)){n=E.length;let T=t._offsetAttribute===z.NONE?0:1,f=new Uint8Array(n/3).fill(T);S.applyOffset=new P({componentDatatype:L.UNSIGNED_BYTE,componentsPerAttribute:1,values:f})}return new W({attributes:S,indices:s,primitiveType:J.TRIANGLES,boundingSphere:I,offsetAttribute:t._offsetAttribute})};var G;O.getUnitCylinder=function(){return g(G)||(G=O.createGeometry(new O({topRadius:1,bottomRadius:1,length:1,vertexFormat:_.POSITION_ONLY}))),G};var yt=O;export{yt as a};
