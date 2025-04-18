<?php
// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed Rassoul Allah

use App\Http\Controllers\ArticlesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::resource('articles', ArticlesController::class);
