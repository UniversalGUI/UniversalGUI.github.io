function forward(o){var d=new RegExp("^(?:/)(?:[^ ]*)(?:"+o[1]+")(?:.*)$","gm");return d.test(desiredURL)?void window.location.replace(o[0]):void 0}for(var desiredURL=window.location.pathname,set=[["/download","download"],["/download","dl"],["/download","archive"],["/download","binaries"],["/api","api"],["/docs","doc"],["/docs/latest","anotated"],["/docs/latest","annotated"],["/docs/latest","source"],["/docs/latest","latest"]],i=0;i<set.length;i++)forward(set[i]);
