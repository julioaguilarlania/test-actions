"use strict";(globalThis["webpackChunkappexamenesf"]=globalThis["webpackChunkappexamenesf"]||[]).push([[622],{2601:(e,a,o)=>{o.r(a),o.d(a,{default:()=>A});var l=o(9835),n=o(6970);const t={class:"q-pa-md row"},i=(0,l.Uk)(" Enviar"),s={class:"q-pa-md"},r={key:0},d={"q-pa-md":"","q-gutter-sm":""},c=(0,l._)("span",{class:"q-ml-sm"},"¿Estás seguro de guardar el examen?",-1);function u(e,a,o,u,m,p){const g=(0,l.up)("q-space"),h=(0,l.up)("q-btn"),v=(0,l.up)("q-card-section"),f=(0,l.up)("q-separator"),w=(0,l.up)("q-radio"),x=(0,l.up)("q-card"),V=(0,l.up)("q-avatar"),W=(0,l.up)("q-card-actions"),_=(0,l.up)("q-dialog"),q=(0,l.up)("q-page"),E=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.j4)(q,null,{default:(0,l.w5)((()=>[(0,l._)("div",t,[(0,l.Wm)(g),(0,l.Wm)(h,{icon:"add",color:"primary",onClick:a[0]||(a[0]=a=>e.guardarReactivos())},{default:(0,l.w5)((()=>[i])),_:1})]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.reactivos,((a,o)=>((0,l.wg)(),(0,l.iD)("div",s,[(0,l.Wm)(x,null,{default:(0,l.w5)((()=>[(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l._)("b",null,(0,n.zw)(o+1)+". "+(0,n.zw)(a.texto),1)])),_:2},1024),(0,l.Wm)(f),(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l._)("div",null,[(0,l.Wm)(w,{modelValue:e.resp[o],"onUpdate:modelValue":a=>e.resp[o]=a,val:"1"},null,8,["modelValue","onUpdate:modelValue"]),(0,l.Uk)((0,n.zw)(a.opcion1),1)]),(0,l._)("div",null,[(0,l.Wm)(w,{modelValue:e.resp[o],"onUpdate:modelValue":a=>e.resp[o]=a,val:"2"},null,8,["modelValue","onUpdate:modelValue"]),(0,l.Uk)((0,n.zw)(a.opcion2),1)]),(0,l._)("div",null,[(0,l.Wm)(w,{modelValue:e.resp[o],"onUpdate:modelValue":a=>e.resp[o]=a,val:"3"},null,8,["modelValue","onUpdate:modelValue"]),(0,l.Uk)((0,n.zw)(a.opcion3),1)]),a.opcion4?((0,l.wg)(),(0,l.iD)("div",r,[(0,l.Wm)(w,{modelValue:e.resp[o],"onUpdate:modelValue":a=>e.resp[o]=a,val:"4"},null,8,["modelValue","onUpdate:modelValue"]),(0,l.Uk)((0,n.zw)(a.opcion4),1)])):(0,l.kq)("",!0)])),_:2},1024)])),_:2},1024)])))),256)),(0,l._)("div",null,[(0,l._)("div",d,[(0,l.Wm)(_,{modelValue:e.confirm,"onUpdate:modelValue":a[2]||(a[2]=a=>e.confirm=a),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(x,null,{default:(0,l.w5)((()=>[(0,l.Wm)(v,{class:"row items-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(V,{icon:"delete",color:"primary","text-color":"white"}),c])),_:1}),(0,l.Wm)(W,{align:"right"},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{flat:"",label:"Enviar",color:"primary",onClick:a[1]||(a[1]=a=>e.enviarConfirmado())}),(0,l.wy)((0,l.Wm)(h,{flat:"",label:"Cancelar"},null,512),[[E]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])])])),_:1})}const m=(0,l.aZ)({name:"AplicacionExamenPage",data:function(){return{idExamen:this.$route.params.idex,idAlumno:this.$route.params.idal,editando:!1,reactivos:[],resp:[],expSeleccionada:{id:1,label:"Desarrollo de Software"},exps:[{id:1,label:"Desarrollo de Software"}],confirm:!1,columnasReactivos:[{name:"texto",label:"Pregunta",field:"texto",align:"left"},{name:"acciones",label:"Acciones",field:"",align:"center"}]}},mounted:function(){this.cargarReactivos(),this.crearExamenAlumno()},methods:{cargarReactivos:function(){console.log("cargarReactivos()"),this.$api.get("reactivo?idExamen="+this.idExamen).then((e=>{console.log("GET ejecutado"),this.reactivos=e.data})).catch((e=>{console.log("ERROR"),console.log(e)}))},crearExamenAlumno:function(){console.log("crearExamenAlumno");let e={idExamen:this.idExamen,idAlumno:this.idAlumno};this.$api.post("examen-alumnos",e).then((e=>{console.log("examen abierto")})).catch((e=>{console.log(e)}))},guardarReactivos:function(){console.log("guardarReactivos()");let e={idExamen:this.idExamen,idAlumno:this.idAlumno,respuestas:[]};for(let a=0;a<this.reactivos.length;a++)console.log(this.reactivos[a],this.resp[a]),e.respuestas.push({idReactivo:this.reactivos[a].idReactivo,opcion:this.resp[a]});this.$api.post("/respuesta-reactivos",e).then((e=>{console.log("examen cerrado"),this.$router.push("/misexamenes/"+this.idAlumno)})).catch((e=>{console.log(e)}))}}});var p=o(1639),g=o(9885),h=o(136),v=o(4455),f=o(4458),w=o(3190),x=o(926),V=o(1480),W=o(2074),_=o(1357),q=o(1821),E=o(2146),U=o(9984),b=o.n(U);const k=(0,p.Z)(m,[["render",u]]),A=k;b()(m,"components",{QPage:g.Z,QSpace:h.Z,QBtn:v.Z,QCard:f.Z,QCardSection:w.Z,QSeparator:x.Z,QRadio:V.Z,QDialog:W.Z,QAvatar:_.Z,QCardActions:q.Z}),b()(m,"directives",{ClosePopup:E.Z})}}]);