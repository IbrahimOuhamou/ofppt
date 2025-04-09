@extends('template')
@section('content')
    <h2>بسم الله الرحمن الرحيم</h2>

    <table>
        <thead>
            <th>id</th>
            <th>name</th>
            <th>age</th>
        </thead>
        <tbody>

            @foreach ($resources as $resource)
                <td>{{ $resource['id'] }}</td>
                <td>{{ $resource['name'] }}</td>
                <td>{{ $resource['age'] }}</td>
            @endforeach

        </tbody>
    </table>
@endsection
