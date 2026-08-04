// Garden Gnome Software - Skin
// Pano2VR 7.1.12/21036
// Filename: Otica_rio_bonito-menu_oculto_mobile.ggsk
// Generated 2026-08-03T23:22:05

function pano2vrSkin(player,base) {
	player.addVariable('icone', 0, "", { ignoreInState: 0 , customProperty: { variableType: 0, propertyType: 0, defaultValue: "" } });
	player.addVariable('ht_ani', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._cnt_menu=document.createElement('div');
		el.ggId="CNT_MENU";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cnt_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._cnt_menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 900))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cnt_menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cnt_menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cnt_menu.style.transition='';
				if (me._cnt_menu.ggCurrentLogicStateVisible == 0) {
					me._cnt_menu.style.visibility="hidden";
					me._cnt_menu.ggVisible=false;
				}
				else {
					me._cnt_menu.style.visibility=(Number(me._cnt_menu.style.opacity)>0||!me._cnt_menu.style.opacity)?'inherit':'hidden';
					me._cnt_menu.ggVisible=true;
				}
			}
		}
		me._cnt_menu.logicBlock_visible();
		me._cnt_menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._bg_menu=document.createElement('div');
		el.ggId="BG_MENU";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #022857;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 38px 0px;';
		hs+='height : 70%;';
		hs+='left : 0px;';
		hs+='opacity : 0.90002;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._bg_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bg_menu.ggUpdatePosition=function (useTransition) {
		}
		me._cnt_menu.appendChild(me._bg_menu);
		el=me._cnt_footer=document.createElement('div');
		el.ggId="CNT_FOOTER";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 70px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cnt_footer.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cnt_footer.ggUpdatePosition=function (useTransition) {
		}
		me._cnt_menu.appendChild(me._cnt_footer);
		el=me._cnt_body=document.createElement('div');
		el.ggId="CNT_BODY";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 300px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 99px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cnt_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cnt_body.ggUpdatePosition=function (useTransition) {
		}
		el=me._cln_cenas=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 250;
		el.ggHeight = 300;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggAutoPosition = function(init) {
			var currYPos = 0;
			var numElements = me._cln_cenas.ggInstances.length;
			var currElement = 0;
			for (var i=0; i<me._cln_cenas.ggNumRows; i++) {
				var rowMaxHeight = 0;
				for (var j=0; j<me._cln_cenas.ggNumCols; j++) {
					if (numElements > currElement) {
						if (!init) {
							if (me._cln_cenas.childNodes[currElement].clientHeight < me._cln_cenas.childNodes[currElement].scrollHeight && currElement < (numElements - 1)) {
								me._cln_cenas.childNodes[currElement].style.transition = 'top ' + 1 + 's, height ' + 1 + 's';
							} else {
								me._cln_cenas.childNodes[currElement].style.transition = 'top ' + 1 + 's';
							}
						}
						me._cln_cenas.childNodes[currElement].style.overflow = 'hidden';
						me._cln_cenas.childNodes[currElement].style['top'] = currYPos + 'px';
						me._cln_cenas.childNodes[currElement].style['height'] ='0px';
						rowMaxHeight = Math.max(rowMaxHeight, me._cln_cenas.childNodes[currElement].scrollHeight);
						me._cln_cenas.childNodes[currElement].style['height'] = rowMaxHeight + 'px';
					}
					currElement++;
				}
				currYPos += rowMaxHeight;
			}
			setTimeout(function() {
				var p = me._cln_cenas.parentElement;
				while (p != null && p !== me.divSkin) {
					if (p.ggType && p.ggType == 'scrollarea') {
						if (p.ggUpdatePosition) {
							p.ggUpdatePosition();
						}
					}
					p = p.parentElement;
				}
			}, 1000);
		}
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._cln_cenas.ggUpdating == true) return;
			me._cln_cenas.ggUpdating = true;
			var el=me._cln_cenas;
			var curNumCols = 0;
			curNumCols = me._cln_cenas.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._cln_cenas.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._cln_cenas.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._cln_cenas.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._cln_cenas.getFilteredNodes(tourNodes, filter);
			me._cln_cenas.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._cln_cenas.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._cln_cenas.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._cln_cenas.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height='100%';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_cln_cenas_Class(nodeId, me, el, parameter);
				currentIndex++;
				inst.__div.style['height'] = '0px';
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._cln_cenas.ggNodeCount = me._cln_cenas.ggNumFilterPassed;
			me._cln_cenas.ggAutoPosition(true);
			me._cln_cenas.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._cln_cenas.parentNode && me._cln_cenas.parentNode.classList.contains('ggskin_subelement') && me._cln_cenas.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._cln_cenas.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="CLN_CENAS";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cln_cenas.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cln_cenas.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._cln_cenas.childNodes.length; i++) {
				var child=me._cln_cenas.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._cln_cenas.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			var newWidth = (pw*100)/100.0;
			if (newWidth != this.ggWidth) {
				this.ggWidth = newWidth;
				this.ggSizeChanged = true;
			}
			var ph = this.parentNode.clientHeight;
			var newHeight = (ph*100)/100.0;
			if (newHeight != this.ggHeight) {
				this.ggHeight = newHeight;
				this.ggSizeChanged = true;
			}
			me._cln_cenas.ggUpdate();
		}
		me._cnt_body.appendChild(me._cln_cenas);
		me._cnt_menu.appendChild(me._cnt_body);
		el=me._cnt_header=document.createElement('div');
		el.ggId="CNT_HEADER";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 90px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cnt_header.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cnt_header.ggUpdatePosition=function (useTransition) {
		}
		el=me._divisor=document.createElement('div');
		el.ggId="DIVISOR";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #f86915;';
		hs+='border : 0px solid #000000;';
		hs+='height : 3px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 93px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._divisor.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._divisor.ggUpdatePosition=function (useTransition) {
		}
		me._cnt_header.appendChild(me._divisor);
		el=me._bg_menu_logo=document.createElement('div');
		el.ggId="BG_MENU_logo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #022857;';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._bg_menu_logo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bg_menu_logo.ggUpdatePosition=function (useTransition) {
		}
		me._cnt_header.appendChild(me._bg_menu_logo);
		el=me._img_logo=document.createElement('div');
		els=me._img_logo__img=document.createElement('img');
		els.className='ggskin ggskin_img_logo';
		hs=basePath + 'images/img_logo.webp';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="IMG_LOGO";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 47px;';
		hs+='left : calc(50% - ((203px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : inherit;';
		hs+='width : 203px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._img_logo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._img_logo.ggUpdatePosition=function (useTransition) {
		}
		me._cnt_header.appendChild(me._img_logo);
		me._cnt_menu.appendChild(me._cnt_header);
		el=me._btn_fechar_menu=document.createElement('div');
		els=me._btn_fechar_menu__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MCA1MCIgaGVpZ2h0PSI1MHB4IiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iNTBweCI+CiA8cGF0aCBkPSJNMjUsMkMxMi4zMTksMiwyLDEyLjMxOSwyLDI1czEwLjMxOSwyMywyMywyM3MyMy0xMC4zMTksMjMtMjNTMzcuNjgxLDIsMjUsMnogTTMzLjcxLDMyLjI5YzAuMzksMC4zOSwwLjM5LDEuMDMsMCwxLjQyIEMzMy41MSwzMy45LDMzLjI2LDM0LDMzLDM0cy0wLjUxLTAuMS0wLjcxLTAuMjlMMjUsMjYuNDJsLTcuMjksNy4yOUMxNy41MSwzMy45LDE3LjI2LDM0LDE3LDM0cy0wLjUxLTAuMS0wLjcxLT'+
			'AuMjkgYy0wLjM5LTAuMzktMC4zOS0xLjAzLDAtMS40MkwyMy41OCwyNWwtNy4yOS03LjI5Yy0wLjM5LTAuMzktMC4zOS0xLjAzLDAtMS40MmMwLjM5LTAuMzksMS4wMy0wLjM5LDEuNDIsMEwyNSwyMy41OGw3LjI5LTcuMjkgYzAuMzktMC4zOSwxLjAzLTAuMzksMS40MiwwYzAuMzksMC4zOSwwLjM5LDEuMDMsMCwxLjQyTDI2LjQyLDI1TDMzLjcxLDMyLjI5eiIvPgo8L3N2Zz4K';
		me._btn_fechar_menu__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="BTN_FECHAR_MENU";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 21px;';
		hs+='left : 217px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_fechar_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_fechar_menu.onclick=function (e) {
			me._cnt_menu.style.transition='none';
			me._cnt_menu.style.visibility='hidden';
			me._cnt_menu.ggVisible=false;
		}
		me._btn_fechar_menu.ggUpdatePosition=function (useTransition) {
		}
		me._cnt_menu.appendChild(me._btn_fechar_menu);
		me.divSkin.appendChild(me._cnt_menu);
		el=me._btn_menu=document.createElement('div');
		els=me._btn_menu__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCIgaGVpZ2h0PSIzMHB4IiBmaWxsPSIjRkZGRkZGIiB3aWR0aD0iMzBweCI+CiA8cGF0aCBkPSJNIDMgNyBBIDEuMDAwMSAxLjAwMDEgMCAxIDAgMyA5IEwgMjcgOSBBIDEuMDAwMSAxLjAwMDEgMCAxIDAgMjcgNyBMIDMgNyB6IE0gMyAxNCBBIDEuMDAwMSAxLjAwMDEgMCAxIDAgMyAxNiBMIDI3IDE2IEEgMS4wMDAxIDEuMDAwMSAwIDEgMCAyNyAxNCBMIDMgMTQgeiBNIDMgMjEgQSAxLjAwMDEgMS4wMDAxIDAgMSAwIDMgMjMgTCAyNyAyMyBBIDEuMDAwMSAxLjAwMDEgMCAxIDAgMjcgMjEgTC'+
			'AzIDIxIHoiLz4KPC9zdmc+Cg==';
		me._btn_menu__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="BTN_MENU";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 21px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : hidden;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width <= 900))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_menu.style.transition='';
				if (me._btn_menu.ggCurrentLogicStateVisible == 0) {
					me._btn_menu.style.visibility=(Number(me._btn_menu.style.opacity)>0||!me._btn_menu.style.opacity)?'inherit':'hidden';
					me._btn_menu.ggVisible=true;
				}
				else {
					me._btn_menu.style.visibility="hidden";
					me._btn_menu.ggVisible=false;
				}
			}
		}
		me._btn_menu.logicBlock_visible();
		me._btn_menu.onclick=function (e) {
			me._cnt_menu.ggVisible = !me._cnt_menu.ggVisible;
			var flag=me._cnt_menu.ggVisible;
			me._cnt_menu.style.transition='none';
			me._cnt_menu.style.visibility=((flag)&&(Number(me._cnt_menu.style.opacity)>0||!me._cnt_menu.style.opacity))?'inherit':'hidden';
		}
		me._btn_menu.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._btn_menu);
		me._cnt_menu.logicBlock_visible();
		me._btn_menu.logicBlock_visible();
		player.addListener('activehotspotchanged', function(event) {
			for(var i = 0; i < me._cln_cenas.ggInstances.length; i++) {
				me._cln_cenas.ggInstances[i].ggEvent_activehotspotchanged(event);
			}
		});
		player.addListener('changenode', function(event) {
			for(var i = 0; i < me._cln_cenas.ggInstances.length; i++) {
				me._cln_cenas.ggInstances[i].ggEvent_changenode(event);
			}
			if (hotspotTemplates.hasOwnProperty('HT_SETA')) {
				for(var i = 0; i < hotspotTemplates['HT_SETA'].length; i++) {
					hotspotTemplates['HT_SETA'][i].ggEvent_changenode();
				}
			}
			me._cln_cenas.ggUpdateConditionNodeChange();
		});
		player.addListener('configloaded', function(event) {
			for(var i = 0; i < me._cln_cenas.ggInstances.length; i++) {
				me._cln_cenas.ggInstances[i].ggEvent_configloaded(event);
			}
			if (hotspotTemplates.hasOwnProperty('HT_SETA')) {
				for(var i = 0; i < hotspotTemplates['HT_SETA'].length; i++) {
					hotspotTemplates['HT_SETA'][i].ggEvent_configloaded();
				}
			}
		});
		player.addListener('sizechanged', function(event) {
			me._cnt_menu.logicBlock_visible();
			me._btn_menu.logicBlock_visible();
		});
		player.addListener('varchanged_ht_ani', function(event) {
			if (hotspotTemplates.hasOwnProperty('HT_SETA')) {
				for(var i = 0; i < hotspotTemplates['HT_SETA'].length; i++) {
					hotspotTemplates['HT_SETA'][i].ggEvent_varchanged_ht_ani();
				}
			}
		});
		player.addListener('viewerinit', function(event) {
			me._cln_cenas.ggUpdate();
		});
	};
	function SkinCloner_cln_cenas_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._item_cena=document.createElement('div');
		el.ggId="ITEM_CENA";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 45px;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._item_cena.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._item_cena.onmouseenter=function (e) {
			me.elementMouseOver['item_cena']=true;
			me._bg_item.logicBlock_backgroundcolor();
			me._txt_cena.logicBlock_textcolor();
		}
		me._item_cena.onmouseleave=function (e) {
			me.elementMouseOver['item_cena']=false;
			me._bg_item.logicBlock_backgroundcolor();
			me._txt_cena.logicBlock_textcolor();
		}
		me._item_cena.ggUpdatePosition=function (useTransition) {
		}
		el=me._bg_item=document.createElement('div');
		el.ggId="BG_ITEM";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #011b3a;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 17px;';
		hs+='height : 41px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='opacity : 0.90001;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._bg_item.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bg_item.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getCurrentNode() == me.ggUserdata.nodeid))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				((me.elementMouseOver['item_cena'] == true))
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._bg_item.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._bg_item.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._bg_item.style.transition='background-color 300ms ease 0ms';
				if (me._bg_item.ggCurrentLogicStateBackgroundColor == 0) {
					me._bg_item.style.backgroundColor="rgba(248,105,21,1)";
				}
				else if (me._bg_item.ggCurrentLogicStateBackgroundColor == 1) {
					me._bg_item.style.backgroundColor="rgba(4,74,159,1)";
				}
				else {
					me._bg_item.style.backgroundColor="rgba(1,27,58,1)";
				}
			}
		}
		me._bg_item.logicBlock_backgroundcolor();
		me._bg_item.ggUpdatePosition=function (useTransition) {
		}
		me._item_cena.appendChild(me._bg_item);
		el=me._txt_cena=document.createElement('div');
		els=me._txt_cena__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TXT_CENA";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 42px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 185px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 500;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._txt_cena.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._txt_cena.ggUpdateText();
		player.addListener('changenode', function() {
			me._txt_cena.ggUpdateText();
		});
		el.appendChild(els);
		me._txt_cena.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_cena.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.getCurrentNode() == me.ggUserdata.nodeid))
			)
			{
				newLogicStateTextColor = 0;
			}
			else if (
				((me.elementMouseOver['item_cena'] == true))
			)
			{
				newLogicStateTextColor = 1;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._txt_cena.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._txt_cena.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._txt_cena.style.transition='color 0s';
				if (me._txt_cena.ggCurrentLogicStateTextColor == 0) {
					me._txt_cena.style.color="rgba(17,17,17,1)";
				}
				else if (me._txt_cena.ggCurrentLogicStateTextColor == 1) {
					me._txt_cena.style.color="rgba(34,34,34,1)";
				}
				else {
					me._txt_cena.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._txt_cena.logicBlock_textcolor();
		me._txt_cena.onclick=function (e) {
			player.openNext("{"+me.ggUserdata.nodeid+"}","$(cur)");
		}
		me._txt_cena.ggUpdatePosition=function (useTransition) {
		}
		me._item_cena.appendChild(me._txt_cena);
		el=me._code_icone=document.createElement('div');
		el.ggId="CODE_ICONE";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._code_icone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._code_icone.ggUpdatePosition=function (useTransition) {
		}
		me._item_cena.appendChild(me._code_icone);
		el=me._txt_icon_key=document.createElement('div');
		els=me._txt_icon_key__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TXT_ICON_KEY";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text vt_icon_key";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #ffffff;';
		hs+='color : rgba(255,0,0,1);';
		hs+='height : 34px;';
		hs+='left : -9999px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 138px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._txt_icon_key.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(player.getNodeUserdataPropValue(me.ggUserdata.nodeid, 'icone'))));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._txt_icon_key.ggUpdateText();
		player.addListener('varchanged_icone', function() {
			me._txt_icon_key.ggUpdateText();
		});
		player.addListener('changenode', function() {
			me._txt_icon_key.ggUpdateText();
		});
		el.appendChild(els);
		me._txt_icon_key.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_icon_key.ggUpdatePosition=function (useTransition) {
		}
		me._item_cena.appendChild(me._txt_icon_key);
		me.__div.appendChild(me._item_cena);
		me.elementMouseOver['item_cena']=false;
		me._bg_item.logicBlock_backgroundcolor();
		me._txt_cena.logicBlock_textcolor();
		el = me._code_icone;
		(function () {
  var keyEl = el.parentElement.querySelector(".vt_icon_key");
  var iconName = keyEl ? keyEl.textContent.trim().toLowerCase() : "oculos";

  var color = "#FFFFFF";

  var paths = {
    rua: "M3 20h18v-2H3v2Zm2-4h14l-2-6H7l-2 6Zm3.5-4h7l.7 2h-8.4l.7-2ZM7 6h10v2H7V6Z",

    fachada: "M4 4h16v3H4V4Zm1 5h14v11H5V9Zm2 2v7h10v-7H7Zm1-9h8l4 3H4l4-3Z",

    recepcao: "M4 11h16v8H4v-8Zm2 2v4h12v-4H6Zm2-8h8a2 2 0 0 1 2 2v2H6V7a2 2 0 0 1 2-2Zm0 2v2h8V7H8Z",

    vitrine: "M4 4h16v16H4V4Zm2 2v12h12V6H6Zm2 2h8v2H8V8Zm0 4h8v2H8v-2Z",

    caixa: "M4 6h16v12H4V6Zm2 2v8h12V8H6Zm2 2h5v2H8v-2Zm0 3h8v2H8v-2Zm9-3h1v2h-1v-2Z",

    laboratorio: "M9 3h6v2h-1v4.2l5 8.6A2 2 0 0 1 17.3 21H6.7A2 2 0 0 1 5 17.8l5-8.6V5H9V3Zm3 7-5 9h10l-5-9Zm-2 5h4v2h-4v-2Z",

    oculos: "M7 9a4 4 0 1 0 0 8 4 4 0 0 0 3.9-3.2h2.2A4 4 0 1 0 17 9c-2 0-3.6 1.4-3.9 3.2h-2.2A4 4 0 0 0 7 9Zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm10 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z",

    exame: "M12 5c5 0 9 4.5 10 7-1 2.5-5 7-10 7S3 14.5 2 12c1-2.5 5-7 10-7Zm0 2c-3.7 0-6.7 3-7.8 5C5.3 14 8.3 17 12 17s6.7-3 7.8-5C18.7 10 15.7 7 12 7Zm0 2.2A2.8 2.8 0 1 1 12 14.8 2.8 2.8 0 0 1 12 9.2Z"
  };

  var d = paths[iconName] || paths.oculos;

  el.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">' +
    '<path fill="' + color + '" d="' + d + '"/>' +
    '</svg>';

  el.style.width = "24px";
  el.style.height = "24px";
  el.style.display = "flex";
  el.style.alignItems = "center";
  el.style.justifyContent = "center";
  el.style.background = "transparent";
  el.style.border = "none";
})();
			me.ggEvent_activehotspotchanged=function(event) {
				me._bg_item.logicBlock_backgroundcolor();
				me._txt_cena.logicBlock_textcolor();
			};
			me.ggEvent_changenode=function(event) {
				me._bg_item.logicBlock_backgroundcolor();
				me._txt_cena.logicBlock_textcolor();
			};
			me.ggEvent_configloaded=function(event) {
				me._bg_item.logicBlock_backgroundcolor();
				me._txt_cena.logicBlock_textcolor();
			};
	};
	function SkinHotspotClass_ht_seta(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_seta=document.createElement('div');
		el.ggId="HT_SETA";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 309px;';
		hs+='position : absolute;';
		hs+='top : 112px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_seta.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_seta.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_seta.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_seta.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_seta']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_seta.onmouseleave=function (e) {
			me.elementMouseOver['ht_seta']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_seta.ggUpdatePosition=function (useTransition) {
		}
		el=me._botoes=document.createElement('div');
		el.ggId="botoes";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 44px;';
		hs+='left : -19px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 39px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._botoes.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._botoes.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 2px solid #ffaa00;';
		hs+='border-radius : 999px;';
		hs+='height : 24px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_1.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._rectangle_1.ggCurrentLogicStateScaling == 0) {
					me._rectangle_1.ggParameter.sx = 0.01;
					me._rectangle_1.ggParameter.sy = 0.01;
					me._rectangle_1.style.transform=parameterToTransform(me._rectangle_1.ggParameter);
					setTimeout(function() {skin.updateSize(me._rectangle_1);}, 550);
				}
				else {
					me._rectangle_1.ggParameter.sx = 1;
					me._rectangle_1.ggParameter.sy = 1;
					me._rectangle_1.style.transform=parameterToTransform(me._rectangle_1.ggParameter);
					setTimeout(function() {skin.updateSize(me._rectangle_1);}, 550);
				}
			}
		}
		me._rectangle_1.logicBlock_scaling();
		me._rectangle_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_1.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._rectangle_1.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._rectangle_1.style.opacity == 0.0) { me._rectangle_1.style.visibility="hidden"; } }, 505);
					me._rectangle_1.style.opacity=0;
				}
				else {
					me._rectangle_1.style.visibility=me._rectangle_1.ggVisible?'inherit':'hidden';
					me._rectangle_1.style.opacity=1;
				}
			}
		}
		me._rectangle_1.logicBlock_alpha();
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		me._botoes.appendChild(me._rectangle_1);
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1.2,sy:1.2,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='height : 39px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_2.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._rectangle_2.ggCurrentLogicStateScaling == 0) {
					me._rectangle_2.ggParameter.sx = -0.02;
					me._rectangle_2.ggParameter.sy = -0.02;
					me._rectangle_2.style.transform=parameterToTransform(me._rectangle_2.ggParameter);
					setTimeout(function() {skin.updateSize(me._rectangle_2);}, 550);
				}
				else {
					me._rectangle_2.ggParameter.sx = 1.2;
					me._rectangle_2.ggParameter.sy = 1.2;
					me._rectangle_2.style.transform=parameterToTransform(me._rectangle_2.ggParameter);
					setTimeout(function() {skin.updateSize(me._rectangle_2);}, 550);
				}
			}
		}
		me._rectangle_2.logicBlock_scaling();
		me._rectangle_2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_2.style.transition='transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._rectangle_2.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._rectangle_2.style.opacity == 0.0) { me._rectangle_2.style.visibility="hidden"; } }, 505);
					me._rectangle_2.style.opacity=0;
				}
				else {
					me._rectangle_2.style.visibility=me._rectangle_2.ggVisible?'inherit':'hidden';
					me._rectangle_2.style.opacity=1;
				}
			}
		}
		me._rectangle_2.logicBlock_alpha();
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		me._botoes.appendChild(me._rectangle_2);
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._svg_1__img.setAttribute('src',basePath + 'images/svg_1.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		me._svg_1.ggUpdateText=function() {
			let altText = player._('Pr\xf3ximo');
			me._svg_1.ggSubElement.setAttribute('alt', altText);
			if (me._svg_1.ggSubElementOver) {
				me._svg_1.ggSubElementOver.setAttribute('alt', altText);
			}
			if (me._svg_1.ggSubElementActive) {
				me._svg_1.ggSubElementActive.setAttribute('alt', altText);
			}
		}
		me._svg_1.ggUpdateText();
		el.ggId="Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 52px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : inherit;';
		hs+='width : 31px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_1.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"");
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		me._botoes.appendChild(me._svg_1);
		me._ht_seta.appendChild(me._botoes);
		me.elementMouseOver['ht_seta']=false;
		me._rectangle_1.logicBlock_scaling();
		me._rectangle_1.logicBlock_alpha();
		me._rectangle_2.logicBlock_scaling();
		me._rectangle_2.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._rectangle_1.logicBlock_scaling();
				me._rectangle_1.logicBlock_alpha();
				me._rectangle_2.logicBlock_scaling();
				me._rectangle_2.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._rectangle_1.logicBlock_scaling();
				me._rectangle_1.logicBlock_alpha();
				me._rectangle_2.logicBlock_scaling();
				me._rectangle_2.logicBlock_alpha();
			};
			me.ggEvent_varchanged_ht_ani=function() {
				me._rectangle_1.logicBlock_scaling();
				me._rectangle_1.logicBlock_alpha();
				me._rectangle_2.logicBlock_scaling();
				me._rectangle_2.logicBlock_alpha();
			};
			me.__div = me._ht_seta;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
				hotspot.skinid = 'HT_SETA';
				hsinst = new SkinHotspotClass_ht_seta(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};