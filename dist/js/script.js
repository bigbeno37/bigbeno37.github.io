function switchIcon(e){return e?($(".hamburgerIcon i").removeClass("fa-times").addClass("fa-bars"),!1):($(".hamburgerIcon i").removeClass("fa-bars").addClass("fa-times"),!0)}$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top},1e3),active=switchIcon(active),$(".dropdownMenu").slideToggle("slow",function(){}),!1}}),$(document).ready(function(){active=!1,$(".dropdownMenu").hide(),$(".hamburgerIcon").click(function(){active=switchIcon(active),$(".dropdownMenu").slideToggle("slow",function(){})})});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJzd2l0Y2hJY29uIiwiYWN0aXZlIiwiJCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJjbGljayIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJyZXBsYWNlIiwidGhpcyIsImhvc3RuYW1lIiwidGFyZ2V0IiwiaGFzaCIsImxlbmd0aCIsInNsaWNlIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsInNsaWRlVG9nZ2xlIiwiZG9jdW1lbnQiLCJyZWFkeSIsImhpZGUiXSwibWFwcGluZ3MiOiJBQXdCQSxRQUFTQSxZQUFXQyxHQUNoQixNQUFJQSxJQUNBQyxFQUFFLG9CQUFvQkMsWUFBWSxZQUFZQyxTQUFTLFlBRWhELElBSVBGLEVBQUUsb0JBQW9CQyxZQUFZLFdBQVdDLFNBQVMsYUFFL0MsR0EvQmZGLEVBQUUsNEJBQTRCRyxNQUFNLFdBQ2hDLEdBQUlDLFNBQVNDLFNBQVNDLFFBQVEsTUFBTSxLQUFPQyxLQUFLRixTQUFTQyxRQUFRLE1BQU0sS0FDaEVGLFNBQVNJLFVBQVlELEtBQUtDLFNBQVUsQ0FFdkMsR0FBSUMsR0FBU1QsRUFBRU8sS0FBS0csS0FFcEIsSUFEQUQsRUFBU0EsRUFBT0UsT0FBU0YsRUFBU1QsRUFBRSxTQUFXTyxLQUFLRyxLQUFLRSxNQUFNLEdBQUksS0FDL0RILEVBQU9FLE9BUVAsTUFQQVgsR0FBRSxhQUFhYSxTQUNYQyxVQUFXTCxFQUFPTSxTQUFTQyxLQUM1QixLQUVIakIsT0FBU0QsV0FBV0MsUUFDcEJDLEVBQUUsaUJBQWlCaUIsWUFBWSxPQUFRLGVBRWhDLEtBdUJuQmpCLEVBQUVrQixVQUFVQyxNQUFNLFdBQ2RwQixRQUFTLEVBRVRDLEVBQUUsaUJBQWlCb0IsT0FFbkJwQixFQUFFLGtCQUFrQkcsTUFBTSxXQUN0QkosT0FBU0QsV0FBV0MsUUFFcEJDLEVBQUUsaUJBQWlCaUIsWUFBWSxPQUFRIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENyZWF0ZWQgYnkgRGV2aW4gU3R1cmdlb24gZm91bmQgaW4gY29tbWVudHMgc2VjdGlvbiBvZlxyXG4vLyBodHRwczovL2Nzcy10cmlja3MuY29tL3NuaXBwZXRzL2pxdWVyeS9zbW9vdGgtc2Nyb2xsaW5nL1xyXG5cclxuJCgnYVtocmVmKj0jXTpub3QoW2hyZWY9I10pJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sJycpID09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sJycpXHJcbiAgICAgICAgfHwgbG9jYXRpb24uaG9zdG5hbWUgPT0gdGhpcy5ob3N0bmFtZSkge1xyXG5cclxuICAgICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xyXG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsnXScpO1xyXG4gICAgICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wXHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG5cclxuICAgICAgICAgICAgYWN0aXZlID0gc3dpdGNoSWNvbihhY3RpdmUpO1xyXG4gICAgICAgICAgICAkKFwiLmRyb3Bkb3duTWVudVwiKS5zbGlkZVRvZ2dsZShcInNsb3dcIiwgZnVuY3Rpb24oKXt9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbmZ1bmN0aW9uIHN3aXRjaEljb24oYWN0aXZlKSB7XHJcbiAgICBpZiAoYWN0aXZlKSB7XHJcbiAgICAgICAgJChcIi5oYW1idXJnZXJJY29uIGlcIikucmVtb3ZlQ2xhc3MoXCJmYS10aW1lc1wiKS5hZGRDbGFzcyhcImZhLWJhcnNcIik7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIHtcclxuICAgICAgICAkKFwiLmhhbWJ1cmdlckljb24gaVwiKS5yZW1vdmVDbGFzcyhcImZhLWJhcnNcIikuYWRkQ2xhc3MoXCJmYS10aW1lc1wiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgJChcIi5kcm9wZG93bk1lbnVcIikuaGlkZSgpO1xyXG4gICAgXHJcbiAgICAkKFwiLmhhbWJ1cmdlckljb25cIikuY2xpY2soZnVuY3Rpb24oKXtcclxuICAgICAgICBhY3RpdmUgPSBzd2l0Y2hJY29uKGFjdGl2ZSk7XHJcblxyXG4gICAgICAgICQoXCIuZHJvcGRvd25NZW51XCIpLnNsaWRlVG9nZ2xlKFwic2xvd1wiLCBmdW5jdGlvbigpe30pO1xyXG4gICAgfSk7XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
