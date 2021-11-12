import{r as e,c as t,h as i,H as n}from"./p-d44d1ddb.js";import{s}from"./p-c550dea5.js";const o=window,r=o.require;let a=!1;const l=class{constructor(i){e(this,i),this.valueChanged=t(this,"valueChanged",7),this.monaco=window.monaco,this.editorHeight="5em",this.singleLineMode=!1}languageChangeHandler(e){if(!this.editor)return;const t=this.editor.getModel();this.monaco.editor.setModelLanguage(t,this.language)}async setValue(e){this.editor&&this.editor.getModel().setValue(e||"")}async addJavaScriptLib(e,t){const i=this.monaco;i.languages.typescript.javascriptDefaults.setExtraLibs([{content:e,filePath:t}]);const n=i.editor.getModel(t);n&&n.dispose(),i.editor.createModel(e,"typescript",i.Uri.parse(t))}componentWillLoad(){!function(e){if(a)return;if(!e)return;const t=document.location.origin,i=e.startsWith("http")?e:`${t}/${e}`;r.config({paths:{vs:`${i}/vs`}}),o.MonacoEnvironment={getWorkerUrl:()=>n};let n=URL.createObjectURL(new Blob([`\n\tself.MonacoEnvironment = {\n\t\tbaseUrl: '${i}'\n\t};\n\timportScripts('${i}/vs/base/worker/workerMain.js');\n`],{type:"text/javascript"}));a=!0}(s.monacoLibPath),this.registerLiquid()}componentDidLoad(){(0,window.require)(["require","vs/editor/editor.main"],(async()=>{const e=this.monaco,t=this.language;e.languages.typescript.javascriptDefaults.setDiagnosticsOptions({noSemanticValidation:!0,noSyntaxValidation:!1}),e.languages.typescript.javascriptDefaults.setCompilerOptions({target:e.languages.typescript.ScriptTarget.ES2020,lib:[],allowNonTsExtensions:!0,allowJs:!0}),e.languages.typescript.javascriptDefaults.setEagerModelSync(!0);const i={value:this.value,language:t,fontFamily:"Roboto Mono, monospace",renderLineHighlight:"none",minimap:{enabled:!1},automaticLayout:!0,lineNumbers:"on",theme:"vs",roundedSelection:!0,scrollBeyondLastLine:!1,readOnly:!1,overviewRulerLanes:0,overviewRulerBorder:!1,lineDecorationsWidth:0,hideCursorInOverviewRuler:!0,glyphMargin:!1};let n=i;this.singleLineMode&&(n=Object.assign(Object.assign({},i),{wordWrap:"off",lineNumbers:"off",lineNumbersMinChars:0,folding:!1,scrollBeyondLastColumn:0,scrollbar:{horizontal:"hidden",vertical:"hidden"},find:{addExtraSpaceOnTop:!1,autoFindInSelection:"never",seedSearchStringFromSelection:!1}})),this.editor=e.editor.create(this.container,n),this.editor.onDidChangeModelContent((()=>{const i=this.editor.getValue(),n=e.editor.getModelMarkers({owner:t});this.valueChanged.emit({value:i,markers:n})})),this.singleLineMode&&(this.editor.onKeyDown((t=>{t.keyCode==e.KeyCode.Enter&&0==this.editor.getContribution("editor.contrib.suggestController").model.state&&t.preventDefault()})),this.editor.onDidPaste((e=>{if(e.range.endLineNumber>1){let e="";const t=this.editor.getModel();let i=t.getLineCount();for(let n=0;n<i;n++)e+=t.getLineContent(n+1);t.setValue(e)}})))}))}disconnectedCallback(){const e=this.editor;e&&e.dispose()}registerLiquid(){const e=window.monaco;e.languages.register({id:"liquid"}),e.languages.registerCompletionItemProvider("liquid",{provideCompletionItems:()=>{const t=[],i=["assign","capture","endcapture","increment","decrement","if","else","elsif","endif","for","endfor","break","continue","limit","offset","range","reversed","cols","case","endcase","when","block","endblock","true","false","in","unless","endunless","cycle","tablerow","endtablerow","contains","startswith","endswith","comment","endcomment","raw","endraw","editable","endentitylist","endentityview","endinclude","endmarker","entitylist","entityview","forloop","image","include","marker","outputcache","plugin","style","text","widget","abs","append","at_least","at_most","capitalize","ceil","compact","concat","date","default","divided_by","downcase","escape","escape_once","first","floor","join","last","lstrip","map","minus","modulo","newline_to_br","plus","prepend","remove","remove_first","replace","replace_first","reverse","round","rstrip","size","slice","sort","sort_natural","split","strip","strip_html","strip_newlines","times","truncate","truncatewords","uniq","upcase","url_decode","url_encode"];for(let n=0;n<i.length;n++)t.push({label:i[n],kind:e.languages.CompletionItemKind.Keyword});return{suggestions:t}}})}render(){return i(n,{class:"elsa-monaco-editor-host elsa-border focus:elsa-ring-blue-500 focus:elsa-border-blue-500 elsa-block elsa-w-full elsa-min-w-0 elsa-rounded-md sm:elsa-text-sm elsa-border-gray-300 elsa-p-4",style:{"min-height":this.editorHeight}},i("div",{ref:e=>this.container=e,class:`elsa-monaco-editor-container ${this.padding||"elsa-pt-1.5 elsa-pl-1"}`}))}static get watchers(){return{language:["languageChangeHandler"]}}};l.style=".elsa-monaco-editor-host{display:block;min-height:6em;position:relative}.elsa-monaco-editor-container{height:100%;left:0;margin:0;max-height:100%!important;padding:0;position:absolute;top:0;width:100%}";export{l as elsa_monaco}