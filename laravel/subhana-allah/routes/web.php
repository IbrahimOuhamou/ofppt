<?php
// بسم الله الرحمن الرحيم
// la ilaha illa Allah Mohammed Rassoul Allah

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

$resources = [
    [
        'id' => 1,
        'name' => 'Ahmed',
        'age' => 19,
    ],
    [
        'id' => 2,
        'name' => 'si Mohammed',
        'age' => 20,
    ],
];

// Route::get('/', function () {
//     return view('welcome');
// });
Route::view('/', 'welcome');

// Route::get('/subhana-allah', function () {
//     return 'subhana Allah';
// });

// only cares about order
Route::get('/subhana-allah/{id}/{category?}', function($id, $cat=null) {
    return view('subhana-allah-get', [
        'subhana_allah_id' => $id,
        'category' => $cat,
    ]);
    // return 'subhana Allah: id = ' . $id . '. category = ' . ($cat ?? '(none)');
});

Route::view('/about', 'about');
Route::view('/contact', 'contact');

Route::post('/contact', function(Request $request) {
    return view('contact-post', $request->all());
});

Route::get('/resource', function() use($resources) {
    return view('resource', ['resources' => $resources]);
});

Route::post('/resource', function(Request $request) use($resources) {
    $resource = $request->all();

    $resources = array_push($resources, $resource);

    return redirect('/resource');
});

Route::put('/resource/{id}', function(Request $request, $id) use($resources) {
    $resource = $request->all();

    $resource_index = array_find_key($resources, function($res) use($resource) {
        return $res['id'] === $resource['id'];
    });

    $resources[$resource_index] = $resource;

    return redirect('/resource');
});

