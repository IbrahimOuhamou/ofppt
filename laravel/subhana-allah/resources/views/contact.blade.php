@extends('template')
@section('content')
<h2>بسم الله الرحمن الرحيم</h2>

<form action="#" method="POST">

    {{ csrf_field() }}

    <label class="label">
        Name:
        <input class="input" name="name" id="name" type="text" />
    </label>

    <label>
        Email:
        <input name="email" id="email" type="email" />
    </label>

    <textarea name="message" placeholder="message"></textarea>

    <button type="submit" class="bg-green-200 rounded-lg p-2">Submit</button>

</form>
@endsection
