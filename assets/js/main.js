$(document).ready(function () {
  'use strict';
  
  $('.const-btn-trigger').click(function () {
    $('#constructions').toggleClass('active');
  });
  
  $('#btn-trigger').click(function () {
    $('body').toggleClass('open');
    $('#constructions').removeClass('active');
  });
  
  $('.menu-close').click(function () {
    $('body').removeClass('open');
    $('.hamburger').removeClass('is-active');
  });
  
  $('.const-close').click(function () {
    $('#constructions').removeClass('active');
  });
  
  $('.arch-text-trigger').click(function () {
    $(this).addClass('hidden');
    $('.arch-text').addClass('open');
  });
  $('.close-arch-text').click(function () {
    $('.arch-text').removeClass('open');
    $('.arch-text-trigger').removeClass('hidden');
  });
  
  $('#datepicker').datepicker();
});
