<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\Response;

class RequestLogger
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $request->start = microtime(true);

        return $next($request);
    }

    public function terminate(Request $request, Response $response): void {
        $duration = microtime(true) - $request->start;
        Log::info('Requested: [' . $duration . '/' . $request->method() . '/' . $request->uri() . '] ' . $request->uri());
    }
}
