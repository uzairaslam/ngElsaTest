var t,s,e,i,a,n;!function(t){t.Burst="Burst",t.Activity="Activity"}(t||(t={})),function(t){t.Suspended="Suspended",t.WorkflowBurst=" WorkflowBurst",t.WorkflowPassCompleted="WorkflowPassCompleted",t.ActivityExecuted="ActivityExecuted"}(s||(s={})),function(t){t.Test1="Test1",t.Test2="Test2",t.Test3="Test3"}(e||(e={})),function(t){t.Idle="Idle",t.Running="Running",t.Finished="Finished",t.Suspended="Suspended",t.Faulted="Faulted",t.Cancelled="Cancelled"}(i||(i={})),function(t){t.Started="Started",t.LastExecuted="LastExecuted",t.Finished="Finished"}(a||(a={})),function(t){t[t.Action=1]="Action",t[t.Trigger=2]="Trigger",t[t.Job=4]="Job"}(n||(n={}));class u{}u.Literal="Literal",u.JavaScript="JavaScript",u.Liquid="Liquid",u.Json="Json",u.Variable="Variable",u.Output="Output";const o=t=>t?t.allVersions?"AllVersions":t.isDraft?"Draft":t.isLatest?"Latest":t.isPublished?"Published":t.isLatestOrPublished?"LatestOrPublished":t.version.toString():"";export{n as A,a as O,u as S,e as T,t as W,s as a,i as b,o as g}