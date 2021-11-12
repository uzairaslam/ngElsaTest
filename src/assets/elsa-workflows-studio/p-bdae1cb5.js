import{a as t}from"./p-e47f7c7d.js";import{E as i,H as n}from"./p-f90ae5bc.js";import{c as a}from"./p-a3b5bd35.js";import{e as s}from"./p-d17a08e5.js";import{g as e}from"./p-25ed19bb.js";let o=null,r=null;const w=async function(a){if(o)return o;const e={baseURL:a};await s.emit(i.HttpClientConfigCreated,this,{config:e});const r=t.create(e),w=new n(r);return await s.emit(i.HttpClientCreated,this,{service:w,httpClient:r}),o=r},c=async function(t){if(r)return r;const i=await w(t);return r={activitiesApi:{list:async()=>(await i.get("v1/activities")).data},workflowDefinitionsApi:{list:async(t,n,a)=>{const s=e(a);return(await i.get(`v1/workflow-definitions?version=${s}`)).data},getMany:async(t,n)=>{const a=e(n);return(await i.get(`v1/workflow-definitions?ids=${t.join(",")}&version=${a}`)).data.items},getByDefinitionAndVersion:async(t,n)=>{const a=e(n);return(await i.get(`v1/workflow-definitions/${t}/${a}`)).data},save:async t=>(await i.post("v1/workflow-definitions",t)).data,delete:async t=>{await i.delete(`v1/workflow-definitions/${t}`)},retract:async t=>(await i.post(`v1/workflow-definitions/${t}/retract`)).data,publish:async t=>(await i.post(`v1/workflow-definitions/${t}/publish`)).data,export:async(t,n)=>{const a=e(n),s=await i.post(`v1/workflow-definitions/${t}/${a}/export`,null,{responseType:"blob"}),o=s.headers["content-disposition"];return{fileName:o?o.split(";")[1].split("=")[1]:`workflow-definition-${t}.json`,data:s.data}},import:async(t,n)=>{const a=new FormData;return a.append("file",n),(await i.post(`v1/workflow-definitions/${t}/import`,a,{headers:{"Content-Type":"multipart/form-data"}})).data}},workflowRegistryApi:{list:async(t,n,a)=>{const s=e(a);return(await i.get(`v1/workflow-registry?version=${s}`)).data},get:async(t,n)=>{const a=e(n);return(await i.get(`v1/workflow-registry/${t}/${a}`)).data}},workflowInstancesApi:{list:async(t,n,s,e,o,r)=>{const w={};s&&(w.workflow=s),null!=e&&(w.status=e),o&&(w.orderBy=o),r&&(w.searchTerm=r),t&&(w.page=t),n&&(w.pageSize=n);const c=a.map(w,((t,i)=>`${i}=${t}`)),l=c.length>0?`?${c.join("&")}`:"";return(await i.get(`v1/workflow-instances${l}`)).data},get:async t=>(await i.get(`v1/workflow-instances/${t}`)).data,cancel:async t=>{await i.post(`v1/workflow-instances/${t}/cancel`)},delete:async t=>{await i.delete(`v1/workflow-instances/${t}`)},bulkCancel:async t=>(await i.post("v1/workflow-instances/bulk/cancel",t)).data,bulkDelete:async t=>(await i.delete("v1/workflow-instances/bulk",{data:t})).data},workflowExecutionLogApi:{get:async(t,n,s)=>{const e={};n&&(e.page=n),s&&(e.pageSize=s);const o=a.map(e,((t,i)=>`${i}=${t}`)),r=o.length>0?`?${o.join("&")}`:"";return(await i.get(`v1/workflow-instances/${t}/execution-log${r}`)).data}},scriptingApi:{getJavaScriptTypeDefinitions:async(t,n)=>(n=n||"",(await i.get(`v1/scripting/javascript/type-definitions/${t}?t=${(new Date).getTime()}&context=${n}`)).data)},designerApi:{runtimeSelectItemsApi:{get:async(t,n)=>(await i.post("v1/designer/runtime-select-list-items",{providerTypeName:t,context:n})).data}},activityStatsApi:{get:async(t,n)=>(await i.get(`v1/workflow-instances/${t}/activity-stats/${n}`)).data},workflowStorageProvidersApi:{list:async()=>(await i.get("v1/workflow-storage-providers")).data},workflowChannelsApi:{list:async()=>(await i.get("v1/workflow-channels")).data}},r};export{c as a,w as c}