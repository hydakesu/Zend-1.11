<?php

class DemoController extends Zend_Controller_Action
{

    public function init()
    {
    	$lang=new Zend_Session_Namespace('locale');
    	$lang->locale='ja_JP';
    	
    	$translate=Zend_Registry::get("Zend_Translate");
    	
    	$translate->_('msgid');
    }

     public function preDispatch() {
        $this->_helper->layout->setLayout('listlayout');
    }
    
    public function indexAction()
    {
    	// action body
    	$this->view->title = "My Albums";
    	
    	/** Database1  **/
    	$UacGroup= new Application_Model_UacGroup("database1");

        $compModels = $UacGroup->getComp();
        
        $this->view->compModels= $compModels;
        
        /** Database2  **/
        $orgGroup= new Application_Model_Org("database2");
        
        $orgModels = $orgGroup->getOrg();
        
        $this->view->orgModels= $orgModels;
        
        $orgGroup->insert();
    }

    public function addAction()
    {
        // action body
        //$this->_helper->layout->setLayout('demo');
        $this->view->title = "Add Albums";
        
    }
    
    public function editAction()
    {
        // action body
        //$this->_helper->layout->setLayout('demo');
        $this->view->title = "Edit Albums";
    }
    
    public function delAction()
    {
        // action body
        //$this->_helper->layout->setLayout('demo');
        $this->view->title = "Del Albums";
    }
    
}

