import{r as s,c as e,h as t}from"./p-d44d1ddb.js";import{S as i}from"./p-25ed19bb.js";import{a}from"./p-bdae1cb5.js";import{m as n}from"./p-4bdcf3f8.js";import{T as l}from"./p-89475ce8.js";import{r as o}from"./p-dfca8bd9.js";import{t as r,e as h,l as d}from"./p-fd4270fe.js";import"./p-e47f7c7d.js";import"./p-f90ae5bc.js";import"./p-a3b5bd35.js";import"./p-80de33dc.js";import"./p-d17a08e5.js";import"./p-83f217d4.js";const c=class{constructor(t){s(this,t),this.expressionChanged=e(this,"expressionChanged",7),this.editorHeight="6em",this.singleLineMode=!1}expressionChangedHandler(s){this.currentExpression=s}async setExpression(s){await this.monacoEditor.setValue(s)}async componentWillLoad(){this.currentExpression=this.expression}async componentDidLoad(){const s=await a(this.serverUrl),e=await s.scriptingApi.getJavaScriptTypeDefinitions(this.workflowDefinitionId,this.context);await this.monacoEditor.addJavaScriptLib(e,"defaultLib:lib.es6.d.ts")}async onMonacoValueChanged(s){this.currentExpression=s.value,await this.expressionChanged.emit(s.value)}render(){return t("elsa-monaco",{value:this.currentExpression,language:this.language,"editor-height":this.editorHeight,"single-line":this.singleLineMode,padding:this.padding,onValueChanged:s=>this.onMonacoValueChanged(s.detail),ref:s=>this.monacoEditor=s})}static get watchers(){return{expression:["expressionChangedHandler"]}}};l.injectProps(c,["serverUrl","workflowDefinitionId"]);const p=class{constructor(t){s(this,t),this.syntaxChanged=e(this,"syntaxChanged",7),this.expressionChanged=e(this,"expressionChanged",7),this.defaultSyntax=i.Literal,this.expressions={},this.supportedSyntaxes=[],this.editorHeight="10em",this.singleLineMode=!1}async componentWillLoad(){this.selectedSyntax=this.syntax,this.currentValue=this.expressions[this.selectedSyntax?this.selectedSyntax:this.defaultSyntax]}toggleContextMenu(){r(this.contextMenu)}openContextMenu(){h(this.contextMenu)}closeContextMenu(){d(this.contextMenu)}selectDefaultEditor(s){s.preventDefault(),this.selectedSyntax=void 0,this.closeContextMenu()}async selectSyntax(s,e){s.preventDefault(),this.selectedSyntax=e,this.syntaxChanged.emit(e),this.currentValue=this.expressions[e||this.defaultSyntax||i.Literal],await this.expressionEditor.setExpression(this.currentValue),this.closeContextMenu()}onSettingsClick(s){this.toggleContextMenu()}onExpressionChanged(s){const e=s.detail;this.expressions[this.selectedSyntax||this.defaultSyntax]=e,this.expressionChanged.emit(e)}render(){return t("div",null,t("div",{class:"elsa-mb-1"},t("div",{class:"elsa-flex"},t("div",{class:"elsa-flex-1"},this.renderLabel()),this.renderContextMenuWidget())),this.renderEditor())}renderLabel(){if(!this.label)return;const s=this.fieldName;return t("label",{htmlFor:s,class:"elsa-block elsa-text-sm elsa-font-medium elsa-text-gray-700"},this.label||s)}renderContextMenuWidget(){if(0==this.supportedSyntaxes.length)return;const s=this.selectedSyntax;return t("div",{class:"elsa-relative",ref:s=>o(this,s,this.closeContextMenu)},t("button",{type:"button",class:"elsa-border-0 focus:elsa-outline-none elsa-text-sm "+(s?"elsa-text-blue-500":"elsa-text-gray-300"),onClick:s=>this.onSettingsClick(s)},this.isReadOnly?"":this.renderContextMenuButton()),t("div",null,t("div",{ref:s=>this.contextMenu=s,"data-transition-enter":"elsa-transition elsa-ease-out elsa-duration-100","data-transition-enter-start":"elsa-transform elsa-opacity-0 elsa-scale-95","data-transition-enter-end":"elsa-transform elsa-opacity-100 elsa-scale-100","data-transition-leave":"elsa-transition elsa-ease-in elsa-duration-75","data-transition-leave-start":"elsa-transform elsa-opacity-100 elsa-scale-100","data-transition-leave-end":"elsa-transform elsa-opacity-0 elsa-scale-95",class:"hidden elsa-origin-top-right elsa-absolute elsa-right-1 elsa-mt-1 elsa-w-56 elsa-rounded-md elsa-shadow-lg elsa-bg-white elsa-ring-1 elsa-ring-black elsa-ring-opacity-5 elsa-divide-y elsa-divide-gray-100 focus:elsa-outline-none elsa-z-10",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu"},t("div",{class:"elsa-py-1",role:"none"},t("a",{onClick:s=>this.selectSyntax(s,null),href:"#",class:"elsa-block elsa-px-4 elsa-py-2 elsa-text-sm hover:elsa-bg-gray-100 hover:elsa-text-gray-900 "+(s?"elsa-text-gray-700":"elsa-text-blue-700"),role:"menuitem"},"Default")),t("div",{class:"elsa-py-1",role:"none"},this.supportedSyntaxes.map((e=>t("a",{onClick:s=>this.selectSyntax(s,e),href:"#",class:"elsa-block elsa-px-4 elsa-py-2 elsa-text-sm hover:elsa-bg-gray-100 hover:elsa-text-gray-900 "+(s==e?"elsa-text-blue-700":"elsa-text-gray-700"),role:"menuitem"},e)))))))}renderContextMenuButton(){return this.selectedSyntax?t("span",null,this.selectedSyntax):t("svg",{class:"elsa-h-5 elsa-w-5 elsa-text-gray-400",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},t("path",{stroke:"none",d:"M0 0h24v24H0z"}),t("circle",{cx:"12",cy:"12",r:"9"}),t("line",{x1:"8",y1:"12",x2:"8",y2:"12.01"}),t("line",{x1:"12",y1:"12",x2:"12",y2:"12.01"}),t("line",{x1:"16",y1:"12",x2:"16",y2:"12.01"}))}renderEditor(){const s=this.selectedSyntax,e=n(s),i=s?"hidden":"block";return t("div",null,t("div",{class:s?"block":"hidden"},t("elsa-expression-editor",{ref:s=>this.expressionEditor=s,onExpressionChanged:s=>this.onExpressionChanged(s),expression:this.currentValue,language:e,editorHeight:this.editorHeight,singleLineMode:this.singleLineMode,context:this.context})),t("div",{class:i},t("slot",null)))}},u=class{constructor(t){s(this,t),this.defaultSyntaxValueChanged=e(this,"defaultSyntaxValueChanged",7),this.editorHeight="10em",this.singleLineMode=!1,this.showLabel=!0}onSyntaxChanged(s){this.propertyModel.syntax=s.detail}onExpressionChanged(s){const e=this.propertyDescriptor.defaultSyntax||i.Literal,t=this.propertyModel.syntax||e;this.propertyModel.expressions[t]=s.detail,t==e&&this.defaultSyntaxValueChanged.emit(s.detail)}render(){const s=this.propertyDescriptor,e=this.propertyModel,i=s.hint;return t("div",null,t("elsa-multi-expression-editor",{onSyntaxChanged:s=>this.onSyntaxChanged(s),onExpressionChanged:s=>this.onExpressionChanged(s),fieldName:s.name,label:this.showLabel?s.label:null,syntax:e.syntax,defaultSyntax:s.defaultSyntax,isReadOnly:s.isReadOnly,expressions:e.expressions,supportedSyntaxes:s.supportedSyntaxes,"editor-height":this.editorHeight},t("slot",null)),i?t("p",{class:"elsa-mt-2 elsa-text-sm elsa-text-gray-500"},i):void 0)}};u.style="";export{c as elsa_expression_editor,p as elsa_multi_expression_editor,u as elsa_property_editor}