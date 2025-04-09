<?php
// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed Rassoul Allah

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::view('/', 'home');

$blogs = [
    [
        'id' => 1,
        'title' => 'basmala',
        'content' => 'بسم الله الرحمن الرحيم'
    ],
    [
        'id' => 2,
        'title' => 'shahada',
        'content' => 'la ilaha illa Allah Mohammed Rassoul Allah'
    ],
];

Route::get('/blogs', function() use($blogs) {
    return view('index', ['blogs' => $blogs]);
});

Route::view('/blogs/new', 'create');
Route::post('/blogs/new', function(Request $request) use($blogs) {

    $blog = $request->all();

    array_push($blogs, $blog);

    return redirect('/blogs/' . $blog['id']);
});

Route::get('/blogs/{id}', function($id) use($blogs) {
    $blog_id = array_search($id, array_column($blogs, 'id'));
    return view('show', ['blog' => $blogs[$blog_id]]);
});

