<?php

namespace App\Http\Controllers;

use App\Models\Pet;
use Illuminate\Http\Request;

/**
 * Retorna a lista de pets cadastrados
 * 
 * @return Collection
 */
class PetController extends Controller
{
    public function index(){
        return Pet::get();
    }
}
