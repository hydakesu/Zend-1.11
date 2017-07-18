<?php

class Bootstrap extends Zend_Application_Bootstrap_Bootstrap
{
	/** マルチ言語設定　**/
	protected function _initTranslate(){
		/**構築ファイルを読み込む **/
		$options = $this->getOption("resources");
		$options = $options["translate"];
		if(!isset($options["data"])){
			throw new Zend_Application_Resources_Exception("No translation resources provided");
		}
		
		$adapter = isset($options["adapter"])?$options["adapter"]:Zend_Translate::AN_GETTEXT;
		$session = new Zend_Session_Namespace("locale");
		$session->setExpirationSeconds(1800);
		
		if(isset($session->locale)){
			$locale=$session->locale;
		}else{
			$locale = isset($options["locale"])?$options["locale"]:$options["default"];
			$session->locale = $locale;
		}
		
		$data = '';
		if (isset($options['data'][$locale])) {
			$data = $options['data'][$locale];
		}
		
		$translate = new Zend_Translate($adapter, $data, $locale);
		Zend_Registry::set("Zend_Translate",$translate);
	}
	
	/*** DB設定*/
	protected function _initDb(){
		$resource = $this->getPluginResource('multidb');
		$resource->init();
		$db_database1 = $resource->getDb('database1');
		$db_database2 = $resource->getDb('database2');
		Zend_Registry::set('$db_database1', $db_database1 );
		Zend_Registry::set('$db_database2', $db_database2 );
	}
}