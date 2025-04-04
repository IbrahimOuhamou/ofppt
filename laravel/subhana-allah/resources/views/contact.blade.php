@extends('template')
@section('content')
<h2>بسم الله الرحمن الرحيم</h2>

<form action="#" method="POST">

    {{ csrf_field() }}

    <label>
        Name:
        <input name="name" id="name" type="text" />
    </label>

    <label>
        Email:
        <input name="email" id="email" type="email" />
    </label>

    <textarea name="message" placeholder="message"></textarea>

    <button type="submit">Submit</button>

</form>
@endsection
