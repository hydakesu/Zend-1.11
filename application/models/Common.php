<?php

class Application_Model_Common
{
	protected $dbTable;
	
	public function __construct($dbTable = "db_database1")
	{
		if(empty($this->dbTable)){
			$dbTable = '$db_' . $dbTable;
			
			$this->dbTable = Zend_Registry::get($dbTable);
		}
	}
}