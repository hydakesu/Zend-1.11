<?php

class Application_Model_User extends Application_Model_Common
{
	public function getInfo($userId)
	{
		$sql = "select * from uac_user_mst where user_id = '" . $userId . "'";
		
		$results = $this->dbTable->fetchRow($sql);
		
		return $results;
	}
}