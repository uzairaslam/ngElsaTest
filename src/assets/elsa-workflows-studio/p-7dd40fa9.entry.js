import{r as s,h as e}from"./p-d44d1ddb.js";import{S as t}from"./p-25ed19bb.js";import{p as a}from"./p-4bdcf3f8.js";import{g as l}from"./p-0e854430.js";import{T as r}from"./p-89475ce8.js";import"./p-a3b5bd35.js";import"./p-80de33dc.js";import"./p-bdae1cb5.js";import"./p-e47f7c7d.js";import"./p-f90ae5bc.js";import"./p-d17a08e5.js";import"./p-83f217d4.js";const i=class{constructor(e){s(this,e)}async componentWillLoad(){null==this.propertyModel.expressions[t.Json]&&(this.propertyModel.expressions[t.Json]=JSON.stringify(this.propertyDescriptor.defaultValue)),this.currentValue=this.propertyModel.expressions[t.Json]||"[]"}onCheckChanged(s){const e=s.target,l=e.checked,r=e.value;let i=a(this.currentValue);i=l?[...i,r].distinct():i.filter((s=>s!==r)),this.currentValue=JSON.stringify(i),this.propertyModel.expressions[t.Json]=this.currentValue}onDefaultSyntaxValueChanged(s){this.currentValue=s.detail}async componentWillRender(){this.items=await l(this.serverUrl,this.propertyDescriptor)}render(){const s=this.propertyDescriptor,t=this.propertyModel,l=s.name,r=this.items,i=a(this.currentValue)||[];return e("elsa-property-editor",{propertyDescriptor:s,propertyModel:t,onDefaultSyntaxValueChanged:s=>this.onDefaultSyntaxValueChanged(s),"single-line":!0},e("div",{class:"elsa-max-w-lg elsa-space-y-3 elsa-my-4"},r.map(((s,t)=>{const a=`${l}_${t}`,r="string"==typeof s,o=r?s:s.value,p=r?s:s.text,c=i.findIndex((s=>s==o))>=0;return e("div",{class:"elsa-relative elsa-flex elsa-items-start"},e("div",{class:"elsa-flex elsa-items-center elsa-h-5"},e("input",{id:a,type:"checkbox",checked:c,value:o,onChange:s=>this.onCheckChanged(s),class:"focus:elsa-ring-blue-500 elsa-h-4 elsa-w-4 elsa-text-blue-600 elsa-border-gray-300 elsa-rounded"})),e("div",{class:"elsa-ml-3 elsa-mt-1 elsa-text-sm"},e("label",{htmlFor:a,class:"elsa-font-medium elsa-text-gray-700"},p)))}))))}};r.injectProps(i,["serverUrl"]);export{i as elsa_check_list_property}