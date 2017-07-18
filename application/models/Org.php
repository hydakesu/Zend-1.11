<?php

class Application_Model_Org extends Application_Model_Common
{
	public function getOrg($key = "", $limit = 0, $offset= 0)
	{
		if(isset($key)){
			$sql = "select group_id, group_nm_local, group_nm_enus, expire_date, register_datetime, register_user_id, update_datetime, update_user_id from uac_group where group_id like '" . $key . "%' order by group_id ";
		}else{
			$sql = "select group_id, group_nm_local, group_nm_enus, expire_date, register_datetime, register_user_id, update_datetime, update_user_id from uac_group order by group_id ";
		}
		
		if(isset($limit) && $limit > 0){
			$sql = $sql . " limit  " . $limit;
		}
		
		if(isset($offset) && $offset> 0){
			$sql = $sql . " offset " . $offset;
		}
		
		$results = $this->dbTable->fetchAll($sql);
		
		return $results;
	}
	
	public function insert()
	{
		$sql = "insert into demo values ('aaaaaa')";
		
		$results = $this->dbTable->query($sql);
		
		return $results;
	}
}