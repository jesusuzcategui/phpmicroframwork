<?php namespace App\Controllers;

use Core\Controller;
use Core\Model;
use Core\View;
use App\helpers\Ajax;
use App\helpers\Functions;

defined("BASEPATH") or die("ACCESS DENIED");

class dashboard extends Controller
{
    private $modVentas;

    function __construct()
    {
        $this->modVentas = Model::loadModel('ventas');
        $this->verifySession('');
    }

    function index()
    {
        View::render(__CLASS__, 'dashboard', 'Panel de administración');
    }
	
	function remarketing(){
		$resultado = $this->modVentas->getDataSales();
		View::set('emails', $resultado);
		View::render(__CLASS__, 'remarketing', 'REPORTE DE EMAILS');
	}

    function systemlog()
    {
      $logfile = BASEPATH . SPR . 'webpay.log';

      if( is_file($logfile) ){
        $contentLog = file_get_contents($logfile);
      } else {
        $contentLog = "El archivo no puede ser leido";
      }

      View::set('contenido', $contentLog);
      View::render(__CLASS__, 'systemlog', 'Log de acciones webpay');
    }
}
