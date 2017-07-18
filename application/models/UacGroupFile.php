<?php

class Application_Model_UacGroupFile extends Application_Model_Common
{
	public function insertGroupFile($groupId, $div, $fileId, $fileNm, $dir)
	{
		$sql = "insert into uac_group_file values ('" . $groupId. "', '" . $div . "', '" . $fileId. "', '" . $fileNm. "', '" . $dir. "', 0, NOW(), 'Admin', NOW(), 'Admin')";
		
		$results = $this->dbTable->query($sql);
		
		return $results;
	}
	
	public function getGroupFile($fileId)
	{
		$sql = "select file_nm, file_dir from uac_group_file where file_id = '" . $fileId . "'";
		
		$results = $this->dbTable->fetchRow($sql);
		
		return $results;
	}
}