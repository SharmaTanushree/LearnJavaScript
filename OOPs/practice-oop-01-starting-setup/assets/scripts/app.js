class Component{
    constructor(hostElementid, insertBefore = false){
        this.insertBefore = insertBefore;
        if(hostElementid){
            this.hostElement = document.getElementById(hostElementid);
        }
        else{
            this.hostElement = document.body;
        }
    }
    detach(){
        this.element.remove();
    }

    attach(){
            console.log(this);
            this.hostElement.insertAdjacentElement(this.insertBefore ? 'afterbegin':'beforeend',this.element)
    }
}

class DOMHelper{
    static moveElement(elem, type){
        const element = document.getElementById(elem)
       const destination = document.querySelector(`#${type}-projects ul`);
       destination.appendChild(element);
       element.scrollIntoView({behavior : "smooth"});
    }

    static clearEventListener(element){
        const cloneElem = element.cloneNode(true);
        element.replaceWith(cloneElem);
        return cloneElem;
    }
}

class Tooltip extends Component{

    constructor(closeNotifierFunc, message,hostElementId){
        super(hostElementId);
        this.tooltipMessage = message;
        this.closeNotifier = closeNotifierFunc;
        this.hostElementId = hostElementId;
        this.create();
    }

    closeToolTip= ()=>{
       console.log('closeToolTip');
       this.detach();
       this.closeNotifier();
    }

    create(){
        const tooltip = document.createElement('div');
        tooltip.className = 'card';
        
        const tTip = document.getElementById('toolTip');
        const elem = document.importNode(tTip.content, true); 
        elem.querySelector('p').textContent = this.tooltipMessage;
        tooltip.append(elem);

        const offsetTop = this.hostElement.offsetTop;
        const offsetLeft = this.hostElement.offsetLeft;
        const height = this.hostElement.clientHeight;
        const scrollValue = this.hostElement.parentElement.scrollTop;

        const x = offsetLeft +20;
        const y = offsetTop + height - scrollValue -10;

        tooltip.style.position = 'absolute';
        tooltip.style.left = x + 'px';
        tooltip.style.top = y + 'px';

        tooltip.addEventListener('click',this.closeToolTip);
        this.element = tooltip;
    }

    
}


class ProjectItem{
    hasActiveTooltip = false;
    
    constructor(id,switchHandlerFunction,type){
       
        this.id = id;
        this.type = type;
        this.switchHandlerFunction = switchHandlerFunction;
        this.setSwitchButton();
        this.setMoreInfoButton();
        
    }
    
    

    setSwitchButton(){
        const elem = document.getElementById(this.id);
        let switchBtn = elem.querySelector('button:last-of-type');
        switchBtn = DOMHelper.clearEventListener(switchBtn); 
        switchBtn.textContent = this.type ==='active'? 'Finish' : 'Activate';
        switchBtn.addEventListener('click',this.switchHandlerFunction.bind(null,this.id));        
    }

    clearNotifier= function(){
        console.log('in clearnotifier');
        console.log(this);
        this.hasActiveTooltip = false; 
    }

    moreInfoBtnHandler(){
        if(this.hasActiveTooltip){
            return;
        }
        const dataInfo = document.getElementById(this.id).dataset.extraInfo;
        const tooltip = new Tooltip(()=>{this.hasActiveTooltip = false}, dataInfo,this.id);
        tooltip.attach();
        this.hasActiveTooltip = true;
    }

    setMoreInfoButton(){
        const elem = document.getElementById(this.id);
        let moreInfoBtn = elem.querySelector('button:first-of-type');
        moreInfoBtn.addEventListener('click',this.moreInfoBtnHandler.bind(this));
    }

    update(switchHandlerFunc,type){
        this.switchHandlerFunction = switchHandlerFunc;
        this.type=type
        this.setSwitchButton();
        
    }

}

class ProjectList{
    Projects = [];
    constructor(type){
        this.type = type;
      const projList = document.querySelector(`#${type}-projects ul`);
      let projListItems = projList.children;
      for(const proj of projListItems){
        this.Projects.push(new ProjectItem(proj.id,this.switchProject.bind(this),this.type))
      }
      
    }

    setSwitchHandler(switchProjectHandler){
      this.switchProjectHandler = switchProjectHandler;
    }

    addProject(project){
        
        this.Projects.push(project);  
        DOMHelper.moveElement(project.id,this.type);        
        project.update(this.switchProject.bind(this),this.type);
        
    }

    switchProject(id){       
        console.log(id);
        console.log(this);
        const project = this.Projects.find(p=>p.id === id);
        this.Projects = this.Projects.filter(p => p.id !== id);
        this.switchProjectHandler(project);  
          
    }
}

class App{
    static init(){
       const activeProjectList = new ProjectList('active');
       const finishedProjectList = new ProjectList('finished');
       activeProjectList.setSwitchHandler(finishedProjectList.addProject.bind(finishedProjectList));
       finishedProjectList.setSwitchHandler(activeProjectList.addProject.bind(activeProjectList));
    }
}

App.init();