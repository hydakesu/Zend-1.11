<?php

class LoginController extends Zend_Controller_Action
{

	public function init()
	{
		
		$lang=new Zend_Session_Namespace('locale');
		$lang->locale='ja_JP';
		
		$translate=Zend_Registry::get("Zend_Translate");
		
		$translate->_('msgid');
		
		$this->_options= $this->getInvokeArg('bootstrap')->getOptions();
	}

	public function preDispatch()
	{
		$this->_helper->layout->setLayout('layout');
		//$this->view->_controllerId = $this->_request->getControllerName();
	}
	
    public function indexAction()
    {
        // action body
    	$flash = $this->_helper->getHelper('flashMessenger');
    	if ($flash->hasMessages()) {
    		$this->view->message = $flash->getMessages();
    	}

    	$this->view->form = new Application_Form_Login();
    }

    public function signAction()
    {
    	// action body
    	$request = $this->getRequest();
    	
    	if ($this->getRequest()->isPost()) {

    		$model    = new Application_Model_User("database1");
    		$userInfo = $model->getInfo($this->getRequest()->getParam('username'));
    		
    		$_SESSION['id'] = $userInfo["user_id"];
    		
    		return $this->_redirect('/demoList');
    	}
    	
    	$this->_redirect('/login');
    }
}