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

import{a as y}from"./chunk-5S4N3VRU.js";import{d as F}from"./chunk-3YXTKO5F.js";import{b as d,c as W,d as x}from"./chunk-R7VOEVKL.js";import{a as A}from"./chunk-IX2OLS2H.js";import{a as s,c as M}from"./chunk-DTDIGECF.js";import{a as q}from"./chunk-KTKCENRU.js";import{a as P}from"./chunk-YEJ6O6A4.js";import{b as z}from"./chunk-VGVFMVO3.js";import{e as u}from"./chunk-DBO65MJ7.js";function T(o,t){z.typeOf.object("ellipsoid",o),this._ellipsoid=o,this._cameraPosition=new s,this._cameraPositionInScaledSpace=new s,this._distanceToLimbInScaledSpaceSquared=0,u(t)&&(this.cameraPosition=t)}Object.defineProperties(T.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},cameraPosition:{get:function(){return this._cameraPosition},set:function(o){let e=this._ellipsoid.transformPositionToScaledSpace(o,this._cameraPositionInScaledSpace),a=s.magnitudeSquared(e)-1;s.clone(o,this._cameraPosition),this._cameraPositionInScaledSpace=e,this._distanceToLimbInScaledSpaceSquared=a}}});var L=new s;T.prototype.isPointVisible=function(o){let e=this._ellipsoid.transformPositionToScaledSpace(o,L);return D(e,this._cameraPositionInScaledSpace,this._distanceToLimbInScaledSpaceSquared)};T.prototype.isScaledSpacePointVisible=function(o){return D(o,this._cameraPositionInScaledSpace,this._distanceToLimbInScaledSpaceSquared)};var et=new s;T.prototype.isScaledSpacePointVisiblePossiblyUnderEllipsoid=function(o,t){let e=this._ellipsoid,a,i;return u(t)&&t<0&&e.minimumRadius>-t?(i=et,i.x=this._cameraPosition.x/(e.radii.x+t),i.y=this._cameraPosition.y/(e.radii.y+t),i.z=this._cameraPosition.z/(e.radii.z+t),a=i.x*i.x+i.y*i.y+i.z*i.z-1):(i=this._cameraPositionInScaledSpace,a=this._distanceToLimbInScaledSpaceSquared),D(o,i,a)};T.prototype.computeHorizonCullingPoint=function(o,t,e){return Z(this._ellipsoid,o,t,e)};var j=M.clone(M.UNIT_SPHERE);T.prototype.computeHorizonCullingPointPossiblyUnderEllipsoid=function(o,t,e,a){let i=U(this._ellipsoid,e,j);return Z(i,o,t,a)};T.prototype.computeHorizonCullingPointFromVertices=function(o,t,e,a,i){return v(this._ellipsoid,o,t,e,a,i)};T.prototype.computeHorizonCullingPointFromVerticesPossiblyUnderEllipsoid=function(o,t,e,a,i,c){let n=U(this._ellipsoid,i,j);return v(n,o,t,e,a,c)};var it=[];T.prototype.computeHorizonCullingPointFromRectangle=function(o,t,e){z.typeOf.object("rectangle",o);let a=W.subsample(o,t,0,it),i=F.fromPoints(a);if(!(s.magnitude(i.center)<.1*t.minimumRadius))return this.computeHorizonCullingPoint(i.center,a,e)};var at=new s;function U(o,t,e){if(u(t)&&t<0&&o.minimumRadius>-t){let a=s.fromElements(o.radii.x+t,o.radii.y+t,o.radii.z+t,at);o=M.fromCartesian3(a,e)}return o}function Z(o,t,e,a){z.typeOf.object("directionToPoint",t),z.defined("positions",e),u(a)||(a=new s);let i=K(o,t),c=0;for(let n=0,r=e.length;n<r;++n){let m=e[n],l=Q(o,m,i);if(l<0)return;c=Math.max(c,l)}return J(i,c,a)}var O=new s;function v(o,t,e,a,i,c){z.typeOf.object("directionToPoint",t),z.defined("vertices",e),z.typeOf.number("stride",a),u(c)||(c=new s),a=P(a,3),i=P(i,s.ZERO);let n=K(o,t),r=0;for(let m=0,l=e.length;m<l;m+=a){O.x=e[m]+i.x,O.y=e[m+1]+i.y,O.z=e[m+2]+i.z;let p=Q(o,O,n);if(p<0)return;r=Math.max(r,p)}return J(n,r,c)}function D(o,t,e){let a=t,i=e,c=s.subtract(o,a,L),n=-s.dot(c,a);return!(i<0?n>0:n>i&&n*n/s.magnitudeSquared(c)>i)}var nt=new s,st=new s;function Q(o,t,e){let a=o.transformPositionToScaledSpace(t,nt),i=s.magnitudeSquared(a),c=Math.sqrt(i),n=s.divideByScalar(a,c,st);i=Math.max(1,i),c=Math.max(1,c);let r=s.dot(n,e),m=s.magnitude(s.cross(n,e,n)),l=1/c,p=Math.sqrt(i-1)*l;return 1/(r*l-m*p)}function J(o,t,e){if(!(t<=0||t===1/0||t!==t))return s.multiplyByScalar(o,t,e)}var R=new s;function K(o,t){return s.equals(t,s.ZERO)?t:(o.transformPositionToScaledSpace(t,R),s.normalize(R,R))}var xt=T;var b={};b.getHeight=function(o,t,e){return(o-e)*t+e};var ct=new s;b.getPosition=function(o,t,e,a,i){let c=t.cartesianToCartographic(o,ct),n=b.getHeight(c.height,e,a);return s.fromRadians(c.longitude,c.latitude,n,t,i)};var X=b;var rt={NONE:0,BITS12:1},S=Object.freeze(rt);var C=new s,mt=new s,f=new x,G=new d,dt=new d,lt=Math.pow(2,12);function h(o,t,e,a,i,c,n,r,m,l){let p=S.NONE,g,N;if(u(t)&&u(e)&&u(a)&&u(i)){let E=t.minimum,I=t.maximum,_=s.subtract(I,E,mt),$=a-e;Math.max(s.maximumComponent(_),$)<lt-1?p=S.BITS12:p=S.NONE,g=d.inverseTransformation(i,new d);let B=s.negate(E,C);d.multiply(d.fromTranslation(B,G),g,g);let w=C;w.x=1/_.x,w.y=1/_.y,w.z=1/_.z,d.multiply(d.fromScale(w,G),g,g),N=d.clone(i),d.setTranslation(N,s.ZERO,N),i=d.clone(i,new d);let tt=d.fromTranslation(E,G),ot=d.fromScale(_,dt),k=d.multiply(tt,ot,G);d.multiply(i,k,i),d.multiply(N,k,N)}this.quantization=p,this.minimumHeight=e,this.maximumHeight=a,this.center=s.clone(o),this.toScaledENU=g,this.fromScaledENU=i,this.matrix=N,this.hasVertexNormals=c,this.hasWebMercatorT=P(n,!1),this.hasGeodeticSurfaceNormals=P(r,!1),this.exaggeration=P(m,1),this.exaggerationRelativeHeight=P(l,0),this.stride=0,this._offsetGeodeticSurfaceNormal=0,this._offsetVertexNormal=0,this._calculateStrideAndOffsets()}h.prototype.encode=function(o,t,e,a,i,c,n,r){let m=a.x,l=a.y;if(this.quantization===S.BITS12){e=d.multiplyByPoint(this.toScaledENU,e,C),e.x=q.clamp(e.x,0,1),e.y=q.clamp(e.y,0,1),e.z=q.clamp(e.z,0,1);let p=this.maximumHeight-this.minimumHeight,g=q.clamp((i-this.minimumHeight)/p,0,1);x.fromElements(e.x,e.y,f);let N=y.compressTextureCoordinates(f);x.fromElements(e.z,g,f);let E=y.compressTextureCoordinates(f);x.fromElements(m,l,f);let I=y.compressTextureCoordinates(f);if(o[t++]=N,o[t++]=E,o[t++]=I,this.hasWebMercatorT){x.fromElements(n,0,f);let _=y.compressTextureCoordinates(f);o[t++]=_}}else s.subtract(e,this.center,C),o[t++]=C.x,o[t++]=C.y,o[t++]=C.z,o[t++]=i,o[t++]=m,o[t++]=l,this.hasWebMercatorT&&(o[t++]=n);return this.hasVertexNormals&&(o[t++]=y.octPackFloat(c)),this.hasGeodeticSurfaceNormals&&(o[t++]=r.x,o[t++]=r.y,o[t++]=r.z),t};var ht=new s,Y=new s;h.prototype.addGeodeticSurfaceNormals=function(o,t,e){if(this.hasGeodeticSurfaceNormals)return;let a=this.stride,i=o.length/a;this.hasGeodeticSurfaceNormals=!0,this._calculateStrideAndOffsets();let c=this.stride;for(let n=0;n<i;n++){for(let p=0;p<a;p++){let g=n*a+p,N=n*c+p;t[N]=o[g]}let r=this.decodePosition(t,n,ht),m=e.geodeticSurfaceNormal(r,Y),l=n*c+this._offsetGeodeticSurfaceNormal;t[l]=m.x,t[l+1]=m.y,t[l+2]=m.z}};h.prototype.removeGeodeticSurfaceNormals=function(o,t){if(!this.hasGeodeticSurfaceNormals)return;let e=this.stride,a=o.length/e;this.hasGeodeticSurfaceNormals=!1,this._calculateStrideAndOffsets();let i=this.stride;for(let c=0;c<a;c++)for(let n=0;n<i;n++){let r=c*e+n,m=c*i+n;t[m]=o[r]}};h.prototype.decodePosition=function(o,t,e){if(u(e)||(e=new s),t*=this.stride,this.quantization===S.BITS12){let a=y.decompressTextureCoordinates(o[t],f);e.x=a.x,e.y=a.y;let i=y.decompressTextureCoordinates(o[t+1],f);return e.z=i.x,d.multiplyByPoint(this.fromScaledENU,e,e)}return e.x=o[t],e.y=o[t+1],e.z=o[t+2],s.add(e,this.center,e)};h.prototype.getExaggeratedPosition=function(o,t,e){e=this.decodePosition(o,t,e);let a=this.exaggeration,i=this.exaggerationRelativeHeight;if(a!==1&&this.hasGeodeticSurfaceNormals){let n=this.decodeGeodeticSurfaceNormal(o,t,Y),r=this.decodeHeight(o,t),m=X.getHeight(r,a,i)-r;e.x+=n.x*m,e.y+=n.y*m,e.z+=n.z*m}return e};h.prototype.decodeTextureCoordinates=function(o,t,e){return u(e)||(e=new x),t*=this.stride,this.quantization===S.BITS12?y.decompressTextureCoordinates(o[t+2],e):x.fromElements(o[t+4],o[t+5],e)};h.prototype.decodeHeight=function(o,t){return t*=this.stride,this.quantization===S.BITS12?y.decompressTextureCoordinates(o[t+1],f).y*(this.maximumHeight-this.minimumHeight)+this.minimumHeight:o[t+3]};h.prototype.decodeWebMercatorT=function(o,t){return t*=this.stride,this.quantization===S.BITS12?y.decompressTextureCoordinates(o[t+3],f).x:o[t+6]};h.prototype.getOctEncodedNormal=function(o,t,e){t=t*this.stride+this._offsetVertexNormal;let a=o[t]/256,i=Math.floor(a),c=(a-i)*256;return x.fromElements(i,c,e)};h.prototype.decodeGeodeticSurfaceNormal=function(o,t,e){return t=t*this.stride+this._offsetGeodeticSurfaceNormal,e.x=o[t],e.y=o[t+1],e.z=o[t+2],e};h.prototype._calculateStrideAndOffsets=function(){let o=0;switch(this.quantization){case S.BITS12:o+=3;break;default:o+=6}this.hasWebMercatorT&&(o+=1),this.hasVertexNormals&&(this._offsetVertexNormal=o,o+=1),this.hasGeodeticSurfaceNormals&&(this._offsetGeodeticSurfaceNormal=o,o+=3),this.stride=o};var H={position3DAndHeight:0,textureCoordAndEncodedNormals:1,geodeticSurfaceNormal:2},V={compressed0:0,compressed1:1,geodeticSurfaceNormal:2};h.prototype.getAttributes=function(o){let t=A.FLOAT,e=A.getSizeInBytes(t),a=this.stride*e,i=0,c=[];function n(r,m){c.push({index:r,vertexBuffer:o,componentDatatype:t,componentsPerAttribute:m,offsetInBytes:i,strideInBytes:a}),i+=m*e}if(this.quantization===S.NONE){n(H.position3DAndHeight,4);let r=2;r+=this.hasWebMercatorT?1:0,r+=this.hasVertexNormals?1:0,n(H.textureCoordAndEncodedNormals,r),this.hasGeodeticSurfaceNormals&&n(H.geodeticSurfaceNormal,3)}else{let r=this.hasWebMercatorT||this.hasVertexNormals,m=this.hasWebMercatorT&&this.hasVertexNormals;n(V.compressed0,r?4:3),m&&n(V.compressed1,1),this.hasGeodeticSurfaceNormals&&n(V.geodeticSurfaceNormal,3)}return c};h.prototype.getAttributeLocations=function(){return this.quantization===S.NONE?H:V};h.clone=function(o,t){if(u(o))return u(t)||(t=new h),t.quantization=o.quantization,t.minimumHeight=o.minimumHeight,t.maximumHeight=o.maximumHeight,t.center=s.clone(o.center),t.toScaledENU=d.clone(o.toScaledENU),t.fromScaledENU=d.clone(o.fromScaledENU),t.matrix=d.clone(o.matrix),t.hasVertexNormals=o.hasVertexNormals,t.hasWebMercatorT=o.hasWebMercatorT,t.hasGeodeticSurfaceNormals=o.hasGeodeticSurfaceNormals,t.exaggeration=o.exaggeration,t.exaggerationRelativeHeight=o.exaggerationRelativeHeight,t._calculateStrideAndOffsets(),t};var At=h;export{xt as a,At as b};
