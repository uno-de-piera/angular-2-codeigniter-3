<?php
defined('BASEPATH') OR exit('No direct script access allowed');

final class Bootstrap extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
    }
    
    public function index()
    {
        $this->load->view("app/index");
    }
}
//End of file applications/controller/Bootstrap.php