<?php
/**
 * App_Plugin_SecurityCheck
 * 
 * @author Enrico Zimuel (enrico@zend.com)
 */
class Plugins_SecurityCheck extends Zend_Controller_Plugin_Abstract
{
	const MODULE_NO_AUTH='login';
	private $_controller;
	private $_module;
	private $_action;
	private $_role;
	
    /**
     * preDispatch
     * 
     * @param Zend_Controller_Request_Abstract $request
     */
    public function preDispatch (Zend_Controller_Request_Abstract $request)
    {
        $this->_controller = $this->getRequest()->getControllerName();
        //$this->_module= $this->getRequest()->getModuleName();
        $this->_action= $this->getRequest()->getActionName();
		
        $redirect=true;
        if ($this->_controller!= self::MODULE_NO_AUTH) {
        	$redirect = $this->_isAuth();
	    } else {
	    	if(!$this->_isAuth()){
	    		$_SERVER['PATH_INFO']="/demoList";
	    		$request->setPathInfo("demoList");
	    		$request->setRequestUri(str_replace(self::MODULE_NO_AUTH, "demoList", $request->getRequestUri()));
	    		$request->setControllerName('demoList');
	    		$request->setActionName('index');
	    	}
	    	
	        $redirect=false;
	    }
        
        if ($redirect) {
            //$request->setModuleName('login');
            $request->setControllerName('login');
            $request->setActionName('index');
        }
    }
    
    /**
     * Check user identity using Zend_Auth
     * 
     * @param Zend_Auth $auth
     * @return boolean
     */
    private function _isAuth (){
    	if (isset($_SESSION['id'])) {
    		return false;
    	}
    	
    	return true;
    }
}