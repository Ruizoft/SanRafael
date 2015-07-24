<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		 Schema::create('users', function($table)
        {
            $table->increments('id');
            $table->string('email')-> unique();
            $table->string('password');
            $table->string('nombre', 120)->nullable();
            $table->integer('cedula')->nullable();
            $table->integer('genero')->nullable();
            $table->integer('fechaDia')->nullable();
            $table->integer('fechaMes')->nullable();
            $table->integer('fechaYear')->nullable();
            $table->date('fechaNacimiento')->nullable();
            $table->integer('edad')->nullable();
            $table->string('ciudadRes', 100)->nullable();
            $table->string('profesion', 150)->nullable();
            $table->rememberToken();
            $table->dateTime('created_at')->nullable();
            $table->dateTime('updated_at')->nullable();
        });
		//
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		 Schema::drop('users');
		//
	}

}
