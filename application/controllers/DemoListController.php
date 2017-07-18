<?php

class DemoListController extends Zend_Controller_Action
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
		$this->_helper->layout->setLayout('listlayout');
    }

    public function indexAction()
    {
        // action body
    	$this->view->title = "Demo List";
    }
    
    public function getorgsAction()
    {
    	$request = $this->getRequest();
    	$results = array();
    	
    	if($request->isPost()){
    		$paramerters = $request->getPost();
    		
    		/** Database1  **/
    		$UacGroup= new Application_Model_UacGroup("database1");
    		
    		$orgArrays = $UacGroup->getOrgsArray($paramerters["key"], $paramerters["limit"], $paramerters["offset"], $paramerters["sortdatafield"], $paramerters["sortorder"]);
    		
    		array_push($results, array("rows" => $orgArrays, "count" => $UacGroup->getOrgsCount($paramerters["key"])));
    		
    		echo Zend_Json::encode($results[0]);
    	}
    	
    	$this->getHelper("layout")->disableLayout();
    	$this->getHelper("viewRenderer")->setNoRender(true);
    }
}