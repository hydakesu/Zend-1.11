/** 
 * plugins = []
 */ 
var app;
var fileUploadFlg = 0;
function appTojqwidgetsImpl(type, plugins)  
{  
	this.type = type;
	this.pluginsPath = {
		"jqxbuttons":"common/jqwidgets/jqxbuttons.js",
		"jqxinput":"common/jqwidgets/jqxinput.js",
		"jqxwindow":{
			"jqxwindow":"common/jqwidgets/jqxwindow.js",
			"jqxbuttons":"common/jqwidgets/jqxbuttons.js"
		},
		"jqxtree":{
			"jqxtree":"common/jqwidgets/jqxtree.js",
			"jqxcheckbox":"common/jqwidgets/jqxcheckbox.js"
		},
		"jqxgrid":{
			"jqxdata":"common/jqwidgets/jqxdata.js",
			"jqxdatatable":"common/jqwidgets/jqxdatatable.js",
			"jqxscrollbar":"common/jqwidgets/jqxscrollbar.js"
		},
		"jqxdropdownbutton":{
			"jqxdropdownbutton":"common/jqwidgets/jqxdropdownbutton.js",
			"jqxtree":"common/jqwidgets/jqxtree.js",
			"jqxbuttons":"common/jqwidgets/jqxbuttons.js"
		},
		"jqxdatetimeinput":{
			"jqxdatetimeinput":"common/jqwidgets/jqxdatetimeinput.js",
			"jqxcalendar":"common/jqwidgets/jqxcalendar.js",
			"globalize":"common/jqwidgets/globalization/globalize.js"
		},
		"jqxcheckbox":"common/jqwidgets/jqxcheckbox.js",
		"jqxeditor":{
			"jqxeditor":"common/jqwidgets/jqxeditor.js",
			"jqxbuttons":"common/jqwidgets/jqxbuttons.js",
			"jqxscrollbar":"common/jqwidgets/jqxscrollbar.js",
			"jqxlistbox":"common/jqwidgets/jqxlistbox.js",
			"jqxdropdownlist":"common/jqwidgets/jqxdropdownlist.js",
			"jqxdropdownbutton":"common/jqwidgets/jqxdropdownbutton.js",
			"jqxwindow":"common/jqwidgets/jqxwindow.js",
			"jqxtooltip":"common/jqwidgets/jqxtooltip.js"
		},
		"jqxfileupload":{
			"jqxfileupload":"common/jqwidgets/jqxfileupload.js",
			"jqxbuttons":"common/jqwidgets/jqxbuttons.js"
		},
		"jqxmenu":"common/jqwidgets/jqxmenu.js",
		"jqxtabs":"common/jqwidgets/jqxtabs.js",
		"jqxcombobox":{
			"jqxcombobox":"common/jqwidgets/jqxcombobox.js",
			"jqxlistbox":"common/jqwidgets/jqxlistbox.js",
			"jqxscrollbar":"common/jqwidgets/jqxscrollbar.js",
			"jqxbuttons":"common/jqwidgets/jqxbuttons.js"
		},
		"jqxvalidator":"common/jqwidgets/jqxvalidator.js",
		"ajaxsubmit":"common/js/jquery.form.min.js",
		"jqxsplitter":{
			"jqxsplitter":"common/jqwidgets/jqxsplitter.js",
			"jqxbuttons":"common/jqwidgets/jqxbuttons.js",
			"jqxscrollbar":"common/jqwidgets/jqxscrollbar.js",
			"jqxpanel":"common/jqwidgets/jqxpanel.js"
		}
	};
	
	this.rules = [];
	this.message;
	this.baseUrl;
	this.openDialog = false;;
	app = this;
	
	this.initJqxloader();
	this.initElements(plugins);
}

var loaddedPlugins = {}
appTojqwidgetsImpl.prototype = {  
    constructor: appTojqwidgetsImpl,  
    
    /** 
     * 初始化所有元素 
     */  
    initElements: function (plugins)  
    {
    	if(plugins == undefined){
    		return;
    	};
    	
    	var pluginstr = plugins.toString().toLowerCase();
    	var evalStr  = "";
    	if(pluginstr.indexOf("jqxmenu") != -1){
    		eval("var result1 = this.initMenu();");
    		evalStr += ", result1";
    	}
    	
    	if(pluginstr.indexOf("jqxinput") != -1){
    		eval("var result2 = this.initInput();");
    		evalStr += ", result2";
    	}
    	
    	if(pluginstr.indexOf("jqxbuttons") != -1){
    		eval("var result3 = this.initBtn();");
    		evalStr += ", result3";
    	}
    	
    	if(pluginstr.indexOf("jqxdropdownbutton") != -1){
    		eval("var result4 = this.initJqxdropdownbutton();");
    		evalStr += ", result4";
    	}
    	
    	if(pluginstr.indexOf("jqxtree") != -1){
    		eval("var result5 = this.initTree();");
    		evalStr += ", result5";
    	}
    	
    	if(pluginstr.indexOf("jqxgrid") != -1){
    		eval("var result6 = this.initGrid();");
    		evalStr += ", result6";
    	}
    	
    	if(pluginstr.indexOf("jqxdatetimeinput") != -1){
    		eval("var result7 = this.initDatetimeinput();");
    		evalStr += ", result7";
    	}
    	
    	if(pluginstr.indexOf("jqxcheckbox") != -1){
    		eval("var result8 = this.initJqxCheckBox();");
    		evalStr += ", result8";
    	}
    	
    	if(pluginstr.indexOf("jqxcombobox") != -1){
    		eval("var result9 = this.initJqxcombobox();");
    		evalStr += ", result9";
    	}
    	
    	if(pluginstr.indexOf("jqxeditor") != -1){
    		eval("var result10 = this.initJqxeditor();");
    		evalStr += ", result10";
    	}
    	
    	if(pluginstr.indexOf("jqxfileupload") != -1){
    		eval("var result11 = this.initJqxfileupload();");
    		evalStr += ", result11";
    	}
    	
    	if(pluginstr.indexOf("jqxtabs") != -1){
    		eval("var result12 = this.initJqxtabs();");
    		evalStr += ", result12";
    	}
    	
    	if(pluginstr.indexOf("jqxsplitter") != -1){
    		eval("var result13 = this.initJqxsplitter();");
    		evalStr += ", result13";
    	}
    	
    	var whenResult = $.when(eval(evalStr.substring(1)));
    	
    	if(this.type == "detail"){
    		whenResult.done(function(){
    			app.initForm();
    			$('#jqxLoader').jqxLoader('close');
    		});
    	}else{
    		whenResult.done(function(){
        		$('#jqxLoader').jqxLoader('close');
    		});
    	}
    },
    initMenu:function(){
    	var dtd = $.Deferred();
    	
    	var result = this.loadPlugins(this, "jqxmenu");
    	result.done(function(obj){
    		$("#jqxMenu").find("a").each(function(){
    			$(this).on('click', function(){
	    			eval("app.to" + this.id + "();");
	    		});
    		});
    		
    		$("#jqxMenu").jqxMenu({ width: '100%', height: '30px', theme:'dark'});
    		$("#jqxMenu").show();
    		dtd.resolve();
    	})
    	.fail(function(e){ 
    		app.showDialog("Error", '1', "initMenu Initial Error!\r\n" + e.getMessage());
    		dtd.reject();
    	});
    	
    	return dtd.promise();
    },
    initJqxsplitter:function(){
    	var dtd = $.Deferred();
    	
    	var result = this.loadPlugins(this, "jqxsplitter");
    	result.done(function(obj){
    		$('#jqxsplitter').jqxSplitter({ 
    			width: '100%', 
    			height: $(window).height() - 40, 
    			panels: [{ size: 350 }],
    			Theme:"light"
    		});
    		
    		dtd.resolve();
    	})
    	.fail(function(e){ 
    		app.showDialog("Error", '1', "initMenu Initial Error!\r\n" + e.getMessage());
    		dtd.reject();
    	});
    	
    	return dtd.promise();
    },
    initForm:function(){
    	var dtd = $.Deferred();
    	
    	var result = this.loadPlugins(this, "jqxvalidator");
    	result.done(function(obj){
    		if(app.rules.length > 0){
        		$('#detailForm').jqxValidator({rules : app.rules,
        									   hintType : 'label'
        		});
        	};
        	
        	dtd.resolve();
    	})
    	.fail(function(e){ 
    		app.showDialog("Error", '1', "jqxvalidator Initial Error!\r\n" + e.getMessage());
    		
    		dtd.reject();
    	});
    	
    	return dtd.promise();
    },
    initBtn:function(){
    	var dtd = $.Deferred();
    	
    	var result = this.loadPlugins(this, "jqxbuttons");
    	result.done(function(obj){
    		$(".jqxButton").each(function(){
    			var id = this.id;
    			var func = "";
    			var funcNm;
    			
    			if($(this).attr("func") == undefined){
    				funcNm = function(){
    					app.showDialog("Info", '2', "Function No Set!");
    				};
    				
    				func = "funcNm()";
    			}else{
    				func = $(this).attr("func");
    			}
    			
	    		var jqxBtnConfig = {
	        			width: 90, 
	        			height: 27,
	        			Theme:"light"
	        	};
	    		
	    		if(typeof($(this).attr("prop")) != "undefined"){
	    			var prop = eval("(" + $(this).attr("prop") + ")");
	    			if(prop["width"]){
	    				jqxBtnConfig.width = prop["width"];
	    			}
	    			
	    			if(prop["imgSrc"]){
	    				jqxBtnConfig.imgPosition = "left";
		    			jqxBtnConfig.textPosition = "center";
		    			jqxBtnConfig.imgSrc = "common/jqwidgets/styles/images/" + prop["imgSrc"];
		    			jqxBtnConfig.textImageRelation = "imageBeforeText";
	    			}
	    		}
	    		
	    		$("#" + id).jqxButton(jqxBtnConfig);
	    		
	    		$("#" + id).on('click', function(){
	    			eval(func);
	    		});
	    		
	    		jqxBtnConfig = null;
    		});
    		
    		dtd.resolve();
    	})
    	.fail(function(e){ 
    		app.showDialog("Error", '1', "jqxbuttons Initial Error!!\r\n" + e.getMessage());
    		dtd.reject();
    	});
    	
    	return dtd.promise();
    },
    initJqxdropdownbutton:function(){
    	var dtd = $.Deferred();
    	
    	var result = this.loadPlugins(this, "jqxdropdownbutton");
    	result.done(function(obj){
    		$(".dropDownBtn").each(function(){
    			var jDDBtn = $(this);
    			jDDBtn.jqxDropDownButton({
    				  width: 150
    				, height: 25
    				, autoOpen:true
    				, Theme:"light"
    			});
    			
    			var treeBtns = $("#" + jDDBtn.attr("child"));
    			
    			treeBtns.jqxTree({ width: 200});
    			
    			treeBtns.on('select', function (event) {
                    var args = event.args;
                    var item = treeBtns.jqxTree('getItem', args.element);

                    var dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 5px;">' + item.label + '</div>';
                    jDDBtn.jqxDropDownButton('setContent', dropDownContent);
                });
    		});
    		
    		dtd.resolve();
    	})
    	.fail(function(e){ 
    		app.showDialog("Error", '1', "jqxdropdownbutton Initial Error!\r\n" + e.getMessage());
    		
    		dtd.reject();
    	});
    	
    	return dtd.promise();
    },
    initInput:function(){
    	var dtd = $.Deferred();
    	
    	var that = this;
    	var result = this.loadPlugins(this, "jqxinput");
    	
    	result.done(function(obj){
        	$(".jqxinput").each(function(){
        		var jqxInpConfig = {
            			width: 150, 
            			height: 25,
            			Theme:"light",
            			minLength:1
            	};
        		
        		if(typeof($(this).attr("prop")) != "undefined"){
        			var prop = eval("(" + $(this).attr("prop") + ")");
        			if(prop["width"]){
        				jqxInpConfig.width = prop["width"];
        			}
        			
        			if(prop["placeHolder"]){
        				jqxInpConfig.placeHolder = prop["placeHolder"];
        			}
        		}
        		
        		$(this).jqxInput(jqxInpConfig);
        		jqxInpConfig = null;
        		
        		if($(this).attr("rule") != undefined){
        			var rule = $(this).attr("rule");
        			var ruleArray = rule.split("|");
        			for(var i = 0; i < ruleArray.length; i++){
        				app.rules.push({
            				'input': '#' + this.id, 
            				'message': 'Username is required!', 
            				'action': ($(this).attr("action") != undefined && $.trim($(this).attr("action")) != "")?$(this).attr("action"):'keyup, blur', 
            				'rule': ruleArray[i]
            			});
        			}
        		}
        	});
        	
        	dtd.resolve();
    	}).fail(function(e){
    		app.showDialog("Error", '1', "jqxinput Initial Error!\r\n" + e.getMessage());
    		dtd.reject();
    	});
    	
    	return dtd.promise();
    },
    initTree:function(){
    	var dtd = $.Deferred();
    	
    	var that = this;
    	var result = this.loadPlugins(this, "jqxtree");
    	result.done(function(obj){
    		var testSource = [
    		    { label: "Item 1", 
    		      expanded: true, items: [
    		    	  { label: "Item 1.1" },
    		    	  { label: "Item 1.2", selected: true }
    		        ]
    		    },
    		    { label: "Item 2" },
    		    { label: "Item 3" },
    		    { label: "Item 4", items: [
    		        { label: "Item 4.1" },
    		        { label: "Item 4.2" }
    		    ]
    		    },
    		    { label: "Item 5" },
    		    { label: "Item 6" },
    		    { label: "Item 7" }
    		];
    		
    		$('#jqxTree').jqxTree({
    			height: '400px',
    			hasThreeStates: true,
    			checkboxes: true,
    			width: '320px',
    			Theme:"light",
    			source:testSource
    		});
    		
    		dtd.resolve();
    	}).fail(function(e){
    		app.showDialog("Error", '1', "jqxtree Initial Error!\r\n" + e.getMessage());
    		dtd.reject();
    	});
    	
    	return dtd.promise();
    },
    initGrid:function(){
    	var dtd = $.Deferred();
    	
    	var result = this.loadPlugins(this, "jqxgrid");
    	result.done(function(obj){
    		var width  = $(window).width()- 370;
    		if($(window).height() < 768){
    			var height = 768;
    		}else{
    			var height = $(window).height() - 95;
    		}
    		
    		var jqxConfig = {
    				width:width,
        			height:height,
        			Theme:"light",
        			pageable: true,
                    pagerButtonsCount: 10,
                    serverProcessing: true,
        			columnsResize: true
    		};
    		
    		var config    = $("#dataTable").attr("config");
    		var detailUrl = "";
    		if(config != undefined){
    			var appConfig = eval(config + "();");
        		
    			if(appConfig["detailUrl"]){
    				detailUrl = appConfig["detailUrl"];
    				delete appConfig["detailUrl"];
    			}
    			
        		jqxConfig = $.extend(jqxConfig, appConfig)
    		};
    		
    		$("#dataTable").jqxDataTable(jqxConfig);
    		
			$('#dataTable').on('rowDoubleClick', function(e){
				var args = e.args;
				
				app.openPostWindow("demoDetail", "demoDetail", {id:args.key, model:'view'});
    		});
    		
    		dtd.resolve();
    	}).fail(function(e){
    		app.showDialog("Error", '1', "jqxDataTable Initial Error!\r\n" + e.getMessage());
    		
    		dtd.reject();
    	});
    	
    	return dtd.promise();
    },
    initDatetimeinput:function(){
    	var dtd = $.Deferred();
    	
    	var result = this.loadPlugins(this, "jqxdatetimeinput");
    	result.done(function(obj){
        	$(".jqxDateTimeInput").each(function(){
        		var jqxInpConfig = {
        				formatString: 'yyyy-MM-dd',
        				theme:"light",
            			width:'200',
            			template: "primary",
            			placeHolder: 'Null Value'
            	};
        		
        		var config = $(this).attr("config");
        		if(config != undefined){
        			var appConfig = eval(config + "();");
            		
        			jqxInpConfig = $.extend(jqxInpConfig, appConfig)
        		}
        		
        		$(this).jqxDateTimeInput(jqxInpConfig);
        		jqxInpConfig = null;
        		
        		if($(this).attr("rule") != undefined){
        			app.rules.push({
        				input: '#' + this.id, 
        				message: 'Username is required!', 
        				action: ($(this).attr("action") != undefined && $.trim($(this).attr("action")) != "")?$(this).attr("action"):'keyup, blur', 
        				rule: eval("app." + $(this).attr("rule")) //app.__proto__[$(this).attr("rule")]
        			});
        		}
        	});
        	
        	dtd.resolve();
    	}).fail(function(e){
    		app.showDialog("Error", '1', "jqxDateTimeInput Initial Error!\r\n" + e.getMessage());
    		
    		dtd.reject();
    	});
    	
    	return dtd.promise();
    },
    initJqxCheckBox:function(){
    	var dtd = $.Deferred();
    	
    	var result = this.loadPlugins(this, "jqxcheckbox");
    	result.done(function(obj){
        	$(".jqxcheckbox").each(function(){
        		var jqxInpConfig = {
        				theme:"light",
            			width:'130px'
            	};
        		
        		var config = $(this).attr("config");
        		if(config != undefined){
        			var appConfig = eval(config + "();");
            		
        			jqxInpConfig = $.extend(jqxInpConfig, appConfig)
        		}
        		
        		$(this).jqxCheckBox(jqxInpConfig);
        		jqxInpConfig = null;
        		
        		if($(this).attr("rule") != undefined){
        			app.rules.push({
        				input: '#' + this.id, 
        				message: 'Username is required!', 
        				action: ($(this).attr("action") != undefined && $.trim($(this).attr("action")) != "")?$(this).attr("action"):'keyup, blur', 
        				rule: eval("app." + $(this).attr("rule")) //app.__proto__[$(this).attr("rule")]
        			});
        		}
        	});
        	
        	dtd.resolve();
    	}).fail(function(e){
    		app.showDialog("Error", '1', "initJqxCheckBox Initial Error!\r\n" + e.getMessage());
    		
    		dtd.reject();
    	});
    	
    	return dtd.promise();
    },
    initJqxeditor:function(){
    	var dtd = $.Deferred();
    	
    	var result = this.loadPlugins(this, "jqxeditor");
    	result.done(function(obj){
        	$(".jqxeditor").each(function(){
        		var jqxInpConfig = {
        				theme:"light",
        			    tools:"bold italic underline | format font size | color background | left center right | outdent indent | ul ol | link | clean | html"
            	};
        		
        		var config = $(this).attr("config");
        		if(config != undefined){
        			var appConfig = eval(config + "();");
            		
        			jqxInpConfig = $.extend(jqxInpConfig, appConfig)
        		}
        		
        		$(this).jqxEditor(jqxInpConfig);
        		jqxInpConfig = null;
        	});
        	
        	dtd.resolve();
    	}).fail(function(e){
    		app.showDialog("Error", '1', "initJqxeditor Initial Error!\r\n" + e.getMessage());
    		
    		dtd.reject();
    	});
    	
    	return dtd.promise();
    },
    initJqxfileupload:function(){
    	var dtd = $.Deferred();
    	
    	var result = this.loadPlugins(this, "jqxfileupload");
    	result.done(function(obj){
        	$(".jqxfileupload").each(function(){
        		var jqxInpConfig = {
        				theme:"light",
        				fileInputName:"fileToUpload",
        				browseTemplate: 'success',
        				uploadTemplate: 'primary',
        				cancelTemplate: 'danger'
            	};
        		
        		var config = $(this).attr("config");
        		if(config != undefined){
        			var appConfig = eval(config + "();");
            		
        			jqxInpConfig = $.extend(jqxInpConfig, appConfig)
        		}
        		
        		$(this).jqxFileUpload(jqxInpConfig);
        		var id = this.id;
        		
        		$(this).on('uploadEnd', function (event) {
        			if(fileUploadFlg == 0){
        		    	var fileInfoHtml = "<div id='fileInfos-" + id + "' style=''><table id='fileInfosT-" + id + "' style='width:100%;border-collapse:collapse;margin-top:5px;margin-bottom:5px;'>";
        		    	fileInfoHtml    += "<tbody><tr style='border:1px solid #86a7ba;background-color: #e5f2fc;text-align:center;height: 30px;'><td colspan='3' style='text-align: left;'>Download Files List</td></tr></tbody></table></div>";
        		    	
        		    	$(this).prepend(fileInfoHtml);
        		    }
        			
        		    var args = event.args;
        		    var fileName = args.file;
        		    var uuid = $.trim(args.response);
        		    var classNm = fileName.substring(fileName.lastIndexOf(".") + 1).toLowerCase();
        		    
        		    var trHtml = "<tr style='border:1px solid #86a7ba;background-color: #e5f2fc;text-align:center;height: 30px;'><td style='width:40px;'><div class='fileType " + classNm + "'></div></td><td style='text-align:left;'>" + fileName + "</td><td style='width:200px;'>";
        		    trHtml    += "<div style='float:left;margin-left:5px;'><input type='button' value='Del' id='delFileBtn-" + fileUploadFlg + "'/></div><div style='float:left;margin-left:5px;'><input type='button' value='Download' id='downFileBtn-" + fileUploadFlg + "'/></div></td></tr>";
        		    $("#fileInfosT-" + id).append(trHtml);
        		    
        		    var jqxBtnConfig = {
    	        			width: 90, 
    	        			height: 27,
    	        			Theme:"light",
    	        			textPosition:"center"
    	        	};
    	    		
        		    $("#delFileBtn-" + fileUploadFlg).jqxButton(jqxBtnConfig);
        		    $("#downFileBtn-" + fileUploadFlg).jqxButton(jqxBtnConfig);
        		    $("#downFileBtn-" + fileUploadFlg).on('click', function() { 
        		    	app.toDownloadFile(uuid);
        		    }); 
        		    
        		    fileUploadFlg++;
        		});
        		
        		jqxInpConfig = null;
        	});
        	
        	dtd.resolve();
    	}).fail(function(e){
    		app.showDialog("Error", '1', "initJqxfileupload Initial Error!\r\n" + e.getMessage());
    		
    		dtd.reject();
    	});
    	
    	return dtd.promise();
    },
    initJqxtabs:function(){
    	var dtd = $.Deferred();
    	
    	var result = this.loadPlugins(this, "jqxtabs");
    	result.done(function(obj){
        	$(".jqxtabs").each(function(){
        		var jqxInpConfig = {
        				theme:"light",
        				collapsible: false
            	};
        		
        		var config = $(this).attr("config");
        		if(config != undefined){
        			var appConfig = eval(config + "();");
            		
        			jqxInpConfig = $.extend(jqxInpConfig, appConfig)
        		};
        		
        		$(this).jqxTabs(jqxInpConfig);
        		jqxInpConfig = null;
        	});
        	
        	dtd.resolve();
    	}).fail(function(e){
    		app.showDialog("Error", '1', "initJqxtabs Initial Error!\r\n" + e.getMessage());
    		
    		dtd.reject();
    	});
    	
    	return dtd.promise();
    },
    initJqxloader:function(){
		var jqxInpConfig = {
				isModal: true, 
				width: '100%', 
				height: '100%', 
				imagePosition: 'center',
				autoOpen:true,
				theme:"light"
    	};
		
		$("#jqxLoader").jqxLoader(jqxInpConfig);
    },
    initJqxcombobox:function(){
    	var dtd = $.Deferred();
    	
    	var result = this.loadPlugins(this, "jqxcombobox");
    	result.done(function(obj){
        	$(".jqxcombobox").each(function(){
        		var jqxInpConfig = {
        				theme:"light",
        				selectedIndex: 0,
        				autoDropDownHeight:true,
        				width: 200, 
        				height: 25
            	};
        		
        		var config = $(this).attr("config");
        		if(config != undefined){
        			var appConfig = eval(config + "();");
            		
        			jqxInpConfig = $.extend(jqxInpConfig, appConfig)
        		};
        		
        		$(this).jqxComboBox(jqxInpConfig);
        		jqxInpConfig = null;
        		
        		if($(this).attr("rule") != undefined){
        			app.rules.push({
        				input: '#' + this.id, 
        				message: 'Username is required!', 
        				action: ($(this).attr("action") != undefined && $.trim($(this).attr("action")) != "")?$(this).attr("action"):'keyup, blur', 
        				rule: eval("app." + $(this).attr("rule")) //app.__proto__[$(this).attr("rule")]
        			});
        		}
        		
        		if($(this).attr("value") != undefined && $.trim($(this).attr("value")) != ""){
        			$(this).jqxComboBox('checkItem', $(this).attr("value"));
        		}
        	});
        	
        	dtd.resolve();
    	}).fail(function(e){
    		app.showDialog("Error", '1', "initJqxtabs Initial Error!\r\n" + e.getMessage());
    		
    		dtd.reject();
    	});
    	
    	return dtd.promise();
    },
    /** 
     * create Dialog Element DIV eventWindow
     */ 
    createDialogElement: function (type, btnType, content) {
    	if($("#eventWindow").length != 0){
    		$('#eventWindow').jqxWindow("destroy");
    	}
    	
    	$("#dialogContent").html("");

        var dialogHtml = "<div id='eventWindow' style=''>";
        dialogHtml    += "    <div>";
        dialogHtml    += "         <img width='14' height='14' src='../public/common/img/help.png' alt='' />";
        dialogHtml    += type;
        dialogHtml    += "    </div>";
        dialogHtml    += "    <div><div style='text-align: center;height: 70%;'>";
        dialogHtml    += content;
        dialogHtml    += "    </div>";
        dialogHtml    += "    <div><div style='text-align: center;float:right;'>";
        
        /** OK　ボタン**/
        if(btnType == "1"){
        	dialogHtml    += "  <input type='button' id='okBtn' value='OK' style='margin-right: 10px' />";
        /** OKとキャンセル　ボタン**/
        }else if(btnType == "2"){
        	dialogHtml    += "  <input type='button' id='cancelBtn' value='cancel' style='margin-right:10px;float:right;'/>";
        	dialogHtml    += "  <input type='button' id='okBtn' value='OK' style='margin-right:10px;float:right;' />";
        }
        dialogHtml    += "    </div></div></div></div>";
        $("#dialogContent").html(dialogHtml);
    },
    /** 
     * show Dialog
     */ 
    showDialog: function (type, btnType, content){
    	this.createDialogElement(type, btnType, content);
    	
    	var result = this.loadPlugins(this, "jqxwindow");
    	result.done(function(obj){
        	var jqxWindowConf = {
    			position: 'center',
    			theme:"light",
                maxHeight: 160, 
                maxWidth: 280, 
                minHeight: 30, 
                minWidth: 250, 
                height: 155, 
                width: 270,
                resizable: false, 
                isModal: true, 
                modalOpacity: 0.1
        	};
        	
        	if(btnType == "1"){
        		jqxWindowConf.cancelButton = $('#okBtn');
        		jqxWindowConf.initContent = function () {
    	    		$('#okBtn').jqxButton({ width: 90, height: 27, Theme:"light"});
    	    		$('#okBtn').focus();
                };
            /** OKとキャンセル　ボタン**/
            }else if(btnType == "2"){
            	jqxWindowConf.okButton     = $('#okBtn');
            	jqxWindowConf.cancelButton = $('#cancelBtn');
            	jqxWindowConf.initContent = function () {
                    $('#okBtn').jqxButton({ width: 90, height: 27, Theme:"light"});
                    $('#cancelBtn').jqxButton({ width: 90, height: 27, Theme:"light"});
                    $('#okBtn').focus();
                };
            };
            
            app.openDialog = true;
    		$('#eventWindow').jqxWindow(jqxWindowConf);
    		
    		$('#eventWindow').on('close', function (event) {
    			app.openDialog = false;
            });
    	});
    },
    loadPlugins: function (obj, plugin){
    	if(typeof(obj.pluginsPath[plugin]) != "object"){
    		if(!loaddedPlugins[plugin]){
    			eval("loaddedPlugins['" + plugin + "'] =  $.getScript('" + obj.pluginsPath[plugin] + "');");
    			
    			return eval("$.when(loaddedPlugins['" + plugin + "'])");
    		}else{
    			return eval("$.when(loaddedPlugins['" + plugin + "'])");
    		}
    	}else{
    		var pluginObj = obj.pluginsPath[plugin];
    		var deferred  = "";

    		for(var plugin in pluginObj){
    			if(!loaddedPlugins[plugin]){
    				eval("loaddedPlugins['" + plugin + "'] =  $.getScript('" + pluginObj[plugin] + "');");
    			}
    			
    			deferred += ", loaddedPlugins['" + plugin + "']";
    		}
    		
    		return eval("$.when(" + deferred.substring(1) + ")");
    	}
    },
    open :function(url, width, height, callback, args){
    	var options = "resizable=yes, location=no, status=yes, scrollbars=yes";
		args["callback"] = callback;
		for (var key in args) {
			url = url + (url.indexOf("?") < 0 ? "?" : "&") + key + "=" + args[key];
		}
		return window.open(url, "_blank", "width=" + width + ", height=" + height + ", " + options);
    },
    openByName :function(url, width, height, callback, windowTarget, args){
    	var x = (screen.width - width) / 2;
		var y = (screen.height - height) / 2;
		var options = "resizable=yes, location=no, status=yes, scrollbars=yes";
		args["callback"] = callback;
		for (var key in args) {
			url = url + (url.indexOf("?") < 0 ? "?" : "&") + key + "=" + args[key];
		}
		var win = window.open(url, this.sanitizeWindowName(windowTarget),
				"screenX=" + x + ", screenY=" + y +
				", left=" + x + ", top=" + y +
				", width=" + width + ", height=" + height +
				", " + options);
		win.focus();
		return win;
    },
    openByTabName :function(url, windowTarget){
    	var win = window.open(url, this.sanitizeWindowName(windowTarget));
		win.focus();
		return win;
    },
    openPostWindow:function(action, target, args){
		var pForm = document.createElement('form');
		pForm.setAttribute('id', 'form_' + action);
		pForm.setAttribute('method', 'post');
		pForm.setAttribute("target", target);
		pForm.setAttribute("action", action);
		
		if(args != null){
			for(var argId in args){
				var hideInput = document.createElement("input");
				hideInput.type="hidden";
				hideInput.name= argId;
				hideInput.value= args[argId];
				
				pForm.appendChild(hideInput);
			}
		}
		
		//IE
		if(window.attachEvent != undefined){  
			pForm.attachEvent("onsubmit",function(){});
        }else{  
            pForm.addEventListener("submit",function(){},false);
        }
		
		document.body.appendChild(pForm);
		
		if(window.attachEvent != undefined){  
			pForm.fireEvent("onsubmit",function(){ app.openByTabName("about:blank", target);});
        }else{  
        	$("#form_" + action).trigger("onsubmit",function(){ app.openByTabName("about:blank", target);});
        }
		
		pForm.submit();
		
		document.body.removeChild(pForm);
	},
    ready :function(method){
    	try {
			window.top.opener[method](window);
		} catch (ex) {
			// no error processing
		}
    },
    callback :function(method, json){
    	try {
			window.top.opener[method](json);
		} catch (ex) {
			// no error processing
		}
    },
    searchwordValidateLogic:function(arg0, arg1){
    	//半角、全角スペースを削除
		v = v.replace(/(^\s*)|(\s*$)/g, "");
		v = v.replace(/(^\u3000*)|(\u3000*$)/g, "");

		var reg = new RegExp(/[0-9\uff10-\uff19]\*|^\*$|[\s\u3000]+\*[\s\u3000]+|^\*[\s\u3000]+|[\s\u3000]+\*$/i);
		if (reg.test(v)) {
			return true; // match
		}
		return false; // unmatch
    },
    sanitizeWindowName: function(winName) {
		
		return winName.replace(/\W/g,"");
	},
	ajaxForPost : function(url, paramObj){
		var dtd = $.Deferred();
		
		if($.trim(url) == ""){
			dtd.reject();
		}else if(url.substring(0, 1) != "/"){
			url = "/" + url;
		}
		
		$.ajax({
			type : "post",
			url : window.location.href + url,
			data : paramObj,
			dataType : "json",
			contentType:"application/json"
		}).done(function(data) {
			dtd.resolve(data);
		}).fail(function(){
			dtd.reject();
		});
		
		return dtd.promise();
	},
	windowResizeForgrid:function(){
		var gridWidth,gridHeight,splitterHeight;
		
		if($(window).width() < 1024){
			gridWidth = 1024 - 370;
		}else{
			gridWidth = $(window).width()- 370;
		}
		
		if($(window).height() < 768){
			gridHeight = 768 - 115;
			splitterHeight = 768 -40;
		}else{
			gridHeight = $(window).height() - 95;
			splitterHeight = $(window).height() - 50;
		}

		$("#dataTable").jqxDataTable({height:gridHeight, width:gridWidth});
		$("#dataTable").jqxDataTable('refresh');
		
		$('#jqxsplitter').jqxSplitter({height:splitterHeight + "px"});
	},
	daterequired:function(input){
		var date = input.jqxDateTimeInput('val');
		if(date == null || date == undefined || $.trim(date) == ""){
			return false;
		}
		
		return true;
	},
	comboboxrequired:function(input){
		var date = input.jqxComboBox('getCheckedItems');
		if(date.length == 0){
			return false;
		}
		
		return true;
	},
	checkboxrequired:function(input){
		var groupId = input.attr("group");
		var cnt     = input.parent().find("div.jqxcheckbox").length;
		var result  = true;
		
		for(var i = 1; i <= cnt; i++){
			result = result && !$("#" + groupId + i).jqxCheckBox("val");
		}
		
		return !result;
	},
	toSave : function(){
		//$('#formSubmitBtn').trigger("click");
		
		app.ajaxsubmit();
	},
	toClose:function(){
		window.close();
	},
	toDownloadFile:function(uuid){
		app.createForm(uuid);
		
		var url = app.baseUrl + "/file/download";
		
		var oForm = document.getElementById('form_' + uuid);
		oForm.setAttribute("action", url);
		
		var exportContent = document.createElement("input");
		exportContent.type="hidden";
		exportContent.name="id";
		exportContent.value=uuid;
		
		oForm.appendChild(exportContent);
		
		oForm.submit();
	},
	createIframe:function(id){
		var temp = document.createElement('div');
		
		temp.innerHTML = '<iframe id="' + id + '_iframe" name="' + id + '_iframe" src="javascript:&quot;&quot;" style="display:none"></iframe>';
		iframe = temp.firstChild;
		document.body.appendChild(iframe);
	},
	createForm:function(id){
		var oIframe = document.getElementById(id + '_iframe');
		if (oIframe){}else{
			app.createIframe(id);
		}
		
		var oForm = document.getElementById('form_' + id);
		if(oForm){
			oForm.parentNode.removeChild(oForm);
		}

		oForm = document.createElement('form');
		oForm.setAttribute('id', 'form_' + id);
		oForm.setAttribute('method', 'post');
		oForm.setAttribute('enctype', 'multipart/form-data');
		oForm.setAttribute('encoding', 'multipart/form-data');
		oForm.setAttribute("target", id + '_iframe');

		document.body.appendChild(oForm);
	},
	ajaxsubmit:function(){
    	var result = this.loadPlugins(this, "ajaxsubmit");
    	
    	result.done(function(obj){
    		var options = {    
    				target : '#output1',   // target element(s) to be updated with server response    
    				beforeSubmit : function(arr, $form, options){
    					return $('#detailForm').jqxValidator('validate');
    				},
    				success : function(data, status, xhr){
    					alert(0);
    				},  // post-submit callback
    				error : function(xhr, status, e){
    					app.showDialog("Error", '1', "Form ajaxsubmit Error!\r\n" + e);
    					return false;
    				},
    				type : "POST",
    				dataType : "json"
    			};
    		
    		var config = $("#detailForm").attr("config");
    		if(config != undefined){
    			var appOptions = eval(config + "();");
        		
    			options = $.extend(options, appOptions);
    		}
    		
    		$("#detailForm").ajaxSubmit(options);
    	})
    	.fail(function(e){ 
    		app.showDialog("Error", '1', "initMenu Initial Error!\r\n" + e.getMessage());
    	});
	},
	setGridWidth:function(param){
		if($(window).width() < 1024){
			var width = 1024 - 370;
		}else{
			var width = $(window).width()- 370;
		}
		
		var widthResult = [];
		for(var i in param){
			widthResult.push(width * param[i]);
		}
		
		return widthResult;
	}
};

//Resize jqGrid when window resize
var _globalLock = 0;
$(window).resize(function() {
	if(app.type == 'list'){
		if (!_globalLock++ && !app.openDialog) {
			setTimeout(function() {
				app.windowResizeForgrid();
				setTimeout(function() { _globalLock = 0; }, 0); // delay unlock
			}, 50);
		}
	}
});

window.onload=function(){
	
}