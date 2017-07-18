<?php

class LogoutController extends Zend_Controller_Action
{
	public function preDispatch()
	{
		$this->view->_controllerId = $this->_request->getControllerName();
	}
	
    public function indexAction()
    {
        // action body
    	
    	session_destroy();
    	
    	$this->_redirect('/login');
    }
}
