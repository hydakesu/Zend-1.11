<?php

class FileController extends Zend_Controller_Action
{
	protected $_uploadedFilePath;
	
	public function init()
	{
		$this->_helper->layout->disableLayout();
		$this->_helper->viewRenderer->setNoRender(true);
		$this->_uploadedFilePath = "D:/LAPP/Apache24/htdocs/demo/uploadedFile";
	}
	
    public function indexAction()
    {
    	// action body
    }

    public function uploadAction()
    {
    	$this->_helper->layout->disableLayout();
    	$this->_helper->viewRenderer->setNoRender(true);
    	
    	$UacGroupFile= new Application_Model_UacGroupFile("database1");
    	$fileParentId = $this->getRequest()->get("id");
    	$fileParentDiv = $this->getRequest()->get("div");
    	
        // action body
    	$fileType = pathinfo($_FILES["fileToUpload"]["name"], PATHINFO_EXTENSION);
    	$uuid = $this->create_uuid($_SESSION['id']);
    	$target_file= $this->_uploadedFilePath . "/" . $uuid . "." . $fileType;
		
    	$uploadStstus = 1;
    	
    	// Check file size
    	if ($_FILES["fileToUpload"]["size"] > 500000) {
    		echo "Sorry, your file is too large.";
    		$uploadStstus= 0;
    	}
    	
    	if ($uploadStstus== 0) {
    		echo "Sorry, your file was not uploaded.";
    	} else {
    		if(is_uploaded_file($_FILES['fileToUpload']['tmp_name'])){  
	    		if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
	    			$UacGroupFile->insertGroupFile($fileParentId, $fileParentDiv, $uuid . "." . $fileType, $_FILES["fileToUpload"]["name"], $target_file);
	    			
	    			echo $uuid . "." . $fileType;
	    		} else {
	    			echo "Sorry, there was an error uploading your file.";
	    		}
    		}else{
    			echo 'Stored failed:no post ';
    		}
    	}
    }
    
    public function downloadAction()
    {
    	$this->_helper->layout->disableLayout();
    	$this->_helper->viewRenderer->setNoRender(true);

    	$UacGroupFile = new Application_Model_UacGroupFile("database1");
    	$paramerters  = $this->getRequest()->getPost();
    	$fileParentId = $paramerters["id"];
    	
    	$downFileInfo = $UacGroupFile->getGroupFile($fileParentId);
    	
    	if (file_exists($downFileInfo["file_dir"])) {
    		// action body
    		$fileInfo = pathinfo($downFileInfo["file_dir"], PATHINFO_EXTENSION);
    		
    		$file = fopen($downFileInfo["file_dir"], "r");
    		
    		Header("Content-type: application/octet-stream");
    		Header("Accept-Ranges: bytes");
    		Header("Accept-Length: " . filesize($downFileInfo["file_dir"]));
    		Header("Content-Disposition: attachment; filename=" . $downFileInfo["file_nm"]);
    		
    		echo fread($file, filesize($downFileInfo["file_dir"]));
    		fclose($file);
    		
    		exit();
    	} else {
    		echo $downFileInfo['file_dir'] . "は存在しません";
    	}
    }
    
    private function create_uuid($prefix = ""){
    	$str = md5(uniqid(mt_rand(), true));
    	$uuid  = substr($str,0,8) . '-';
    	$uuid .= substr($str,8,4) . '-';
    	$uuid .= substr($str,12,4) . '-';
    	$uuid .= substr($str,16,4) . '-';
    	$uuid .= substr($str,20,12);
    	
    	return $prefix . "-" . $uuid;
    }
}