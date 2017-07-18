<?php

class DemoDetailController extends Zend_Controller_Action
{

    public function init()
    {
		$lang=new Zend_Session_Namespace('locale');
		$lang->locale='ja_JP';
		
		$translate=Zend_Registry::get("Zend_Translate");
		
		$translate->_('msgid');
    }

    public function preDispatch()
    {
		$this->_helper->layout->setLayout('detaillayout');
		//$this->view->_controllerId = $this->_request->getControllerName();
    }

    public function indexAction()
    {
        // action body
    	$this->view->title = "Demo Detail";
    	
    	// action body
    	$request = $this->getRequest();
    	
    	if($request->isPost()){
    		$paramerters = $request->getPost();
    		
    		if($paramerters["model"] != "new"){
    			/** Database1  **/
    			$UacGroup= new Application_Model_UacGroup("database1");
    			
    			$results= $UacGroup->getGroupDetail($paramerters);
    			
    			$this->view->result = $results;
    		}
    	}
    }
    
    public function saveAction()
    {
    	$this->_helper->layout->disableLayout();
    	$this->_helper->viewRenderer->setNoRender(true);
    	
    	// action body
    	$request = $this->getRequest();
    	
    	if($request->isPost()){
    		$paramerters = $request->getPost();
    		
    		/** Database1  **/
    		$UacGroup= new Application_Model_UacGroup("database1");
    		
    		$results= $UacGroup->save($paramerters);
    		
    		if($results){
    			$rtnJson = array("groupId" => $paramerters["groupId"]);
    			echo Zend_Json::encode($rtnJson);
    		}else{
    			echo 'save Error.';
    		}
    	}
    }
}