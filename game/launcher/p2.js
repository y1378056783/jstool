/**
 * 
 * @authors p2物理引擎库
 * @date    2018-03-23 10:54:14
 * @version $Id$
 */
!function(e) {
	if ("object" == typeof exports) module.exports = e();
	else {
		var f;
		"undefined" != typeof window ? f = window: "undefined" != typeof global ? f = global: "undefined" != typeof self && (f = self);
		p2 = f.p2 = e()
	}
} (function() {
	return function f(g, d, b) {
		function a(h, v) {
			if (!d[h]) {
				if (!g[h]) {
					var u = "function" == typeof require && require;
					if (!v && u) return u(h, !0);
					if (c) return c(h, !0);
					throw Error("Cannot find module '" + h + "'");
				}
				u = d[h] = {
					exports: {}
				};
				g[h][0].call(u.exports,
				function(b) {
					var c = g[h][1][b];
					return a(c ? c: b)
				},
				u, u.exports, f, g, d, b)
			}
			return d[h].exports
		}
		for (var c = "function" == typeof require && require,
		h = 0; h < b.length; h++) a(b[h]);
		return a
	} ({
		1 : [function(f, g, d) {
			function b() {}
			g.exports = b;
			b.lineInt = function(a, b, d) {
				var f = [0, 0],
				g,
				u,
				n,
				k,
				m;
				g = a[1][1] - a[0][1];
				u = a[0][0] - a[1][0];
				a = g * a[0][0] + u * a[0][1];
				n = b[1][1] - b[0][1];
				k = b[0][0] - b[1][0];
				b = n * b[0][0] + k * b[0][1];
				m = g * k - n * u;
				Scalar.eq(m, 0, d || 0) || (f[0] = (k * a - u * b) / m, f[1] = (g * b - n * a) / m);
				return f
			};
			b.segmentsIntersect = function(a, b, d, f) {
				var g = b[0] - a[0];
				b = b[1] - a[1];
				var u = f[0] - d[0],
				n = f[1] - d[1];
				if (0 == u * b - n * g) return ! 1;
				f = (g * (d[1] - a[1]) + b * (a[0] - d[0])) / (u * b - n * g);
				a = (u * (a[1] - d[1]) + n * (d[0] - a[0])) / (n * g - u * b);
				return 0 <= f && 1 >= f && 0 <= a && 1 >= a
			}
		},
		{
			"./Scalar": 4
		}],
		2 : [function(f, g, d) {
			function b() {}
			g.exports = b;
			b.area = function(a, b, c) {
				return (b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1])
			};
			b.left = function(a, c, d) {
				return 0 < b.area(a, c, d)
			};
			b.leftOn = function(a, c, d) {
				return 0 <= b.area(a, c, d)
			};
			b.right = function(a, c, d) {
				return 0 > b.area(a, c, d)
			};
			b.rightOn = function(a, c, d) {
				return 0 >= b.area(a, c, d)
			};
			var a = [],
			c = [];
			b.collinear = function(d, f, g, u) {
				return u ? (a[0] = f[0] - d[0], a[1] = f[1] - d[1], c[0] = g[0] - f[0], c[1] = g[1] - f[1], d = a[0] * c[0] + a[1] * c[1], f = Math.sqrt(a[0] * a[0] + a[1] * a[1]), g = Math.sqrt(c[0] * c[0] + c[1] * c[1]), Math.acos(d / (f * g)) < u) : 0 == b.area(d, f, g)
			};
			b.sqdist = function(a, b) {
				var c = b[0] - a[0],
				d = b[1] - a[1];
				return c * c + d * d
			}
		},
		{}],
		3 : [function(f, g, d) {
			function b() {
				this.vertices = []
			}

			function a(a, b, c, d, f) {
				var h = b[1] - a[1];
				b = a[0] - b[0];
				a = h * a[0] + b * a[1];
				var g = d[1] - c[1];
				d = c[0] - d[0];
				c = g * c[0] + d * c[1];
				var v = h * d - g * b;
				return p.eq(v, 0, f || 0) ? [0, 0] : [(d * a - b * c) / v, (h * c - g * a) / v]
			}
			var c = f("./Line"),
			h = f("./Point"),
			p = f("./Scalar");
			g.exports = b;
			b.prototype.at = function(a) {
				var b = this.vertices,
				c = b.length;
				return b[0 > a ? a % c + c: a % c]
			};
			b.prototype.first = function() {
				return this.vertices[0]
			};
			b.prototype.last = function() {
				return this.vertices[this.vertices.length - 1]
			};
			b.prototype.clear = function() {
				this.vertices.length = 0
			};
			b.prototype.append = function(a, b, c) {
				if ("undefined" == typeof b) throw Error("From is not given!");
				if ("undefined" == typeof c) throw Error("To is not given!");
				if (c - 1 < b) throw Error("lol1");
				if (c > a.vertices.length) throw Error("lol2");
				if (0 > b) throw Error("lol3");
				for (; b < c; b++) this.vertices.push(a.vertices[b])
			};
			b.prototype.makeCCW = function() {
				for (var a = 0,
				b = this.vertices,
				c = 1; c < this.vertices.length; ++c) if (b[c][1] < b[a][1] || b[c][1] == b[a][1] && b[c][0] > b[a][0]) a = c;
				h.left(this.at(a - 1), this.at(a), this.at(a + 1)) || this.reverse()
			};
			b.prototype.reverse = function() {
				for (var a = [], b = 0, c = this.vertices.length; b !== c; b++) a.push(this.vertices.pop());
				this.vertices = a
			};
			b.prototype.isReflex = function(a) {
				return h.right(this.at(a - 1), this.at(a), this.at(a + 1))
			};
			var v = [],
			u = [];
			b.prototype.canSee = function(a, b) {
				var d, f;
				if (h.leftOn(this.at(a + 1), this.at(a), this.at(b)) && h.rightOn(this.at(a - 1), this.at(a), this.at(b))) return ! 1;
				f = h.sqdist(this.at(a), this.at(b));
				for (var g = 0; g !== this.vertices.length; ++g) if ((g + 1) % this.vertices.length !== a && g !== a && h.leftOn(this.at(a), this.at(b), this.at(g + 1)) && h.rightOn(this.at(a), this.at(b), this.at(g)) && (v[0] = this.at(a), v[1] = this.at(b), u[0] = this.at(g), u[1] = this.at(g + 1), d = c.lineInt(v, u), h.sqdist(this.at(a), d) < f)) return ! 1;
				return ! 0
			};
			b.prototype.copy = function(a, c, d) {
				d = d || new b;
				d.clear();
				if (a < c) for (var f = a; f <= c; f++) d.vertices.push(this.vertices[f]);
				else {
					for (f = 0; f <= c; f++) d.vertices.push(this.vertices[f]);
					for (f = a; f < this.vertices.length; f++) d.vertices.push(this.vertices[f])
				}
				return d
			};
			b.prototype.getCutEdges = function() {
				for (var a = [], c = [], d = [], f = new b, h = Number.MAX_VALUE, g = 0; g < this.vertices.length; ++g) if (this.isReflex(g)) for (var p = 0; p < this.vertices.length; ++p) if (this.canSee(g, p)) {
					for (var c = this.copy(g, p, f).getCutEdges(), d = this.copy(p, g, f).getCutEdges(), v = 0; v < d.length; v++) c.push(d[v]);
					c.length < h && (a = c, h = c.length, a.push([this.at(g), this.at(p)]))
				}
				return a
			};
			b.prototype.decomp = function() {
				var a = this.getCutEdges();
				return 0 < a.length ? this.slice(a) : [this]
			};
			b.prototype.slice = function(a) {
				if (0 == a.length) return [this];
				if (a instanceof Array && a.length && a[0] instanceof Array && 2 == a[0].length && a[0][0] instanceof Array) {
					for (var b = [this], c = 0; c < a.length; c++) for (var d = a[c], f = 0; f < b.length; f++) {
						var h = b[f].slice(d);
						if (h) {
							b.splice(f, 1);
							b.push(h[0], h[1]);
							break
						}
					}
					return b
				}
				d = a;
				c = this.vertices.indexOf(d[0]);
				f = this.vertices.indexOf(d[1]);
				return - 1 != c && -1 != f ? [this.copy(c, f), this.copy(f, c)] : !1
			};
			b.prototype.isSimple = function() {
				for (var a = this.vertices,
				b = 0; b < a.length - 1; b++) for (var d = 0; d < b - 1; d++) if (c.segmentsIntersect(a[b], a[b + 1], a[d], a[d + 1])) return ! 1;
				for (b = 1; b < a.length - 2; b++) if (c.segmentsIntersect(a[0], a[a.length - 1], a[b], a[b + 1])) return ! 1;
				return ! 0
			};
			b.prototype.quickDecomp = function(c, d, f, g, p, v) {
				p = p || 100;
				v = v || 0;
				g = g || 25;
				c = "undefined" != typeof c ? c: [];
				d = d || [];
				f = f || [];
				var u = [0, 0],
				B = [0, 0],
				z = [0, 0],
				r = 0,
				y = 0,
				w = 0,
				A = r = 0,
				x = 0,
				D = 0,
				C = new b,
				F = new b,
				E = this.vertices;
				if (3 > E.length) return c;
				v++;
				if (v > p) return console.warn("quickDecomp: max level (" + p + ") reached."),
				c;
				for (var G = 0; G < this.vertices.length; ++G) if (this.isReflex(G)) {
					d.push(this.vertices[G]);
					for (var r = y = Number.MAX_VALUE,
					H = 0; H < this.vertices.length; ++H) h.left(this.at(G - 1), this.at(G), this.at(H)) && h.rightOn(this.at(G - 1), this.at(G), this.at(H - 1)) && (z = a(this.at(G - 1), this.at(G), this.at(H), this.at(H - 1)), h.right(this.at(G + 1), this.at(G), z) && (w = h.sqdist(this.vertices[G], z), w < y && (y = w, B = z, x = H))),
					h.left(this.at(G + 1), this.at(G), this.at(H + 1)) && h.rightOn(this.at(G + 1), this.at(G), this.at(H)) && (z = a(this.at(G + 1), this.at(G), this.at(H), this.at(H + 1)), h.left(this.at(G - 1), this.at(G), z) && (w = h.sqdist(this.vertices[G], z), w < r && (r = w, u = z, A = H)));
					if (x == (A + 1) % this.vertices.length) z[0] = (B[0] + u[0]) / 2,
					z[1] = (B[1] + u[1]) / 2,
					f.push(z),
					G < A ? (C.append(this, G, A + 1), C.vertices.push(z), F.vertices.push(z), 0 != x && F.append(this, x, this.vertices.length), F.append(this, 0, G + 1)) : (0 != G && C.append(this, G, this.vertices.length), C.append(this, 0, A + 1), C.vertices.push(z), F.vertices.push(z), F.append(this, x, G + 1));
					else {
						x > A && (A += this.vertices.length);
						r = Number.MAX_VALUE;
						if (A < x) return c;
						for (H = x; H <= A; ++H) h.leftOn(this.at(G - 1), this.at(G), this.at(H)) && h.rightOn(this.at(G + 1), this.at(G), this.at(H)) && (w = h.sqdist(this.at(G), this.at(H)), w < r && (r = w, D = H % this.vertices.length));
						G < D ? (C.append(this, G, D + 1), 0 != D && F.append(this, D, E.length), F.append(this, 0, G + 1)) : (0 != G && C.append(this, G, E.length), C.append(this, 0, D + 1), F.append(this, D, G + 1))
					}
					C.vertices.length < F.vertices.length ? (C.quickDecomp(c, d, f, g, p, v), F.quickDecomp(c, d, f, g, p, v)) : (F.quickDecomp(c, d, f, g, p, v), C.quickDecomp(c, d, f, g, p, v));
					return c
				}
				c.push(this);
				return c
			};
			b.prototype.removeCollinearPoints = function(a) {
				for (var b = 0,
				c = this.vertices.length - 1; 3 < this.vertices.length && 0 <= c; --c) h.collinear(this.at(c - 1), this.at(c), this.at(c + 1), a) && (this.vertices.splice(c % this.vertices.length, 1), c--, b++);
				return b
			}
		},
		{
			"./Line": 1,
			"./Point": 2,
			"./Scalar": 4
		}],
		4 : [function(f, g, d) {
			function b() {}
			g.exports = b;
			b.eq = function(a, b, d) {
				d = d || 0;
				return Math.abs(a - b) < d
			}
		},
		{}],
		5 : [function(f, g, d) {
			g.exports = {
				Polygon: f("./Polygon"),
				Point: f("./Point")
			}
		},
		{
			"./Point": 2,
			"./Polygon": 3
		}],
		6 : [function(f, g, d) {
			g.exports = {
				name: "p2",
				version: "0.6.1",
				description: "A JavaScript 2D physics engine.",
				author: "Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",
				keywords: ["p2.js", "p2", "physics", "engine", "2d"],
				main: "./src/p2.js",
				engines: {
					node: "*"
				},
				repository: {
					type: "git",
					url: "https://github.com/schteppe/p2.js.git"
				},
				bugs: {
					url: "https://github.com/schteppe/p2.js/issues"
				},
				licenses: [{
					type: "MIT"
				}],
				devDependencies: {
					grunt: "~0.4.0",
					"grunt-contrib-jshint": "~0.9.2",
					"grunt-contrib-nodeunit": "~0.1.2",
					"grunt-contrib-uglify": "~0.4.0",
					"grunt-contrib-watch": "~0.5.0",
					"grunt-browserify": "~2.0.1",
					"grunt-contrib-concat": "^0.4.0"
				},
				dependencies: {
					"poly-decomp": "0.1.0"
				}
			}
		},
		{}],
		7 : [function(f, g, d) {
			function b(b) {
				this.lowerBound = a.create();
				b && b.lowerBound && a.copy(this.lowerBound, b.lowerBound);
				this.upperBound = a.create();
				b && b.upperBound && a.copy(this.upperBound, b.upperBound)
			}
			var a = f("../math/vec2");
			f("../utils/Utils");
			g.exports = b;
			var c = a.create();
			b.prototype.setFromPoints = function(b, d, f, g) {
				var n = this.lowerBound,
				k = this.upperBound;
				"number" !== typeof f && (f = 0);
				0 !== f ? a.rotate(n, b[0], f) : a.copy(n, b[0]);
				a.copy(k, n);
				for (var m = Math.cos(f), l = Math.sin(f), q = 1; q < b.length; q++) {
					var t = b[q];
					if (0 !== f) {
						var s = t[0],
						t = t[1];
						c[0] = m * s - l * t;
						c[1] = l * s + m * t;
						t = c
					}
					for (s = 0; 2 > s; s++) t[s] > k[s] && (k[s] = t[s]),
					t[s] < n[s] && (n[s] = t[s])
				}
				d && (a.add(this.lowerBound, this.lowerBound, d), a.add(this.upperBound, this.upperBound, d));
				g && (this.lowerBound[0] -= g, this.lowerBound[1] -= g, this.upperBound[0] += g, this.upperBound[1] += g)
			};
			b.prototype.copy = function(b) {
				a.copy(this.lowerBound, b.lowerBound);
				a.copy(this.upperBound, b.upperBound)
			};
			b.prototype.extend = function(a) {
				for (var b = 2; b--;) {
					var c = a.lowerBound[b];
					this.lowerBound[b] > c && (this.lowerBound[b] = c);
					c = a.upperBound[b];
					this.upperBound[b] < c && (this.upperBound[b] = c)
				}
			};
			b.prototype.overlaps = function(a) {
				var b = this.lowerBound,
				c = this.upperBound,
				d = a.lowerBound;
				a = a.upperBound;
				return (d[0] <= c[0] && c[0] <= a[0] || b[0] <= a[0] && a[0] <= c[0]) && (d[1] <= c[1] && c[1] <= a[1] || b[1] <= a[1] && a[1] <= c[1])
			}
		},
		{
			"../math/vec2": 31,
			"../utils/Utils": 50
		}],
		8 : [function(f, g, d) {
			function b(a) {
				this.type = a;
				this.result = [];
				this.world = null;
				this.boundingVolumeType = b.AABB
			}
			var a = f("../math/vec2"),
			c = f("../objects/Body");
			g.exports = b;
			b.AABB = 1;
			b.BOUNDING_CIRCLE = 2;
			b.prototype.setWorld = function(a) {
				this.world = a
			};
			b.prototype.getCollisionPairs = function(a) {
				throw Error("getCollisionPairs must be implemented in a subclass!");
			};
			var h = a.create();
			b.boundingRadiusCheck = function(b, c) {
				a.sub(h, b.position, c.position);
				var d = a.squaredLength(h),
				f = b.boundingRadius + c.boundingRadius;
				return d <= f * f
			};
			b.aabbCheck = function(a, b) {
				return a.getAABB().overlaps(b.getAABB())
			};
			b.prototype.boundingVolumeCheck = function(a, c) {
				var d;
				switch (this.boundingVolumeType) {
				case b.BOUNDING_CIRCLE:
					d = b.boundingRadiusCheck(a, c);
					break;
				case b.AABB:
					d = b.aabbCheck(a, c);
					break;
				default:
					throw Error("Bounding volume type not recognized: " + this.boundingVolumeType);
				}
				return d
			};
			b.canCollide = function(a, b) {
				return a.type === c.STATIC && b.type === c.STATIC || a.type === c.KINEMATIC && b.type === c.STATIC || a.type === c.STATIC && b.type === c.KINEMATIC || a.type === c.KINEMATIC && b.type === c.KINEMATIC || a.sleepState === c.SLEEPING && b.sleepState === c.SLEEPING || a.sleepState === c.SLEEPING && b.type === c.STATIC || b.sleepState === c.SLEEPING && a.type === c.STATIC ? !1 : !0
			};
			b.NAIVE = 1;
			b.SAP = 2
		},
		{
			"../math/vec2": 31,
			"../objects/Body": 32
		}],
		9 : [function(f, g, d) {
			function b(b) {
				a.apply(this);
				b = c.defaults(b, {
					xmin: -100,
					xmax: 100,
					ymin: -100,
					ymax: 100,
					nx: 10,
					ny: 10
				});
				this.xmin = b.xmin;
				this.ymin = b.ymin;
				this.xmax = b.xmax;
				this.ymax = b.ymax;
				this.nx = b.nx;
				this.ny = b.ny;
				this.binsizeX = (this.xmax - this.xmin) / this.nx;
				this.binsizeY = (this.ymax - this.ymin) / this.ny
			}
			f("../shapes/Circle");
			f("../shapes/Plane");
			f("../shapes/Particle");
			var a = f("../collision/Broadphase");
			f("../math/vec2");
			var c = f("../utils/Utils");
			g.exports = b;
			b.prototype = new a;
			b.prototype.constructor = b;
			b.prototype.getCollisionPairs = function(b) {
				var c = [],
				d = b.bodies,
				f = d.length,
				g = this.nx,
				k = this.ny,
				m = this.xmin,
				l = this.ymin,
				q = this.xmax,
				t = this.ymax;
				b = [];
				for (var s = g * k,
				B = 0; B < s; B++) b.push([]);
				for (var z = g / (q - m), r = k / (t - l), B = 0; B !== f; B++) for (var g = d[B], y = g.aabb, w = Math.max(y.lowerBound[0], m), A = Math.max(y.lowerBound[1], l), x = Math.min(y.upperBound[0], q), D = Math.min(y.upperBound[1], t), A = Math.floor(r * (A - l)), y = Math.floor(z * (x - m)), D = Math.floor(r * (D - l)), w = Math.floor(z * (w - m)); w <= y; w++) for (x = A; x <= D; x++) {
					var C = w * (k - 1) + x;
					0 <= C && C < s && b[C].push(g)
				}
				for (B = 0; B !== s; B++) for (d = b[B], w = 0, f = d.length; w !== f; w++) for (g = d[w], x = 0; x !== w; x++) k = d[x],
				a.canCollide(g, k) && this.boundingVolumeCheck(g, k) && c.push(g, k);
				return c
			}
		},
		{
			"../collision/Broadphase": 8,
			"../math/vec2": 31,
			"../shapes/Circle": 38,
			"../shapes/Particle": 42,
			"../shapes/Plane": 43,
			"../utils/Utils": 50
		}],
		10 : [function(f, g, d) {
			function b() {
				a.call(this, a.NAIVE)
			}
			f("../shapes/Circle");
			f("../shapes/Plane");
			f("../shapes/Shape");
			f("../shapes/Particle");
			var a = f("../collision/Broadphase");
			f("../math/vec2");
			g.exports = b;
			b.prototype = new a;
			b.prototype.constructor = b;
			b.prototype.getCollisionPairs = function(b) {
				b = b.bodies;
				for (var d = this.result,
				f = d.length = 0,
				g = b.length; f !== g; f++) for (var u = b[f], n = 0; n < f; n++) {
					var k = b[n];
					a.canCollide(u, k) && this.boundingVolumeCheck(u, k) && d.push(u, k)
				}
				return d
			};
			b.prototype.aabbQuery = function(a, b, d) {
				d = d || [];
				a = a.bodies;
				for (var f = 0; f < a.length; f++) {
					var g = a[f];
					g.aabbNeedsUpdate && g.updateAABB();
					g.aabb.overlaps(b) && d.push(g)
				}
				return d
			}
		},
		{
			"../collision/Broadphase": 8,
			"../math/vec2": 31,
			"../shapes/Circle": 38,
			"../shapes/Particle": 42,
			"../shapes/Plane": 43,
			"../shapes/Shape": 45
		}],
		11 : [function(f, g, d) {
			function b() {
				this.contactEquations = [];
				this.frictionEquations = [];
				this.enabledEquations = this.enableFriction = !0;
				this.slipForce = 10;
				this.frictionCoefficient = 0.3;
				this.surfaceVelocity = 0;
				this.reuseObjects = !0;
				this.reusableContactEquations = [];
				this.reusableFrictionEquations = [];
				this.restitution = 0;
				this.stiffness = m.DEFAULT_STIFFNESS;
				this.relaxation = m.DEFAULT_RELAXATION;
				this.frictionStiffness = m.DEFAULT_STIFFNESS;
				this.frictionRelaxation = m.DEFAULT_RELAXATION;
				this.enableFrictionReduction = !0;
				this.collidingBodiesLastStep = new k;
				this.contactSkinSize = 0.01
			}

			function a(a, b) {
				h.set(a.vertices[0], 0.5 * -b.length, -b.radius);
				h.set(a.vertices[1], 0.5 * b.length, -b.radius);
				h.set(a.vertices[2], 0.5 * b.length, b.radius);
				h.set(a.vertices[3], 0.5 * -b.length, b.radius)
			}

			function c(a, b, c, d) {
				var f = X,
				g = va,
				k = wa,
				l = xa;
				b = b.vertices;
				for (var n = null,
				q = 0; q !== b.length + 1; q++) {
					var m = b[(q + 1) % b.length];
					h.rotate(f, b[q % b.length], d);
					h.rotate(g, m, d);
					v(f, f, c);
					v(g, g, c);
					p(k, f, a);
					p(l, g, a);
					m = h.crossLength(k, l);
					null === n && (n = m);
					if (0 >= m * n) return ! 1;
					n = m
				}
				return ! 0
			}
			var h = f("../math/vec2"),
			p = h.sub,
			v = h.add,
			u = h.dot,
			n = f("../utils/Utils"),
			k = f("../utils/TupleDictionary"),
			m = f("../equations/Equation"),
			l = f("../equations/ContactEquation"),
			q = f("../equations/FrictionEquation");
			d = f("../shapes/Circle");
			var t = f("../shapes/Convex"),
			s = f("../shapes/Shape");
			f("../objects/Body");
			var B = f("../shapes/Rectangle");
			g.exports = b;
			var z = h.fromValues(0, 1),
			r = h.fromValues(0, 0),
			y = h.fromValues(0, 0),
			w = h.fromValues(0, 0),
			A = h.fromValues(0, 0),
			x = h.fromValues(0, 0),
			D = h.fromValues(0, 0),
			C = h.fromValues(0, 0),
			F = h.fromValues(0, 0),
			E = h.fromValues(0, 0),
			G = h.fromValues(0, 0),
			H = h.fromValues(0, 0),
			L = h.fromValues(0, 0),
			J = h.fromValues(0, 0),
			P = h.fromValues(0, 0),
			M = h.fromValues(0, 0),
			T = h.fromValues(0, 0),
			Q = h.fromValues(0, 0),
			Y = h.fromValues(0, 0),
			O = [],
			na = h.create(),
			aa = h.create();
			b.prototype.bodiesOverlap = function(a, b) {
				for (var c = 0,
				d = a.shapes.length; c !== d; c++) {
					var f = a.shapes[c];
					a.toWorldFrame(na, a.shapeOffsets[c]);
					for (var h = 0,
					g = b.shapes.length; h !== g; h++) {
						var p = b.shapes[h];
						b.toWorldFrame(aa, b.shapeOffsets[h]);
						if (this[f.type | p.type](a, f, na, f.angle + a.angle, b, p, aa, p.angle + b.angle, !0)) return ! 0
					}
				}
				return ! 1
			};
			b.prototype.collidedLastStep = function(a, b) {
				return !! this.collidingBodiesLastStep.get(a.id | 0, b.id | 0)
			};
			b.prototype.reset = function() {
				this.collidingBodiesLastStep.reset();
				for (var a = this.contactEquations,
				b = a.length; b--;) {
					var c = a[b];
					this.collidingBodiesLastStep.set(c.bodyA.id, c.bodyB.id, !0)
				}
				this.reuseObjects && (a = this.frictionEquations, b = this.reusableFrictionEquations, n.appendArray(this.reusableContactEquations, this.contactEquations), n.appendArray(b, a));
				this.contactEquations.length = this.frictionEquations.length = 0
			};
			b.prototype.createContactEquation = function(a, b, c, d) {
				var f = this.reusableContactEquations.length ? this.reusableContactEquations.pop() : new l(a, b);
				f.bodyA = a;
				f.bodyB = b;
				f.shapeA = c;
				f.shapeB = d;
				f.restitution = this.restitution;
				f.firstImpact = !this.collidedLastStep(a, b);
				f.stiffness = this.stiffness;
				f.relaxation = this.relaxation;
				f.needsUpdate = !0;
				f.enabled = this.enabledEquations;
				f.offset = this.contactSkinSize;
				return f
			};
			b.prototype.createFrictionEquation = function(a, b, c, d) {
				var f = this.reusableFrictionEquations.length ? this.reusableFrictionEquations.pop() : new q(a, b);
				f.bodyA = a;
				f.bodyB = b;
				f.shapeA = c;
				f.shapeB = d;
				f.setSlipForce(this.slipForce);
				f.frictionCoefficient = this.frictionCoefficient;
				f.relativeVelocity = this.surfaceVelocity;
				f.enabled = this.enabledEquations;
				f.needsUpdate = !0;
				f.stiffness = this.frictionStiffness;
				f.relaxation = this.frictionRelaxation;
				f.contactEquations.length = 0;
				return f
			};
			b.prototype.createFrictionFromContact = function(a) {
				var b = this.createFrictionEquation(a.bodyA, a.bodyB, a.shapeA, a.shapeB);
				h.copy(b.contactPointA, a.contactPointA);
				h.copy(b.contactPointB, a.contactPointB);
				h.rotate90cw(b.t, a.normalA);
				b.contactEquations.push(a);
				return b
			};
			b.prototype.createFrictionFromAverage = function(a) {
				var b = this.contactEquations[this.contactEquations.length - 1],
				c = this.createFrictionEquation(b.bodyA, b.bodyB, b.shapeA, b.shapeB),
				d = b.bodyA;
				h.set(c.contactPointA, 0, 0);
				h.set(c.contactPointB, 0, 0);
				h.set(c.t, 0, 0);
				for (var f = 0; f !== a; f++) b = this.contactEquations[this.contactEquations.length - 1 - f],
				b.bodyA === d ? (h.add(c.t, c.t, b.normalA), h.add(c.contactPointA, c.contactPointA, b.contactPointA), h.add(c.contactPointB, c.contactPointB, b.contactPointB)) : (h.sub(c.t, c.t, b.normalA), h.add(c.contactPointA, c.contactPointA, b.contactPointB), h.add(c.contactPointB, c.contactPointB, b.contactPointA)),
				c.contactEquations.push(b);
				a = 1 / a;
				h.scale(c.contactPointA, c.contactPointA, a);
				h.scale(c.contactPointB, c.contactPointB, a);
				h.normalize(c.t, c.t);
				h.rotate90cw(c.t, c.t);
				return c
			};
			b.prototype[s.LINE | s.CONVEX] = b.prototype.convexLine = function(a, b, c, d, f, h, g, p, k) {
				return k ? !1 : 0
			};
			b.prototype[s.LINE | s.RECTANGLE] = b.prototype.lineRectangle = function(a, b, c, d, f, h, g, p, k) {
				return k ? !1 : 0
			};
			var K = new B(1, 1),
			I = h.create();
			b.prototype[s.CAPSULE | s.CONVEX] = b.prototype[s.CAPSULE | s.RECTANGLE] = b.prototype.convexCapsule = function(b, c, d, f, g, p, k, v, l) {
				h.set(I, p.length / 2, 0);
				h.rotate(I, I, v);
				h.add(I, I, k);
				var n = this.circleConvex(g, p, I, v, b, c, d, f, l, p.radius);
				h.set(I, -p.length / 2, 0);
				h.rotate(I, I, v);
				h.add(I, I, k);
				var m = this.circleConvex(g, p, I, v, b, c, d, f, l, p.radius);
				if (l && (n || m)) return ! 0;
				a(K, p);
				return this.convexConvex(b, c, d, f, g, K, k, v, l) + n + m
			};
			b.prototype[s.CAPSULE | s.LINE] = b.prototype.lineCapsule = function(a, b, c, d, f, h, g, p, k) {
				return k ? !1 : 0
			};
			var ba = h.create(),
			ca = h.create(),
			ia = new B(1, 1);
			b.prototype[s.CAPSULE | s.CAPSULE] = b.prototype.capsuleCapsule = function(b, c, d, f, g, p, k, v, l) {
				for (var n, m = 0,
				q = 0; 2 > q; q++) {
					h.set(ba, (0 === q ? -1 : 1) * c.length / 2, 0);
					h.rotate(ba, ba, f);
					h.add(ba, ba, d);
					for (var u = 0; 2 > u; u++) {
						h.set(ca, (0 === u ? -1 : 1) * p.length / 2, 0);
						h.rotate(ca, ca, v);
						h.add(ca, ca, k);
						this.enableFrictionReduction && (n = this.enableFriction, this.enableFriction = !1);
						var s = this.circleCircle(b, c, ba, f, g, p, ca, v, l, c.radius, p.radius);
						this.enableFrictionReduction && (this.enableFriction = n);
						if (l && s) return ! 0;
						m += s
					}
				}
				this.enableFrictionReduction && (n = this.enableFriction, this.enableFriction = !1);
				a(ia, c);
				q = this.convexCapsule(b, ia, d, f, g, p, k, v, l);
				this.enableFrictionReduction && (this.enableFriction = n);
				if (l && q) return ! 0;
				m += q;
				this.enableFrictionReduction && (n = this.enableFriction, this.enableFriction = !1);
				a(ia, p);
				b = this.convexCapsule(g, ia, k, v, b, c, d, f, l);
				this.enableFrictionReduction && (this.enableFriction = n);
				if (l && b) return ! 0;
				m += b;
				this.enableFrictionReduction && m && this.enableFriction && this.frictionEquations.push(this.createFrictionFromAverage(m));
				return m
			};
			b.prototype[s.LINE | s.LINE] = b.prototype.lineLine = function(a, b, c, d, f, h, g, p, k) {
				return k ? !1 : 0
			};
			b.prototype[s.PLANE | s.LINE] = b.prototype.planeLine = function(a, b, c, d, f, g, k, l, n) {
				var m = 0;
				h.set(r, -g.length / 2, 0);
				h.set(y, g.length / 2, 0);
				h.rotate(w, r, l);
				h.rotate(A, y, l);
				v(w, w, k);
				v(A, A, k);
				h.copy(r, w);
				h.copy(y, A);
				p(x, y, r);
				h.normalize(D, x);
				h.rotate90cw(E, D);
				h.rotate(F, z, d);
				O[0] = r;
				O[1] = y;
				for (d = 0; d < O.length; d++) {
					l = O[d];
					p(C, l, c);
					var q = u(C, F);
					if (0 > q) {
						if (n) return ! 0;
						var s = this.createContactEquation(a, f, b, g);
						m++;
						h.copy(s.normalA, F);
						h.normalize(s.normalA, s.normalA);
						h.scale(C, F, q);
						p(s.contactPointA, l, C);
						p(s.contactPointA, s.contactPointA, a.position);
						p(s.contactPointB, l, k);
						v(s.contactPointB, s.contactPointB, k);
						p(s.contactPointB, s.contactPointB, f.position);
						this.contactEquations.push(s);
						this.enableFrictionReduction || this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(s))
					}
				}
				if (n) return ! 1;
				this.enableFrictionReduction || m && this.enableFriction && this.frictionEquations.push(this.createFrictionFromAverage(m));
				return m
			};
			b.prototype[s.PARTICLE | s.CAPSULE] = b.prototype.particleCapsule = function(a, b, c, d, f, h, g, p, k) {
				return this.circleLine(a, b, c, d, f, h, g, p, k, h.radius, 0)
			};
			b.prototype[s.CIRCLE | s.LINE] = b.prototype.circleLine = function(a, b, c, d, f, g, k, l, n, m, q) {
				m = m || 0;
				q = "undefined" !== typeof q ? q: b.radius;
				h.set(F, -g.length / 2, 0);
				h.set(E, g.length / 2, 0);
				h.rotate(G, F, l);
				h.rotate(H, E, l);
				v(G, G, k);
				v(H, H, k);
				h.copy(F, G);
				h.copy(E, H);
				p(D, E, F);
				h.normalize(C, D);
				h.rotate90cw(x, C);
				p(L, c, F);
				l = u(L, x);
				p(A, F, k);
				p(J, c, k);
				d = q + m;
				if (Math.abs(l) < d) {
					h.scale(r, x, l);
					p(w, c, r);
					h.scale(y, x, u(x, J));
					h.normalize(y, y);
					h.scale(y, y, m);
					v(w, w, y);
					l = u(C, w);
					var s = u(C, F),
					t = u(C, E);
					if (l > s && l < t) {
						if (n) return ! 0;
						b = this.createContactEquation(a, f, b, g);
						h.scale(b.normalA, r, -1);
						h.normalize(b.normalA, b.normalA);
						h.scale(b.contactPointA, b.normalA, q);
						v(b.contactPointA, b.contactPointA, c);
						p(b.contactPointA, b.contactPointA, a.position);
						p(b.contactPointB, w, k);
						v(b.contactPointB, b.contactPointB, k);
						p(b.contactPointB, b.contactPointB, f.position);
						this.contactEquations.push(b);
						this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(b));
						return 1
					}
				}
				O[0] = F;
				O[1] = E;
				for (s = 0; s < O.length; s++) if (l = O[s], p(L, l, c), h.squaredLength(L) < Math.pow(d, 2)) {
					if (n) return ! 0;
					b = this.createContactEquation(a, f, b, g);
					h.copy(b.normalA, L);
					h.normalize(b.normalA, b.normalA);
					h.scale(b.contactPointA, b.normalA, q);
					v(b.contactPointA, b.contactPointA, c);
					p(b.contactPointA, b.contactPointA, a.position);
					p(b.contactPointB, l, k);
					h.scale(P, b.normalA, -m);
					v(b.contactPointB, b.contactPointB, P);
					v(b.contactPointB, b.contactPointB, k);
					p(b.contactPointB, b.contactPointB, f.position);
					this.contactEquations.push(b);
					this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(b));
					return 1
				}
				return 0
			};
			b.prototype[s.CIRCLE | s.CAPSULE] = b.prototype.circleCapsule = function(a, b, c, d, f, h, g, p, k) {
				return this.circleLine(a, b, c, d, f, h, g, p, k, h.radius)
			};
			b.prototype[s.CIRCLE | s.CONVEX] = b.prototype[s.CIRCLE | s.RECTANGLE] = b.prototype.circleConvex = function(a, b, d, f, g, k, l, n, m, q) {
				q = "number" === typeof q ? q: b.radius;
				f = !1;
				for (var s = Number.MAX_VALUE,
				u = k.vertices,
				t = 0; t !== u.length + 1; t++) {
					var B = u[(t + 1) % u.length];
					h.rotate(r, u[t % u.length], n);
					h.rotate(y, B, n);
					v(r, r, l);
					v(y, y, l);
					p(w, y, r);
					h.normalize(A, w);
					h.rotate90cw(x, A);
					h.scale(P, x, -b.radius);
					v(P, P, d);
					c(P, k, l, n) && (h.sub(M, r, P), B = Math.abs(h.dot(M, x)), B < s && (h.copy(T, P), s = B, h.scale(J, x, B), h.add(J, J, P), f = !0))
				}
				if (f) {
					if (m) return ! 0;
					b = this.createContactEquation(a, g, b, k);
					h.sub(b.normalA, T, d);
					h.normalize(b.normalA, b.normalA);
					h.scale(b.contactPointA, b.normalA, q);
					v(b.contactPointA, b.contactPointA, d);
					p(b.contactPointA, b.contactPointA, a.position);
					p(b.contactPointB, J, l);
					v(b.contactPointB, b.contactPointB, l);
					p(b.contactPointB, b.contactPointB, g.position);
					this.contactEquations.push(b);
					this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(b));
					return 1
				}
				if (0 < q) for (t = 0; t < u.length; t++) if (h.rotate(H, u[t], n), v(H, H, l), p(G, H, d), h.squaredLength(G) < Math.pow(q, 2)) {
					if (m) return ! 0;
					b = this.createContactEquation(a, g, b, k);
					h.copy(b.normalA, G);
					h.normalize(b.normalA, b.normalA);
					h.scale(b.contactPointA, b.normalA, q);
					v(b.contactPointA, b.contactPointA, d);
					p(b.contactPointA, b.contactPointA, a.position);
					p(b.contactPointB, H, l);
					v(b.contactPointB, b.contactPointB, l);
					p(b.contactPointB, b.contactPointB, g.position);
					this.contactEquations.push(b);
					this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(b));
					return 1
				}
				return 0
			};
			var X = h.create(),
			va = h.create(),
			wa = h.create(),
			xa = h.create();
			b.prototype[s.PARTICLE | s.CONVEX] = b.prototype[s.PARTICLE | s.RECTANGLE] = b.prototype.particleConvex = function(a, b, d, f, g, k, l, n, m) {
				f = Number.MAX_VALUE;
				var q = !1,
				s = k.vertices;
				if (!c(d, k, l, n)) return 0;
				if (m) return ! 0;
				for (m = 0; m !== s.length + 1; m++) {
					var t = s[(m + 1) % s.length];
					h.rotate(r, s[m % s.length], n);
					h.rotate(y, t, n);
					v(r, r, l);
					v(y, y, l);
					p(w, y, r);
					h.normalize(A, w);
					h.rotate90cw(x, A);
					p(G, d, r);
					u(G, x);
					p(D, r, l);
					p(C, d, l);
					h.sub(Q, r, d);
					t = Math.abs(h.dot(Q, x));
					t < f && (f = t, h.scale(J, x, t), h.add(J, J, d), h.copy(Y, x), q = !0)
				}
				return q ? (b = this.createContactEquation(a, g, b, k), h.scale(b.normalA, Y, -1), h.normalize(b.normalA, b.normalA), h.set(b.contactPointA, 0, 0), v(b.contactPointA, b.contactPointA, d), p(b.contactPointA, b.contactPointA, a.position), p(b.contactPointB, J, l), v(b.contactPointB, b.contactPointB, l), p(b.contactPointB, b.contactPointB, g.position), this.contactEquations.push(b), this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(b)), 1) : 0
			};
			b.prototype[s.CIRCLE] = b.prototype.circleCircle = function(a, b, c, d, f, g, k, l, n, m, q) {
				m = m || b.radius;
				q = q || g.radius;
				p(r, c, k);
				d = m + q;
				if (h.squaredLength(r) > Math.pow(d, 2)) return 0;
				if (n) return ! 0;
				b = this.createContactEquation(a, f, b, g);
				p(b.normalA, k, c);
				h.normalize(b.normalA, b.normalA);
				h.scale(b.contactPointA, b.normalA, m);
				h.scale(b.contactPointB, b.normalA, -q);
				v(b.contactPointA, b.contactPointA, c);
				p(b.contactPointA, b.contactPointA, a.position);
				v(b.contactPointB, b.contactPointB, k);
				p(b.contactPointB, b.contactPointB, f.position);
				this.contactEquations.push(b);
				this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(b));
				return 1
			};
			b.prototype[s.PLANE | s.CONVEX] = b.prototype[s.PLANE | s.RECTANGLE] = b.prototype.planeConvex = function(a, b, c, d, f, g, k, l, n) {
				var m = 0;
				h.rotate(y, z, d);
				for (d = 0; d !== g.vertices.length; d++) if (h.rotate(r, g.vertices[d], l), v(r, r, k), p(w, r, c), 0 >= u(w, y)) {
					if (n) return ! 0;
					m++;
					var q = this.createContactEquation(a, f, b, g);
					p(w, r, c);
					h.copy(q.normalA, y);
					var s = u(w, q.normalA);
					h.scale(w, q.normalA, s);
					p(q.contactPointB, r, f.position);
					p(q.contactPointA, r, w);
					p(q.contactPointA, q.contactPointA, a.position);
					this.contactEquations.push(q);
					this.enableFrictionReduction || this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(q))
				}
				this.enableFrictionReduction && this.enableFriction && m && this.frictionEquations.push(this.createFrictionFromAverage(m));
				return m
			};
			b.prototype[s.PARTICLE | s.PLANE] = b.prototype.particlePlane = function(a, b, c, d, f, g, k, l, n) {
				l = l || 0;
				p(r, c, k);
				h.rotate(y, z, l);
				d = u(r, y);
				if (0 < d) return 0;
				if (n) return ! 0;
				b = this.createContactEquation(f, a, g, b);
				h.copy(b.normalA, y);
				h.scale(r, b.normalA, d);
				p(b.contactPointA, c, r);
				p(b.contactPointA, b.contactPointA, f.position);
				p(b.contactPointB, c, a.position);
				this.contactEquations.push(b);
				this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(b));
				return 1
			};
			b.prototype[s.CIRCLE | s.PARTICLE] = b.prototype.circleParticle = function(a, b, c, d, f, g, k, l, n) {
				p(r, k, c);
				if (h.squaredLength(r) > Math.pow(b.radius, 2)) return 0;
				if (n) return ! 0;
				d = this.createContactEquation(a, f, b, g);
				h.copy(d.normalA, r);
				h.normalize(d.normalA, d.normalA);
				h.scale(d.contactPointA, d.normalA, b.radius);
				v(d.contactPointA, d.contactPointA, c);
				p(d.contactPointA, d.contactPointA, a.position);
				p(d.contactPointB, k, f.position);
				this.contactEquations.push(d);
				this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(d));
				return 1
			};
			var ma = new d(1),
			da = h.create(),
			ea = h.create();
			h.create();
			b.prototype[s.PLANE | s.CAPSULE] = b.prototype.planeCapsule = function(a, b, c, d, f, g, p, k, l) {
				h.set(da, -g.length / 2, 0);
				h.rotate(da, da, k);
				v(da, da, p);
				h.set(ea, g.length / 2, 0);
				h.rotate(ea, ea, k);
				v(ea, ea, p);
				ma.radius = g.radius;
				var n;
				this.enableFrictionReduction && (n = this.enableFriction, this.enableFriction = !1);
				g = this.circlePlane(f, ma, da, 0, a, b, c, d, l);
				a = this.circlePlane(f, ma, ea, 0, a, b, c, d, l);
				this.enableFrictionReduction && (this.enableFriction = n);
				if (l) return g || a;
				l = g + a;
				this.enableFrictionReduction && l && this.frictionEquations.push(this.createFrictionFromAverage(l));
				return l
			};
			b.prototype[s.CIRCLE | s.PLANE] = b.prototype.circlePlane = function(a, b, c, d, f, g, k, l, n) {
				d = l || 0;
				p(r, c, k);
				h.rotate(y, z, d);
				d = u(y, r);
				if (d > b.radius) return 0;
				if (n) return ! 0;
				g = this.createContactEquation(f, a, g, b);
				h.copy(g.normalA, y);
				h.scale(g.contactPointB, g.normalA, -b.radius);
				v(g.contactPointB, g.contactPointB, c);
				p(g.contactPointB, g.contactPointB, a.position);
				h.scale(w, g.normalA, d);
				p(g.contactPointA, r, w);
				v(g.contactPointA, g.contactPointA, k);
				p(g.contactPointA, g.contactPointA, f.position);
				this.contactEquations.push(g);
				this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(g));
				return 1
			};
			b.prototype[s.CONVEX] = b.prototype[s.CONVEX | s.RECTANGLE] = b.prototype[s.RECTANGLE] = b.prototype.convexConvex = function(a, c, d, f, g, k, l, n, m, q) {
				var s = 0;
				q = "number" === typeof q ? q: 0;
				if (!b.findSeparatingAxis(c, d, f, k, l, n, r)) return 0;
				p(F, l, d);
				0 < u(r, F) && h.scale(r, r, -1);
				var t = b.getClosestEdge(c, f, r, !0),
				B = b.getClosestEdge(k, n, r);
				if ( - 1 === t || -1 === B) return 0;
				for (var z = 0; 2 > z; z++) {
					var J = t,
					P = B,
					M = c,
					D = k,
					G = d,
					X = l,
					T = f,
					H = n,
					L = a,
					Y = g;
					if (0 === z) {
						var I;
						I = J;
						J = P;
						P = I;
						I = M;
						M = D;
						D = I;
						I = G;
						G = X;
						X = I;
						I = T;
						T = H;
						H = I;
						I = L;
						L = Y;
						Y = I
					}
					for (I = P; I < P + 2; I++) {
						h.rotate(y, D.vertices[(I + D.vertices.length) % D.vertices.length], H);
						v(y, y, X);
						for (var K = 0,
						O = J - 1; O < J + 2; O++) {
							var Q = M.vertices[(O + M.vertices.length) % M.vertices.length],
							aa = M.vertices[(O + 1 + M.vertices.length) % M.vertices.length];
							h.rotate(w, Q, T);
							h.rotate(A, aa, T);
							v(w, w, G);
							v(A, A, G);
							p(x, A, w);
							h.rotate90cw(E, x);
							h.normalize(E, E);
							p(F, y, w);
							Q = u(E, F); (O === J && Q <= q || O !== J && 0 >= Q) && K++
						}
						if (3 <= K) {
							if (m) return ! 0;
							K = this.createContactEquation(L, Y, M, D);
							s++;
							Q = M.vertices[J % M.vertices.length];
							aa = M.vertices[(J + 1) % M.vertices.length];
							h.rotate(w, Q, T);
							h.rotate(A, aa, T);
							v(w, w, G);
							v(A, A, G);
							p(x, A, w);
							h.rotate90cw(K.normalA, x);
							h.normalize(K.normalA, K.normalA);
							p(F, y, w);
							Q = u(K.normalA, F);
							h.scale(C, K.normalA, Q);
							p(K.contactPointA, y, G);
							p(K.contactPointA, K.contactPointA, C);
							v(K.contactPointA, K.contactPointA, G);
							p(K.contactPointA, K.contactPointA, L.position);
							p(K.contactPointB, y, X);
							v(K.contactPointB, K.contactPointB, X);
							p(K.contactPointB, K.contactPointB, Y.position);
							this.contactEquations.push(K);
							this.enableFrictionReduction || this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(K))
						}
					}
				}
				this.enableFrictionReduction && this.enableFriction && s && this.frictionEquations.push(this.createFrictionFromAverage(s));
				return s
			};
			var oa = h.fromValues(0, 0);
			b.projectConvexOntoAxis = function(a, b, c, d, f) {
				var g = null,
				p = null,
				k;
				h.rotate(oa, d, -c);
				for (c = 0; c < a.vertices.length; c++) {
					k = a.vertices[c];
					k = u(k, oa);
					if (null === g || k > g) g = k;
					if (null === p || k < p) p = k
				}
				p > g && (a = p, p = g, g = a);
				b = u(b, d);
				h.set(f, p + b, g + b)
			};
			var pa = h.fromValues(0, 0),
			qa = h.fromValues(0, 0),
			ra = h.fromValues(0, 0),
			N = h.fromValues(0, 0),
			V = h.fromValues(0, 0),
			W = h.fromValues(0, 0);
			b.findSeparatingAxis = function(a, c, d, f, g, k, l) {
				var n = null,
				v = !1,
				q = !1;
				if (a instanceof B && f instanceof B) for (var m = 0; 2 !== m; m++) {
					var s = a,
					u = d;
					1 === m && (u = k);
					for (var t = 0; 2 !== t; t++) {
						0 === t ? h.set(N, 0, 1) : 1 === t && h.set(N, 1, 0);
						0 !== u && h.rotate(N, N, u);
						b.projectConvexOntoAxis(a, c, d, N, V);
						b.projectConvexOntoAxis(f, g, k, N, W);
						var v = V,
						w = W;
						V[0] > W[0] && (w = V, v = W);
						w = w[0] - v[1];
						v = 0 >= w;
						if (null === n || w > n) h.copy(l, N),
						n = w,
						q = v
					}
				} else for (m = 0; 2 !== m; m++) for (s = a, u = d, 1 === m && (s = f, u = k), t = 0; t !== s.vertices.length; t++) if (h.rotate(qa, s.vertices[t], u), h.rotate(ra, s.vertices[(t + 1) % s.vertices.length], u), p(pa, ra, qa), h.rotate90cw(N, pa), h.normalize(N, N), b.projectConvexOntoAxis(a, c, d, N, V), b.projectConvexOntoAxis(f, g, k, N, W), v = V, w = W, V[0] > W[0] && (w = V, v = W), w = w[0] - v[1], v = 0 >= w, null === n || w > n) h.copy(l, N),
				n = w,
				q = v;
				return q
			};
			var ja = h.fromValues(0, 0),
			sa = h.fromValues(0, 0),
			ka = h.fromValues(0, 0);
			b.getClosestEdge = function(a, b, c, d) {
				h.rotate(ja, c, -b);
				d && h.scale(ja, ja, -1);
				b = -1;
				c = a.vertices.length;
				d = -1;
				for (var f = 0; f !== c; f++) {
					p(sa, a.vertices[(f + 1) % c], a.vertices[f % c]);
					h.rotate90cw(ka, sa);
					h.normalize(ka, ka);
					var g = u(ka, ja);
					if ( - 1 === b || g > d) b = f % c,
					d = g
				}
				return b
			};
			var Z = h.create(),
			$ = h.create(),
			R = h.create(),
			ha = h.create(),
			ta = h.create(),
			U = h.create(),
			ua = h.create();
			b.prototype[s.CIRCLE | s.HEIGHTFIELD] = b.prototype.circleHeightfield = function(a, b, c, d, f, g, k, l, n, m) {
				d = g.data;
				m = m || b.radius;
				l = g.elementWidth;
				var q = Math.floor((c[0] - m - k[0]) / l),
				s = Math.ceil((c[0] + m - k[0]) / l);
				0 > q && (q = 0);
				s >= d.length && (s = d.length - 1);
				for (var u = d[q], t = d[s], w = q; w < s; w++) d[w] < t && (t = d[w]),
				d[w] > u && (u = d[w]);
				if (c[1] - m > u) return n ? !1 : 0;
				u = !1;
				for (w = q; w < s; w++) if (h.set(R, w * l, d[w]), h.set(ha, (w + 1) * l, d[w + 1]), h.add(R, R, k), h.add(ha, ha, k), h.sub(U, ha, R), h.rotate(U, U, Math.PI / 2), h.normalize(U, U), h.scale(Z, U, -m), h.add(Z, Z, c), h.sub($, Z, R), u = h.dot($, U), Z[0] >= R[0] && Z[0] < ha[0] && 0 >= u) {
					if (n) return ! 0;
					h.scale($, U, -u);
					h.add(ta, Z, $);
					h.copy(ua, U);
					t = this.createContactEquation(f, a, g, b);
					h.copy(t.normalA, ua);
					h.scale(t.contactPointB, t.normalA, -m);
					v(t.contactPointB, t.contactPointB, c);
					p(t.contactPointB, t.contactPointB, a.position);
					h.copy(t.contactPointA, ta);
					h.sub(t.contactPointA, t.contactPointA, f.position);
					this.contactEquations.push(t);
					this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(t))
				}
				u = !1;
				if (0 < m) for (w = q; w <= s; w++) if (h.set(R, w * l, d[w]), h.add(R, R, k), h.sub($, c, R), h.squaredLength($) < Math.pow(m, 2)) {
					if (n) return ! 0;
					u = !0;
					t = this.createContactEquation(f, a, g, b);
					h.copy(t.normalA, $);
					h.normalize(t.normalA, t.normalA);
					h.scale(t.contactPointB, t.normalA, -m);
					v(t.contactPointB, t.contactPointB, c);
					p(t.contactPointB, t.contactPointB, a.position);
					p(t.contactPointA, R, k);
					v(t.contactPointA, t.contactPointA, k);
					p(t.contactPointA, t.contactPointA, f.position);
					this.contactEquations.push(t);
					this.enableFriction && this.frictionEquations.push(this.createFrictionFromContact(t))
				}
				return u ? 1 : 0
			};
			var fa = h.create(),
			ga = h.create(),
			la = h.create(),
			S = new t([h.create(), h.create(), h.create(), h.create()]);
			b.prototype[s.RECTANGLE | s.HEIGHTFIELD] = b.prototype[s.CONVEX | s.HEIGHTFIELD] = b.prototype.convexHeightfield = function(a, b, c, d, f, g, p, k, l) {
				k = g.data;
				g = g.elementWidth;
				var n = Math.floor((a.aabb.lowerBound[0] - p[0]) / g),
				v = Math.ceil((a.aabb.upperBound[0] - p[0]) / g);
				0 > n && (n = 0);
				v >= k.length && (v = k.length - 1);
				for (var m = k[n], q = k[v], t = n; t < v; t++) k[t] < q && (q = k[t]),
				k[t] > m && (m = k[t]);
				if (a.aabb.lowerBound[1] > m) return l ? !1 : 0;
				m = 0;
				for (t = n; t < v; t++) h.set(fa, t * g, k[t]),
				h.set(ga, (t + 1) * g, k[t + 1]),
				h.add(fa, fa, p),
				h.add(ga, ga, p),
				h.set(la, 0.5 * (ga[0] + fa[0]), 0.5 * (ga[1] + fa[1] - 100)),
				h.sub(S.vertices[0], ga, la),
				h.sub(S.vertices[1], fa, la),
				h.copy(S.vertices[2], S.vertices[1]),
				h.copy(S.vertices[3], S.vertices[0]),
				S.vertices[2][1] -= 100,
				S.vertices[3][1] -= 100,
				m += this.convexConvex(a, b, c, d, f, S, la, 0, l);
				return m
			}
		},
		{
			"../equations/ContactEquation": 22,
			"../equations/Equation": 23,
			"../equations/FrictionEquation": 24,
			"../math/vec2": 31,
			"../objects/Body": 32,
			"../shapes/Circle": 38,
			"../shapes/Convex": 39,
			"../shapes/Rectangle": 44,
			"../shapes/Shape": 45,
			"../utils/TupleDictionary": 49,
			"../utils/Utils": 50
		}],
		12 : [function(f, g, d) {
			function b(d) {
				d = d || {};
				this.from = d.from ? a.fromValues(d.from[0], d.from[1]) : a.create();
				this.to = d.to ? a.fromValues(d.to[0], d.to[1]) : a.create();
				this._direction = a.create();
				this.precision = 1E-4;
				this.checkCollisionResponse = !0;
				this.skipBackfaces = !1;
				this.collisionGroup = this.collisionMask = -1;
				this.mode = b.ANY;
				this.result = new c;
				this.hasHit = !1;
				this.callback = function(a) {}
			}
			g.exports = b;
			var a = f("../math/vec2"),
			c = f("../collision/RaycastResult");
			g = f("../shapes/Shape");
			f = f("../collision/AABB");
			b.prototype.constructor = b;
			b.CLOSEST = 1;
			b.ANY = 2;
			b.ALL = 4;
			var h = new f,
			p = [];
			b.prototype.intersectWorld = function(d, f) {
				this.mode = f.mode || b.ANY;
				this.result = f.result || new c;
				this.skipBackfaces = !!f.skipBackfaces;
				this.collisionMask = "undefined" !== typeof f.collisionMask ? f.collisionMask: -1;
				this.collisionGroup = "undefined" !== typeof f.collisionGroup ? f.collisionGroup: -1;
				f.from && a.copy(this.from, f.from);
				f.to && a.copy(this.to, f.to);
				this.callback = f.callback ||
				function() {};
				this.hasHit = !1;
				this.result.reset();
				this._updateDirection();
				this.getAABB(h);
				p.length = 0;
				d.broadphase.aabbQuery(d, h, p);
				this.intersectBodies(p);
				return this.hasHit
			};
			a.create();
			a.create();
			var v = a.create();
			b.prototype.intersectBody = function(b, c) {
				c && (this.result = c, this._updateDirection());
				var d = this.checkCollisionResponse;
				if (!d || b.collisionResponse) {
					if (1 == b.shapes.length) {
						var f = b.shapes[0];
						if (0 === (this.collisionGroup & f.collisionMask) || 0 === (f.collisionGroup & this.collisionMask)) return
					}
					for (var f = 0,
					h = b.shapes.length; f < h; f++) {
						var g = b.shapes[f];
						if (!d || g.collisionResponse) if (a.copy(v, b.shapeOffsets[f]), a.rotate(v, v, b.angle), a.add(v, v, b.position), this.intersectShape(g, b.shapeAngles[f] + b.angle, v, b), this.result._shouldStop) break
					}
				}
			};
			b.prototype.intersectBodies = function(a, b) {
				b && (this.result = b, this._updateDirection());
				for (var c = 0,
				d = a.length; ! this.result._shouldStop && c < d; c++) this.intersectBody(a[c])
			};
			b.prototype._updateDirection = function() {
				var b = this._direction;
				a.sub(b, this.to, this.from);
				a.normalize(b, b)
			};
			b.prototype.intersectShape = function(b, c, d, f) {
				var h = this.from,
				g = this._direction;
				a.sub(x, d, h);
				var p = a.dot(x, g);
				a.scale(D, g, p);
				a.add(D, D, h);
				a.distance(d, D) > b.boundingSphereRadius || (h = this[b.type]) && h.call(this, b, c, d, f)
			};
			a.create();
			a.create();
			a.create();
			a.create();
			a.create();
			a.create();
			a.create();
			new c;
			var u = a.create(),
			n = a.create(),
			k = a.create(),
			m = a.create(),
			l = a.create(),
			q = a.create(),
			t = a.create();
			b.prototype.intersectRectangle = function(b, c, d, f) {
				d = -Number.MAX_VALUE;
				var h = Number.MAX_VALUE;
				a.set(q, 0.5 * -b.width, 0.5 * -b.height);
				a.set(t, 0.5 * b.width, 0.5 * b.height);
				a.rotate(u, this._direction, -c);
				f.toLocalFrame(n, this.from);
				if (0 !== u[0]) {
					var g = (q[0] - n[0]) / u[0],
					p = (t[0] - n[0]) / u[0],
					v = d;
					d = Math.max(d, Math.min(g, p));
					d !== v && a.set(k, g > p ? 1 : -1, 0);
					v = h;
					h = Math.min(h, Math.max(g, p));
					h !== v && a.set(m, g < p ? 1 : -1, 0)
				}
				0 !== u[1] && (g = (q[1] - n[1]) / u[1], p = (t[1] - n[1]) / u[1], v = d, d = Math.max(d, Math.min(g, p)), d !== v && a.set(k, 0, g > p ? 1 : -1), v = h, h = Math.min(h, Math.max(g, p)), h !== v && a.set(m, 0, g < p ? 1 : -1));
				h >= d && (a.set(l, n[0] + u[0] * d, n[1] + u[1] * d), a.rotate(k, k, c), f.toWorldFrame(l, l), this.reportIntersection(k, l, b, f, -1), this._shouldStop || (a.rotate(m, m, c), a.set(l, n[0] + u[0] * h, n[1] + u[1] * h), f.toWorldFrame(l, l), this.reportIntersection(m, l, b, f, -1)))
			};
			b.prototype[g.RECTANGLE] = b.prototype.intersectRectangle;
			var s = a.create(),
			B = a.create(),
			z = a.create(),
			r = a.create(),
			y = a.create();
			b.prototype.intersectPlane = function(b, c, d, f) {
				var h = this.from,
				g = this.to,
				p = this._direction;
				a.set(r, 0, 1);
				a.rotate(r, r, c);
				a.sub(y, h, d);
				c = a.dot(y, r);
				a.sub(y, g, d);
				var k = a.dot(y, r);
				0 < c * k || a.distance(h, g) < c || (g = a.dot(r, p), a.sub(s, h, d), d = -a.dot(r, s) / g, a.scale(B, p, d), a.add(z, h, B), this.reportIntersection(r, z, b, f, -1))
			};
			b.prototype[g.PLANE] = b.prototype.intersectPlane;
			var w = a.create(),
			A = a.create();
			b.prototype.intersectCircle = function(b, c, d, f) {
				c = this.from;
				var h = this.to,
				g = b.radius,
				p = Math.pow(h[0] - c[0], 2) + Math.pow(h[1] - c[1], 2),
				k = 2 * ((h[0] - c[0]) * (c[0] - d[0]) + (h[1] - c[1]) * (c[1] - d[1])),
				g = Math.pow(c[0] - d[0], 2) + Math.pow(c[1] - d[1], 2) - Math.pow(g, 2),
				l = Math.pow(k, 2) - 4 * p * g;
				0 > l || (0 === l ? (a.lerp(w, c, h, l), a.sub(A, w, d), a.normalize(A, A), this.reportIntersection(A, w, b, f, -1)) : (g = ( - k - Math.sqrt(l)) / (2 * p), p = ( - k + Math.sqrt(l)) / (2 * p), a.lerp(w, c, h, g), a.sub(A, w, d), a.normalize(A, A), this.reportIntersection(A, w, b, f, -1), this.result._shouldStop || (a.lerp(w, c, h, p), a.sub(A, w, d), a.normalize(A, A), this.reportIntersection(A, w, b, f, -1))))
			};
			b.prototype[g.CIRCLE] = b.prototype.intersectCircle;
			b.prototype.getAABB = function(a) {
				var b = this.to,
				c = this.from;
				a.lowerBound[0] = Math.min(b[0], c[0]);
				a.lowerBound[1] = Math.min(b[1], c[1]);
				a.upperBound[0] = Math.max(b[0], c[0]);
				a.upperBound[1] = Math.max(b[1], c[1])
			};
			b.prototype.reportIntersection = function(c, d, f, h, g) {
				var p = this.from,
				k = this.to,
				l = a.distance(p, d),
				n = this.result;
				if (! (this.skipBackfaces && 0 < a.dot(c, this._direction))) switch (n.hitFaceIndex = "undefined" !== typeof g ? g: -1, this.mode) {
				case b.ALL:
					this.hasHit = !0;
					n.set(p, k, c, d, f, h, l);
					n.hasHit = !0;
					this.callback(n);
					break;
				case b.CLOSEST:
					if (l < n.distance || !n.hasHit) this.hasHit = !0,
					n.hasHit = !0,
					n.set(p, k, c, d, f, h, l);
					break;
				case b.ANY:
					this.hasHit = !0,
					n.hasHit = !0,
					n.set(p, k, c, d, f, h, l),
					n._shouldStop = !0
				}
			};
			var x = a.create(),
			D = a.create()
		},
		{
			"../collision/AABB": 7,
			"../collision/RaycastResult": 13,
			"../math/vec2": 31,
			"../shapes/Shape": 45
		}],
		13 : [function(f, g, d) {
			function b() {
				this.rayFromWorld = a.create();
				this.rayToWorld = a.create();
				this.hitNormalWorld = a.create();
				this.hitPointWorld = a.create();
				this.hasHit = !1;
				this.body = this.shape = null;
				this.distance = this.hitFaceIndex = -1;
				this._shouldStop = !1
			}
			var a = f("../math/vec2");
			g.exports = b;
			b.prototype.reset = function() {
				a.set(this.rayFromWorld, 0, 0);
				a.set(this.rayToWorld, 0, 0);
				a.set(this.hitNormalWorld, 0, 0);
				a.set(this.hitPointWorld, 0, 0);
				this.hasHit = !1;
				this.body = this.shape = null;
				this.distance = this.hitFaceIndex = -1;
				this._shouldStop = !1
			};
			b.prototype.abort = function() {
				this._shouldStop = !0
			};
			b.prototype.set = function(b, d, f, g, u, n, k) {
				a.copy(this.rayFromWorld, b);
				a.copy(this.rayToWorld, d);
				a.copy(this.hitNormalWorld, f);
				a.copy(this.hitPointWorld, g);
				this.shape = u;
				this.body = n;
				this.distance = k
			}
		},
		{
			"../math/vec2": 31
		}],
		14 : [function(f, g, d) {
			function b() {
				c.call(this, c.SAP);
				this.axisList = [];
				this.axisIndex = 0;
				var a = this;
				this._addBodyHandler = function(b) {
					a.axisList.push(b.body)
				};
				this._removeBodyHandler = function(b) {
					b = a.axisList.indexOf(b.body); - 1 !== b && a.axisList.splice(b, 1)
				}
			}
			var a = f("../utils/Utils"),
			c = f("../collision/Broadphase");
			g.exports = b;
			b.prototype = new c;
			b.prototype.constructor = b;
			b.prototype.setWorld = function(b) {
				this.axisList.length = 0;
				a.appendArray(this.axisList, b.bodies);
				b.off("addBody", this._addBodyHandler).off("removeBody", this._removeBodyHandler);
				b.on("addBody", this._addBodyHandler).on("removeBody", this._removeBodyHandler);
				this.world = b
			};
			b.sortAxisList = function(a, b) {
				b |= 0;
				for (var c = 1,
				d = a.length; c < d; c++) {
					for (var f = a[c], g = c - 1; 0 <= g && !(a[g].aabb.lowerBound[b] <= f.aabb.lowerBound[b]); g--) a[g + 1] = a[g];
					a[g + 1] = f
				}
				return a
			};
			b.prototype.sortList = function() {
				b.sortAxisList(this.axisList, this.axisIndex)
			};
			b.prototype.getCollisionPairs = function(a) {
				a = this.axisList;
				var b = this.result,
				d = this.axisIndex;
				b.length = 0;
				for (var f = a.length; f--;) {
					var g = a[f];
					g.aabbNeedsUpdate && g.updateAABB()
				}
				this.sortList();
				f = 0;
				for (g = a.length | 0; f !== g; f++) for (var k = a[f], m = f + 1; m < g; m++) {
					var l = a[m];
					if (! (l.aabb.lowerBound[d] <= k.aabb.upperBound[d])) break;
					c.canCollide(k, l) && this.boundingVolumeCheck(k, l) && b.push(k, l)
				}
				return b
			};
			b.prototype.aabbQuery = function(a, b, c) {
				c = c || [];
				this.sortList();
				a = this.axisList;
				for (var d = 0; d < a.length; d++) {
					var f = a[d];
					f.aabbNeedsUpdate && f.updateAABB();
					f.aabb.overlaps(b) && c.push(f)
				}
				return c
			}
		},
		{
			"../collision/Broadphase": 8,
			"../utils/Utils": 50
		}],
		15 : [function(f, g, d) {
			function b(b, d, f, g) {
				this.type = f;
				g = a.defaults(g, {
					collideConnected: !0,
					wakeUpBodies: !0
				});
				this.equations = [];
				this.bodyA = b;
				this.bodyB = d;
				this.collideConnected = g.collideConnected;
				g.wakeUpBodies && (b && b.wakeUp(), d && d.wakeUp())
			}
			g.exports = b;
			var a = f("../utils/Utils");
			b.prototype.update = function() {
				throw Error("method update() not implmemented in this Constraint subclass!");
			};
			b.DISTANCE = 1;
			b.GEAR = 2;
			b.LOCK = 3;
			b.PRISMATIC = 4;
			b.REVOLUTE = 5;
			b.prototype.setStiffness = function(a) {
				for (var b = this.equations,
				d = 0; d !== b.length; d++) {
					var f = b[d];
					f.stiffness = a;
					f.needsUpdate = !0
				}
			};
			b.prototype.setRelaxation = function(a) {
				for (var b = this.equations,
				d = 0; d !== b.length; d++) {
					var f = b[d];
					f.relaxation = a;
					f.needsUpdate = !0
				}
			}
		},
		{
			"../utils/Utils": 50
		}],
		16 : [function(f, g, d) {
			function b(b, d, f) {
				f = p.defaults(f, {
					localAnchorA: [0, 0],
					localAnchorB: [0, 0]
				});
				a.call(this, b, d, a.DISTANCE, f);
				this.localAnchorA = h.fromValues(f.localAnchorA[0], f.localAnchorA[1]);
				this.localAnchorB = h.fromValues(f.localAnchorB[0], f.localAnchorB[1]);
				var g = this.localAnchorA,
				n = this.localAnchorB;
				this.distance = 0;
				if ("number" === typeof f.distance) this.distance = f.distance;
				else {
					var v = h.create(),
					u = h.create(),
					z = h.create();
					h.rotate(v, g, b.angle);
					h.rotate(u, n, d.angle);
					h.add(z, d.position, u);
					h.sub(z, z, v);
					h.sub(z, z, b.position);
					this.distance = h.length(z)
				}
				f = "undefined" === typeof f.maxForce ? Number.MAX_VALUE: f.maxForce;
				b = new c(b, d, -f, f);
				this.equations = [b];
				this.maxForce = f;
				var z = h.create(),
				r = h.create(),
				y = h.create(),
				w = this;
				b.computeGq = function() {
					var a = this.bodyA,
					b = this.bodyB,
					c = a.position,
					d = b.position;
					h.rotate(r, g, a.angle);
					h.rotate(y, n, b.angle);
					h.add(z, d, y);
					h.sub(z, z, r);
					h.sub(z, z, c);
					return h.length(z) - w.distance
				};
				this.setMaxForce(f);
				this.upperLimitEnabled = !1;
				this.upperLimit = 1;
				this.lowerLimitEnabled = !1;
				this.position = this.lowerLimit = 0
			}
			var a = f("./Constraint"),
			c = f("../equations/Equation"),
			h = f("../math/vec2"),
			p = f("../utils/Utils");
			g.exports = b;
			b.prototype = new a;
			b.prototype.constructor = b;
			var v = h.create(),
			u = h.create(),
			n = h.create();
			b.prototype.update = function() {
				var a = this.bodyA,
				b = this.bodyB,
				c = a.position,
				d = b.position,
				f = this.equations[0],
				g = this.equations[0].G;
				h.rotate(u, this.localAnchorA, a.angle);
				h.rotate(n, this.localAnchorB, b.angle);
				h.add(v, d, n);
				h.sub(v, v, u);
				h.sub(v, v, c);
				this.position = h.length(v);
				a = !1;
				this.upperLimitEnabled && this.position > this.upperLimit && (f.maxForce = 0, f.minForce = -this.maxForce, this.distance = this.upperLimit, a = !0);
				this.lowerLimitEnabled && this.position < this.lowerLimit && (f.maxForce = this.maxForce, f.minForce = 0, this.distance = this.lowerLimit, a = !0); ! this.lowerLimitEnabled && !this.upperLimitEnabled || a ? (f.enabled = !0, h.normalize(v, v), f = h.crossLength(u, v), a = h.crossLength(n, v), g[0] = -v[0], g[1] = -v[1], g[2] = -f, g[3] = v[0], g[4] = v[1], g[5] = a) : f.enabled = !1
			};
			b.prototype.setMaxForce = function(a) {
				var b = this.equations[0];
				b.minForce = -a;
				b.maxForce = a
			};
			b.prototype.getMaxForce = function(a) {
				return this.equations[0].maxForce
			}
		},
		{
			"../equations/Equation": 23,
			"../math/vec2": 31,
			"../utils/Utils": 50,
			"./Constraint": 15
		}],
		17 : [function(f, g, d) {
			function b(b, d, f) {
				f = f || {};
				a.call(this, b, d, a.GEAR, f);
				this.ratio = "number" === typeof f.ratio ? f.ratio: 1;
				this.angle = "number" === typeof f.angle ? f.angle: d.angle - this.ratio * b.angle;
				f.angle = this.angle;
				f.ratio = this.ratio;
				this.equations = [new c(b, d, f)];
				"number" === typeof f.maxTorque && this.setMaxTorque(f.maxTorque)
			}
			var a = f("./Constraint");
			f("../equations/Equation");
			var c = f("../equations/AngleLockEquation");
			f("../math/vec2");
			g.exports = b;
			b.prototype = new a;
			b.prototype.constructor = b;
			b.prototype.update = function() {
				var a = this.equations[0];
				a.ratio !== this.ratio && a.setRatio(this.ratio);
				a.angle = this.angle
			};
			b.prototype.setMaxTorque = function(a) {
				this.equations[0].setMaxTorque(a)
			};
			b.prototype.getMaxTorque = function(a) {
				return this.equations[0].maxForce
			}
		},
		{
			"../equations/AngleLockEquation": 21,
			"../equations/Equation": 23,
			"../math/vec2": 31,
			"./Constraint": 15
		}],
		18 : [function(f, g, d) {
			function b(b, d, f) {
				f = f || {};
				a.call(this, b, d, a.LOCK, f);
				var g = "undefined" === typeof f.maxForce ? Number.MAX_VALUE: f.maxForce,
				p = new h(b, d, -g, g),
				k = new h(b, d, -g, g),
				n = new h(b, d, -g, g),
				v = c.create(),
				u = c.create(),
				w = this;
				p.computeGq = function() {
					c.rotate(v, w.localOffsetB, b.angle);
					c.sub(u, d.position, b.position);
					c.sub(u, u, v);
					return u[0]
				};
				k.computeGq = function() {
					c.rotate(v, w.localOffsetB, b.angle);
					c.sub(u, d.position, b.position);
					c.sub(u, u, v);
					return u[1]
				};
				var A = c.create(),
				x = c.create();
				n.computeGq = function() {
					c.rotate(A, w.localOffsetB, d.angle - w.localAngleB);
					c.scale(A, A, -1);
					c.sub(u, b.position, d.position);
					c.add(u, u, A);
					c.rotate(x, A, -Math.PI / 2);
					c.normalize(x, x);
					return c.dot(u, x)
				};
				this.localOffsetB = c.create();
				f.localOffsetB ? c.copy(this.localOffsetB, f.localOffsetB) : (c.sub(this.localOffsetB, d.position, b.position), c.rotate(this.localOffsetB, this.localOffsetB, -b.angle));
				this.localAngleB = 0;
				this.localAngleB = "number" === typeof f.localAngleB ? f.localAngleB: d.angle - b.angle;
				this.equations.push(p, k, n);
				this.setMaxForce(g)
			}
			var a = f("./Constraint"),
			c = f("../math/vec2"),
			h = f("../equations/Equation");
			g.exports = b;
			b.prototype = new a;
			b.prototype.constructor = b;
			b.prototype.setMaxForce = function(a) {
				for (var b = this.equations,
				c = 0; c < this.equations.length; c++) b[c].maxForce = a,
				b[c].minForce = -a
			};
			b.prototype.getMaxForce = function() {
				return this.equations[0].maxForce
			};
			var p = c.create(),
			v = c.create(),
			u = c.create(),
			n = c.fromValues(1, 0),
			k = c.fromValues(0, 1);
			b.prototype.update = function() {
				var a = this.equations[0],
				b = this.equations[1],
				d = this.equations[2],
				f = this.bodyB;
				c.rotate(p, this.localOffsetB, this.bodyA.angle);
				c.rotate(v, this.localOffsetB, f.angle - this.localAngleB);
				c.scale(v, v, -1);
				c.rotate(u, v, Math.PI / 2);
				c.normalize(u, u);
				a.G[0] = -1;
				a.G[1] = 0;
				a.G[2] = -c.crossLength(p, n);
				a.G[3] = 1;
				b.G[0] = 0;
				b.G[1] = -1;
				b.G[2] = -c.crossLength(p, k);
				b.G[4] = 1;
				d.G[0] = -u[0];
				d.G[1] = -u[1];
				d.G[3] = u[0];
				d.G[4] = u[1];
				d.G[5] = c.crossLength(v, u)
			}
		},
		{
			"../equations/Equation": 23,
			"../math/vec2": 31,
			"./Constraint": 15
		}],
		19 : [function(f, g, d) {
			function b(b, d, f) {
				f = f || {};
				a.call(this, b, d, a.PRISMATIC, f);
				var g = p.fromValues(0, 0),
				k = p.fromValues(1, 0),
				l = p.fromValues(0, 0);
				f.localAnchorA && p.copy(g, f.localAnchorA);
				f.localAxisA && p.copy(k, f.localAxisA);
				f.localAnchorB && p.copy(l, f.localAnchorB);
				this.localAnchorA = g;
				this.localAnchorB = l;
				this.localAxisA = k;
				var n = this.maxForce = "undefined" !== typeof f.maxForce ? f.maxForce: Number.MAX_VALUE,
				m = new h(b, d, -n, n),
				q = new p.create,
				u = new p.create,
				C = new p.create,
				F = new p.create;
				m.computeGq = function() {
					return p.dot(C, F)
				};
				m.updateJacobian = function() {
					var a = this.G,
					c = b.position,
					f = d.position;
					p.rotate(q, g, b.angle);
					p.rotate(u, l, d.angle);
					p.add(C, f, u);
					p.sub(C, C, c);
					p.sub(C, C, q);
					p.rotate(F, k, b.angle + Math.PI / 2);
					a[0] = -F[0];
					a[1] = -F[1];
					a[2] = -p.crossLength(q, F) + p.crossLength(F, C);
					a[3] = F[0];
					a[4] = F[1];
					a[5] = p.crossLength(u, F)
				};
				this.equations.push(m);
				f.disableRotationalLock || (m = new v(b, d, -n, n), this.equations.push(m));
				this.velocity = this.position = 0;
				this.lowerLimitEnabled = "undefined" !== typeof f.lowerLimit ? !0 : !1;
				this.upperLimitEnabled = "undefined" !== typeof f.upperLimit ? !0 : !1;
				this.lowerLimit = "undefined" !== typeof f.lowerLimit ? f.lowerLimit: 0;
				this.upperLimit = "undefined" !== typeof f.upperLimit ? f.upperLimit: 1;
				this.upperLimitEquation = new c(b, d);
				this.lowerLimitEquation = new c(b, d);
				this.upperLimitEquation.minForce = this.lowerLimitEquation.minForce = 0;
				this.upperLimitEquation.maxForce = this.lowerLimitEquation.maxForce = n;
				this.motorEquation = new h(b, d);
				this.motorEnabled = !1;
				this.motorSpeed = 0;
				var E = this;
				f = this.motorEquation;
				f.computeGq = function() {
					return 0
				};
				f.computeGW = function() {
					var a = this.bodyA,
					b = this.bodyB;
					return this.gmult(this.G, a.velocity, a.angularVelocity, b.velocity, b.angularVelocity) + E.motorSpeed
				}
			}
			var a = f("./Constraint"),
			c = f("../equations/ContactEquation"),
			h = f("../equations/Equation"),
			p = f("../math/vec2"),
			v = f("../equations/RotationalLockEquation");
			g.exports = b;
			b.prototype = new a;
			b.prototype.constructor = b;
			var u = p.create(),
			n = p.create(),
			k = p.create(),
			m = p.create(),
			l = p.create(),
			q = p.create();
			b.prototype.update = function() {
				var a = this.equations,
				b = this.upperLimit,
				c = this.lowerLimit,
				d = this.upperLimitEquation,
				f = this.lowerLimitEquation,
				g = this.bodyA,
				h = this.bodyB,
				v = this.localAxisA,
				x = this.localAnchorA,
				D = this.localAnchorB;
				a[0].updateJacobian();
				p.rotate(u, v, g.angle);
				p.rotate(m, x, g.angle);
				p.add(n, m, g.position);
				p.rotate(l, D, h.angle);
				p.add(k, l, h.position);
				v = this.position = p.dot(k, u) - p.dot(n, u);
				this.motorEnabled && (x = this.motorEquation.G, x[0] = u[0], x[1] = u[1], x[2] = p.crossLength(u, l), x[3] = -u[0], x[4] = -u[1], x[5] = -p.crossLength(u, m));
				this.upperLimitEnabled && v > b ? (p.scale(d.normalA, u, -1), p.sub(d.contactPointA, n, g.position), p.sub(d.contactPointB, k, h.position), p.scale(q, u, b), p.add(d.contactPointA, d.contactPointA, q), -1 === a.indexOf(d) && a.push(d)) : (b = a.indexOf(d), -1 !== b && a.splice(b, 1));
				this.lowerLimitEnabled && v < c ? (p.scale(f.normalA, u, 1), p.sub(f.contactPointA, n, g.position), p.sub(f.contactPointB, k, h.position), p.scale(q, u, c), p.sub(f.contactPointB, f.contactPointB, q), -1 === a.indexOf(f) && a.push(f)) : (b = a.indexOf(f), -1 !== b && a.splice(b, 1))
			};
			b.prototype.enableMotor = function() {
				this.motorEnabled || (this.equations.push(this.motorEquation), this.motorEnabled = !0)
			};
			b.prototype.disableMotor = function() {
				if (this.motorEnabled) {
					var a = this.equations.indexOf(this.motorEquation);
					this.equations.splice(a, 1);
					this.motorEnabled = !1
				}
			};
			b.prototype.setLimits = function(a, b) {
				"number" === typeof a ? (this.lowerLimit = a, this.lowerLimitEnabled = !0) : (this.lowerLimit = a, this.lowerLimitEnabled = !1);
				"number" === typeof b ? (this.upperLimit = b, this.upperLimitEnabled = !0) : (this.upperLimit = b, this.upperLimitEnabled = !1)
			}
		},
		{
			"../equations/ContactEquation": 22,
			"../equations/Equation": 23,
			"../equations/RotationalLockEquation": 25,
			"../math/vec2": 31,
			"./Constraint": 15
		}],
		20 : [function(f, g, d) {
			function b(b, d, f) {
				f = f || {};
				a.call(this, b, d, a.REVOLUTE, f);
				var g = this.maxForce = "undefined" !== typeof f.maxForce ? f.maxForce: Number.MAX_VALUE;
				this.pivotA = v.create();
				this.pivotB = v.create();
				f.worldPivot ? (v.sub(this.pivotA, f.worldPivot, b.position), v.sub(this.pivotB, f.worldPivot, d.position), v.rotate(this.pivotA, this.pivotA, -b.angle), v.rotate(this.pivotB, this.pivotB, -d.angle)) : (v.copy(this.pivotA, f.localPivotA), v.copy(this.pivotB, f.localPivotB));
				var z = this.equations = [new c(b, d, -g, g), new c(b, d, -g, g)];
				f = z[0];
				var z = z[1],
				r = this;
				f.computeGq = function() {
					v.rotate(u, r.pivotA, b.angle);
					v.rotate(n, r.pivotB, d.angle);
					v.add(l, d.position, n);
					v.sub(l, l, b.position);
					v.sub(l, l, u);
					return v.dot(l, k)
				};
				z.computeGq = function() {
					v.rotate(u, r.pivotA, b.angle);
					v.rotate(n, r.pivotB, d.angle);
					v.add(l, d.position, n);
					v.sub(l, l, b.position);
					v.sub(l, l, u);
					return v.dot(l, m)
				};
				z.minForce = f.minForce = -g;
				z.maxForce = f.maxForce = g;
				this.motorEquation = new h(b, d);
				this.motorEnabled = !1;
				this.angle = 0;
				this.upperLimitEnabled = this.lowerLimitEnabled = !1;
				this.upperLimit = this.lowerLimit = 0;
				this.upperLimitEquation = new p(b, d);
				this.lowerLimitEquation = new p(b, d);
				this.upperLimitEquation.minForce = 0;
				this.lowerLimitEquation.maxForce = 0
			}
			var a = f("./Constraint"),
			c = f("../equations/Equation"),
			h = f("../equations/RotationalVelocityEquation"),
			p = f("../equations/RotationalLockEquation"),
			v = f("../math/vec2");
			g.exports = b;
			var u = v.create(),
			n = v.create(),
			k = v.fromValues(1, 0),
			m = v.fromValues(0, 1),
			l = v.create();
			b.prototype = new a;
			b.prototype.constructor = b;
			b.prototype.setLimits = function(a, b) {
				"number" === typeof a ? (this.lowerLimit = a, this.lowerLimitEnabled = !0) : (this.lowerLimit = a, this.lowerLimitEnabled = !1);
				"number" === typeof b ? (this.upperLimit = b, this.upperLimitEnabled = !0) : (this.upperLimit = b, this.upperLimitEnabled = !1)
			};
			b.prototype.update = function() {
				var a = this.bodyA,
				b = this.bodyB,
				c = this.pivotA,
				d = this.pivotB,
				f = this.equations,
				g = f[0],
				h = f[1],
				p = this.upperLimit,
				l = this.lowerLimit,
				x = this.upperLimitEquation,
				D = this.lowerLimitEquation,
				C = this.angle = b.angle - a.angle;
				this.upperLimitEnabled && C > p ? (x.angle = p, -1 === f.indexOf(x) && f.push(x)) : (p = f.indexOf(x), -1 !== p && f.splice(p, 1));
				this.lowerLimitEnabled && C < l ? (D.angle = l, -1 === f.indexOf(D) && f.push(D)) : (p = f.indexOf(D), -1 !== p && f.splice(p, 1));
				v.rotate(u, c, a.angle);
				v.rotate(n, d, b.angle);
				g.G[0] = -1;
				g.G[1] = 0;
				g.G[2] = -v.crossLength(u, k);
				g.G[3] = 1;
				g.G[4] = 0;
				g.G[5] = v.crossLength(n, k);
				h.G[0] = 0;
				h.G[1] = -1;
				h.G[2] = -v.crossLength(u, m);
				h.G[3] = 0;
				h.G[4] = 1;
				h.G[5] = v.crossLength(n, m)
			};
			b.prototype.enableMotor = function() {
				this.motorEnabled || (this.equations.push(this.motorEquation), this.motorEnabled = !0)
			};
			b.prototype.disableMotor = function() {
				if (this.motorEnabled) {
					var a = this.equations.indexOf(this.motorEquation);
					this.equations.splice(a, 1);
					this.motorEnabled = !1
				}
			};
			b.prototype.motorIsEnabled = function() {
				return !! this.motorEnabled
			};
			b.prototype.setMotorSpeed = function(a) {
				if (this.motorEnabled) {
					var b = this.equations.indexOf(this.motorEquation);
					this.equations[b].relativeVelocity = a
				}
			};
			b.prototype.getMotorSpeed = function() {
				return this.motorEnabled ? this.motorEquation.relativeVelocity: !1
			}
		},
		{
			"../equations/Equation": 23,
			"../equations/RotationalLockEquation": 25,
			"../equations/RotationalVelocityEquation": 26,
			"../math/vec2": 31,
			"./Constraint": 15
		}],
		21 : [function(f, g, d) {
			function b(b, d, f) {
				f = f || {};
				a.call(this, b, d, -Number.MAX_VALUE, Number.MAX_VALUE);
				this.angle = f.angle || 0;
				this.ratio = "number" === typeof f.ratio ? f.ratio: 1;
				this.setRatio(this.ratio)
			}
			var a = f("./Equation");
			f("../math/vec2");
			g.exports = b;
			b.prototype = new a;
			b.prototype.constructor = b;
			b.prototype.computeGq = function() {
				return this.ratio * this.bodyA.angle - this.bodyB.angle + this.angle
			};
			b.prototype.setRatio = function(a) {
				var b = this.G;
				b[2] = a;
				b[5] = -1;
				this.ratio = a
			};
			b.prototype.setMaxTorque = function(a) {
				this.maxForce = a;
				this.minForce = -a
			}
		},
		{
			"../math/vec2": 31,
			"./Equation": 23
		}],
		22 : [function(f, g, d) {
			function b(b, d) {
				a.call(this, b, d, 0, Number.MAX_VALUE);
				this.contactPointA = c.create();
				this.penetrationVec = c.create();
				this.contactPointB = c.create();
				this.normalA = c.create();
				this.restitution = 0;
				this.firstImpact = !1;
				this.shapeB = this.shapeA = null
			}
			var a = f("./Equation"),
			c = f("../math/vec2");
			g.exports = b;
			b.prototype = new a;
			b.prototype.constructor = b;
			b.prototype.computeB = function(a, b, d) {
				var f = this.contactPointA,
				g = this.contactPointB,
				k = this.bodyA.position,
				m = this.bodyB.position,
				l = this.penetrationVec,
				q = this.normalA,
				t = this.G,
				s = c.crossLength(f, q),
				B = c.crossLength(g, q);
				t[0] = -q[0];
				t[1] = -q[1];
				t[2] = -s;
				t[3] = q[0];
				t[4] = q[1];
				t[5] = B;
				c.add(l, m, g);
				c.sub(l, l, k);
				c.sub(l, l, f);
				this.firstImpact && 0 !== this.restitution ? (g = 0, f = 1 / b * (1 + this.restitution) * this.computeGW()) : (g = c.dot(q, l) + this.offset, f = this.computeGW());
				k = this.computeGiMf();
				return - g * a - f * b - d * k
			}
		},
		{
			"../math/vec2": 31,
			"./Equation": 23
		}],
		23 : [function(f, g, d) {
			function b(a, d, f, g) {
				this.minForce = "undefined" === typeof f ? -Number.MAX_VALUE: f;
				this.maxForce = "undefined" === typeof g ? Number.MAX_VALUE: g;
				this.bodyA = a;
				this.bodyB = d;
				this.stiffness = b.DEFAULT_STIFFNESS;
				this.relaxation = b.DEFAULT_RELAXATION;
				this.G = new c.ARRAY_TYPE(6);
				for (a = 0; 6 > a; a++) this.G[a] = 0;
				this.epsilon = this.b = this.a = this.offset = 0;
				this.timeStep = 1 / 60;
				this.needsUpdate = !0;
				this.relativeVelocity = this.multiplier = 0;
				this.enabled = !0
			}
			g.exports = b;
			var a = f("../math/vec2"),
			c = f("../utils/Utils");
			f("../objects/Body");
			b.prototype.constructor = b;
			b.DEFAULT_STIFFNESS = 1E6;
			b.DEFAULT_RELAXATION = 4;
			b.prototype.update = function() {
				var a = this.stiffness,
				b = this.relaxation,
				c = this.timeStep;
				this.a = 4 / (c * (1 + 4 * b));
				this.b = 4 * b / (1 + 4 * b);
				this.epsilon = 4 / (c * c * a * (1 + 4 * b));
				this.needsUpdate = !1
			};
			b.prototype.gmult = function(a, b, c, d, f) {
				return a[0] * b[0] + a[1] * b[1] + a[2] * c + a[3] * d[0] + a[4] * d[1] + a[5] * f
			};
			b.prototype.computeB = function(a, b, c) {
				var d = this.computeGW(),
				f = this.computeGq(),
				g = this.computeGiMf();
				return - f * a - d * b - g * c
			};
			var h = a.create(),
			p = a.create();
			b.prototype.computeGq = function() {
				return this.gmult(this.G, h, this.bodyA.angle, p, this.bodyB.angle) + this.offset
			};
			b.prototype.computeGW = function() {
				var a = this.bodyA,
				b = this.bodyB;
				return this.gmult(this.G, a.velocity, a.angularVelocity, b.velocity, b.angularVelocity) + this.relativeVelocity
			};
			b.prototype.computeGWlambda = function() {
				var a = this.bodyA,
				b = this.bodyB;
				return this.gmult(this.G, a.vlambda, a.wlambda, b.vlambda, b.wlambda)
			};
			var v = a.create(),
			u = a.create();
			b.prototype.computeGiMf = function() {
				var b = this.bodyA,
				c = this.bodyB,
				d = b.angularForce,
				f = c.force,
				g = c.angularForce,
				h = c.invMassSolve,
				p = b.invInertiaSolve,
				c = c.invInertiaSolve,
				k = this.G;
				a.scale(v, b.force, b.invMassSolve);
				a.scale(u, f, h);
				return this.gmult(k, v, d * p, u, g * c)
			};
			b.prototype.computeGiMGt = function() {
				var a = this.bodyA,
				b = this.bodyB,
				c = a.invMassSolve,
				d = b.invMassSolve,
				f = this.G;
				return f[0] * f[0] * c + f[1] * f[1] * c + f[2] * f[2] * a.invInertiaSolve + f[3] * f[3] * d + f[4] * f[4] * d + f[5] * f[5] * b.invInertiaSolve
			};
			var n = a.create(),
			k = a.create(),
			m = a.create();
			a.create();
			a.create();
			a.create();
			b.prototype.addToWlambda = function(b) {
				var c = this.bodyA,
				d = this.bodyB,
				f = c.invMassSolve,
				g = d.invMassSolve,
				h = c.invInertiaSolve,
				p = d.invInertiaSolve,
				v = this.G;
				k[0] = v[0];
				k[1] = v[1];
				m[0] = v[3];
				m[1] = v[4];
				a.scale(n, k, f * b);
				a.add(c.vlambda, c.vlambda, n);
				c.wlambda += h * v[2] * b;
				a.scale(n, m, g * b);
				a.add(d.vlambda, d.vlambda, n);
				d.wlambda += p * v[5] * b
			};
			b.prototype.computeInvC = function(a) {
				return 1 / (this.computeGiMGt() + a)
			}
		},
		{
			"../math/vec2": 31,
			"../objects/Body": 32,
			"../utils/Utils": 50
		}],
		24 : [function(f, g, d) {
			function b(b, d, f) {
				c.call(this, b, d, -f, f);
				this.contactPointA = a.create();
				this.contactPointB = a.create();
				this.t = a.create();
				this.contactEquations = [];
				this.shapeB = this.shapeA = null;
				this.frictionCoefficient = 0.3
			}
			var a = f("../math/vec2"),
			c = f("./Equation");
			f("../utils/Utils");
			g.exports = b;
			b.prototype = new c;
			b.prototype.constructor = b;
			b.prototype.setSlipForce = function(a) {
				this.maxForce = a;
				this.minForce = -a
			};
			b.prototype.getSlipForce = function() {
				return this.maxForce
			};
			b.prototype.computeB = function(b, c, d) {
				b = this.contactPointA;
				var f = this.contactPointB,
				g = this.t,
				k = this.G;
				k[0] = -g[0];
				k[1] = -g[1];
				k[2] = -a.crossLength(b, g);
				k[3] = g[0];
				k[4] = g[1];
				k[5] = a.crossLength(f, g);
				b = this.computeGW();
				f = this.computeGiMf();
				return - b * c - d * f
			}
		},
		{
			"../math/vec2": 31,
			"../utils/Utils": 50,
			"./Equation": 23
		}],
		25 : [function(f, g, d) {
			function b(b, c, d) {
				d = d || {};
				a.call(this, b, c, -Number.MAX_VALUE, Number.MAX_VALUE);
				this.angle = d.angle || 0;
				b = this.G;
				b[2] = 1;
				b[5] = -1
			}
			var a = f("./Equation"),
			c = f("../math/vec2");
			g.exports = b;
			b.prototype = new a;
			b.prototype.constructor = b;
			var h = c.create(),
			p = c.create(),
			v = c.fromValues(1, 0),
			u = c.fromValues(0, 1);
			b.prototype.computeGq = function() {
				c.rotate(h, v, this.bodyA.angle + this.angle);
				c.rotate(p, u, this.bodyB.angle);
				return c.dot(h, p)
			}
		},
		{
			"../math/vec2": 31,
			"./Equation": 23
		}],
		26 : [function(f, g, d) {
			function b(b, d) {
				a.call(this, b, d, -Number.MAX_VALUE, Number.MAX_VALUE);
				this.ratio = this.relativeVelocity = 1
			}
			var a = f("./Equation");
			f("../math/vec2");
			g.exports = b;
			b.prototype = new a;
			b.prototype.constructor = b;
			b.prototype.computeB = function(a, b, d) {
				a = this.G;
				a[2] = -1;
				a[5] = this.ratio;
				a = this.computeGiMf();
				return - this.computeGW() * b - d * a
			}
		},
		{
			"../math/vec2": 31,
			"./Equation": 23
		}],
		27 : [function(f, g, d) {
			f = function() {};
			g.exports = f;
			f.prototype = {
				constructor: f,
				on: function(b, a, c) {
					a.context = c || this;
					void 0 === this._listeners && (this._listeners = {});
					c = this._listeners;
					void 0 === c[b] && (c[b] = []); - 1 === c[b].indexOf(a) && c[b].push(a);
					return this
				},
				has: function(b, a) {
					if (void 0 === this._listeners) return ! 1;
					var c = this._listeners;
					if (a) {
						if (void 0 !== c[b] && -1 !== c[b].indexOf(a)) return ! 0
					} else if (void 0 !== c[b]) return ! 0;
					return ! 1
				},
				off: function(b, a) {
					if (void 0 === this._listeners) return this;
					var c = this._listeners,
					d = c[b].indexOf(a); - 1 !== d && c[b].splice(d, 1);
					return this
				},
				emit: function(b) {
					if (void 0 === this._listeners) return this;
					var a = this._listeners[b.type];
					if (void 0 !== a) {
						b.target = this;
						for (var c = 0,
						d = a.length; c < d; c++) {
							var f = a[c];
							f.call(f.context, b)
						}
					}
					return this
				}
			}
		},
		{}],
		28 : [function(f, g, d) {
			function b(d, f, g) {
				g = g || {};
				if (! (d instanceof a && f instanceof a)) throw Error("First two arguments must be Material instances.");
				this.id = b.idCounter++;
				this.materialA = d;
				this.materialB = f;
				this.friction = "undefined" !== typeof g.friction ? Number(g.friction) : 0.3;
				this.restitution = "undefined" !== typeof g.restitution ? Number(g.restitution) : 0;
				this.stiffness = "undefined" !== typeof g.stiffness ? Number(g.stiffness) : c.DEFAULT_STIFFNESS;
				this.relaxation = "undefined" !== typeof g.relaxation ? Number(g.relaxation) : c.DEFAULT_RELAXATION;
				this.frictionStiffness = "undefined" !== typeof g.frictionStiffness ? Number(g.frictionStiffness) : c.DEFAULT_STIFFNESS;
				this.frictionRelaxation = "undefined" !== typeof g.frictionRelaxation ? Number(g.frictionRelaxation) : c.DEFAULT_RELAXATION;
				this.surfaceVelocity = "undefined" !== typeof g.surfaceVelocity ? Number(g.surfaceVelocity) : 0;
				this.contactSkinSize = 0.005
			}
			var a = f("./Material"),
			c = f("../equations/Equation");
			g.exports = b;
			b.idCounter = 0
		},
		{
			"../equations/Equation": 23,
			"./Material": 29
		}],
		29 : [function(f, g, d) {
			function b(a) {
				this.id = a || b.idCounter++
			}
			g.exports = b;
			b.idCounter = 0
		},
		{}],
		30 : [function(f, g, d) {
			var b = {
				GetArea: function(a) {
					if (6 > a.length) return 0;
					for (var b = a.length - 2,
					d = 0,
					f = 0; f < b; f += 2) d += (a[f + 2] - a[f]) * (a[f + 1] + a[f + 3]);
					d += (a[0] - a[b]) * (a[b + 1] + a[1]);
					return 0.5 * -d
				},
				Triangulate: function(a) {
					var c = a.length >> 1;
					if (3 > c) return [];
					for (var d = [], f = [], g = 0; g < c; g++) f.push(g);
					for (g = 0; 3 < c;) {
						var u = f[(g + 0) % c],
						n = f[(g + 1) % c],
						k = f[(g + 2) % c],
						m = a[2 * u],
						l = a[2 * u + 1],
						q = a[2 * n],
						t = a[2 * n + 1],
						s = a[2 * k],
						B = a[2 * k + 1],
						z = !1;
						if (b._convex(m, l, q, t, s, B)) for (var z = !0,
						r = 0; r < c; r++) {
							var y = f[r];
							if (y != u && y != n && y != k && b._PointInTriangle(a[2 * y], a[2 * y + 1], m, l, q, t, s, B)) {
								z = !1;
								break
							}
						}
						if (z) d.push(u, n, k),
						f.splice((g + 1) % c, 1),
						c--,
						g = 0;
						else if (g++>3 * c) break
					}
					d.push(f[0], f[1], f[2]);
					return d
				},
				_PointInTriangle: function(a, b, d, f, g, u, n, k) {
					n -= d;
					k -= f;
					g -= d;
					u -= f;
					a -= d;
					d = b - f;
					b = n * n + k * k;
					f = n * g + k * u;
					n = n * a + k * d;
					k = g * g + u * u;
					g = g * a + u * d;
					u = 1 / (b * k - f * f);
					k = (k * n - f * g) * u;
					n = (b * g - f * n) * u;
					return 0 <= k && 0 <= n && 1 > k + n
				},
				_convex: function(a, b, d, f, g, u) {
					return 0 <= (b - f) * (g - d) + (d - a) * (u - f)
				}
			};
			g.exports = b
		},
		{}],
		31 : [function(f, g, d) {
			var b = g.exports = {},
			a = f("../utils/Utils");
			b.crossLength = function(a, b) {
				return a[0] * b[1] - a[1] * b[0]
			};
			b.crossVZ = function(a, d, f) {
				b.rotate(a, d, -Math.PI / 2);
				b.scale(a, a, f);
				return a
			};
			b.crossZV = function(a, d, f) {
				b.rotate(a, f, Math.PI / 2);
				b.scale(a, a, d);
				return a
			};
			b.rotate = function(a, b, d) {
				if (0 !== d) {
					var f = Math.cos(d);
					d = Math.sin(d);
					var g = b[0];
					b = b[1];
					a[0] = f * g - d * b;
					a[1] = d * g + f * b
				} else a[0] = b[0],
				a[1] = b[1]
			};
			b.rotate90cw = function(a, b) {
				var d = b[0];
				a[0] = b[1];
				a[1] = -d
			};
			b.toLocalFrame = function(a, d, f, g) {
				b.copy(a, d);
				b.sub(a, a, f);
				b.rotate(a, a, -g)
			};
			b.toGlobalFrame = function(a, d, f, g) {
				b.copy(a, d);
				b.rotate(a, a, g);
				b.add(a, a, f)
			};
			b.centroid = function(a, d, f, g) {
				b.add(a, d, f);
				b.add(a, a, g);
				b.scale(a, a, 1 / 3);
				return a
			};
			b.create = function() {
				var b = new a.ARRAY_TYPE(2);
				b[0] = 0;
				b[1] = 0;
				return b
			};
			b.clone = function(b) {
				var d = new a.ARRAY_TYPE(2);
				d[0] = b[0];
				d[1] = b[1];
				return d
			};
			b.fromValues = function(b, d) {
				var f = new a.ARRAY_TYPE(2);
				f[0] = b;
				f[1] = d;
				return f
			};
			b.copy = function(a, b) {
				a[0] = b[0];
				a[1] = b[1];
				return a
			};
			b.set = function(a, b, d) {
				a[0] = b;
				a[1] = d;
				return a
			};
			b.add = function(a, b, d) {
				a[0] = b[0] + d[0];
				a[1] = b[1] + d[1];
				return a
			};
			b.subtract = function(a, b, d) {
				a[0] = b[0] - d[0];
				a[1] = b[1] - d[1];
				return a
			};
			b.sub = b.subtract;
			b.multiply = function(a, b, d) {
				a[0] = b[0] * d[0];
				a[1] = b[1] * d[1];
				return a
			};
			b.mul = b.multiply;
			b.divide = function(a, b, d) {
				a[0] = b[0] / d[0];
				a[1] = b[1] / d[1];
				return a
			};
			b.div = b.divide;
			b.scale = function(a, b, d) {
				a[0] = b[0] * d;
				a[1] = b[1] * d;
				return a
			};
			b.distance = function(a, b) {
				var d = b[0] - a[0],
				f = b[1] - a[1];
				return Math.sqrt(d * d + f * f)
			};
			b.dist = b.distance;
			b.squaredDistance = function(a, b) {
				var d = b[0] - a[0],
				f = b[1] - a[1];
				return d * d + f * f
			};
			b.sqrDist = b.squaredDistance;
			b.length = function(a) {
				var b = a[0];
				a = a[1];
				return Math.sqrt(b * b + a * a)
			};
			b.len = b.length;
			b.squaredLength = function(a) {
				var b = a[0];
				a = a[1];
				return b * b + a * a
			};
			b.sqrLen = b.squaredLength;
			b.negate = function(a, b) {
				a[0] = -b[0];
				a[1] = -b[1];
				return a
			};
			b.normalize = function(a, b) {
				var d = b[0],
				f = b[1],
				d = d * d + f * f;
				0 < d && (d = 1 / Math.sqrt(d), a[0] = b[0] * d, a[1] = b[1] * d);
				return a
			};
			b.dot = function(a, b) {
				return a[0] * b[0] + a[1] * b[1]
			};
			b.str = function(a) {
				return "vec2(" + a[0] + ", " + a[1] + ")"
			};
			b.lerp = function(a, b, d, f) {
				var g = b[0];
				b = b[1];
				a[0] = g + f * (d[0] - g);
				a[1] = b + f * (d[1] - b);
				return a
			}
		},
		{
			"../utils/Utils": 50
		}],
		32 : [function(f, g, d) {
			function b(c) {
				c = c || {};
				v.call(this);
				this.id = ++b._idCounter;
				this.world = null;
				this.shapes = [];
				this.shapeOffsets = [];
				this.shapeAngles = [];
				this.mass = c.mass || 0;
				this.invInertiaSolve = this.invMassSolve = this.invInertia = this.inertia = this.invMass = 0;
				this.fixedRotation = !!c.fixedRotation;
				this.position = a.fromValues(0, 0);
				c.position && a.copy(this.position, c.position);
				this.interpolatedPosition = a.fromValues(0, 0);
				this.interpolatedAngle = 0;
				this.previousPosition = a.fromValues(0, 0);
				this.previousAngle = 0;
				this.velocity = a.fromValues(0, 0);
				c.velocity && a.copy(this.velocity, c.velocity);
				this.vlambda = a.fromValues(0, 0);
				this.wlambda = 0;
				this.angle = c.angle || 0;
				this.angularVelocity = c.angularVelocity || 0;
				this.force = a.create();
				c.force && a.copy(this.force, c.force);
				this.angularForce = c.angularForce || 0;
				this.damping = "number" === typeof c.damping ? c.damping: 0.1;
				this.angularDamping = "number" === typeof c.angularDamping ? c.angularDamping: 0.1;
				this.type = b.STATIC;
				this.type = "undefined" !== typeof c.type ? c.type: c.mass ? b.DYNAMIC: b.STATIC;
				this.boundingRadius = 0;
				this.aabb = new p;
				this.allowSleep = this.aabbNeedsUpdate = !0;
				this.wantsToSleep = !1;
				this.sleepState = b.AWAKE;
				this.sleepSpeedLimit = 0.2;
				this.gravityScale = this.sleepTimeLimit = 1;
				this.collisionResponse = !0;
				this.timeLastSleepy = this.idleTime = 0;
				this.ccdSpeedThreshold = void 0 !== c.ccdSpeedThreshold ? c.ccdSpeedThreshold: -1;
				this.ccdIterations = void 0 !== c.ccdIterations ? c.ccdIterations: 10;
				this.concavePath = null;
				this._wakeUpAfterNarrowphase = !1;
				this.updateMassProperties()
			}
			var a = f("../math/vec2"),
			c = f("poly-decomp"),
			h = f("../shapes/Convex"),
			p = f("../collision/AABB"),
			v = f("../events/EventEmitter");
			g.exports = b;
			b.prototype = new v;
			b.prototype.constructor = b;
			b._idCounter = 0;
			b.prototype.updateSolveMassProperties = function() {
				this.sleepState === b.SLEEPING || this.type === b.KINEMATIC ? this.invInertiaSolve = this.invMassSolve = 0 : (this.invMassSolve = this.invMass, this.invInertiaSolve = this.invInertia)
			};
			b.prototype.setDensity = function(a) {
				this.mass = this.getArea() * a;
				this.updateMassProperties()
			};
			b.prototype.getArea = function() {
				for (var a = 0,
				b = 0; b < this.shapes.length; b++) a += this.shapes[b].area;
				return a
			};
			b.prototype.getAABB = function() {
				this.aabbNeedsUpdate && this.updateAABB();
				return this.aabb
			};
			var u = new p,
			n = a.create();
			b.prototype.updateAABB = function() {
				for (var b = this.shapes,
				c = this.shapeOffsets,
				d = this.shapeAngles,
				f = b.length,
				g = this.angle,
				h = 0; h !== f; h++) {
					var k = b[h],
					p = d[h] + g;
					a.rotate(n, c[h], g);
					a.add(n, n, this.position);
					k.computeAABB(u, n, p);
					0 === h ? this.aabb.copy(u) : this.aabb.extend(u)
				}
				this.aabbNeedsUpdate = !1
			};
			b.prototype.updateBoundingRadius = function() {
				for (var b = this.shapes,
				c = this.shapeOffsets,
				d = b.length,
				f = 0,
				g = 0; g !== d; g++) {
					var h = b[g],
					k = a.length(c[g]),
					h = h.boundingRadius;
					k + h > f && (f = k + h)
				}
				this.boundingRadius = f
			};
			b.prototype.addShape = function(b, c, d) {
				d = d || 0;
				c = c ? a.fromValues(c[0], c[1]) : a.fromValues(0, 0);
				this.shapes.push(b);
				this.shapeOffsets.push(c);
				this.shapeAngles.push(d);
				this.updateMassProperties();
				this.updateBoundingRadius();
				this.aabbNeedsUpdate = !0
			};
			b.prototype.removeShape = function(a) {
				a = this.shapes.indexOf(a);
				return - 1 !== a ? (this.shapes.splice(a, 1), this.shapeOffsets.splice(a, 1), this.shapeAngles.splice(a, 1), this.aabbNeedsUpdate = !0) : !1
			};
			b.prototype.updateMassProperties = function() {
				if (this.type === b.STATIC || this.type === b.KINEMATIC) this.mass = Number.MAX_VALUE,
				this.invMass = 0,
				this.inertia = Number.MAX_VALUE,
				this.invInertia = 0;
				else {
					var c = this.shapes,
					d = c.length,
					f = this.mass / d,
					g = 0;
					if (this.fixedRotation) this.inertia = Number.MAX_VALUE,
					this.invInertia = 0;
					else {
						for (var h = 0; h < d; h++) var k = c[h],
						p = a.squaredLength(this.shapeOffsets[h]),
						k = k.computeMomentOfInertia(f),
						g = g + (k + f * p);
						this.inertia = g;
						this.invInertia = 0 < g ? 1 / g: 0
					}
					this.invMass = 1 / this.mass
				}
			};
			var k = a.create();
			b.prototype.applyForce = function(b, c) {
				a.sub(k, c, this.position);
				a.add(this.force, this.force, b);
				var d = a.crossLength(k, b);
				this.angularForce += d
			};
			b.prototype.toLocalFrame = function(b, c) {
				a.toLocalFrame(b, c, this.position, this.angle)
			};
			b.prototype.toWorldFrame = function(b, c) {
				a.toGlobalFrame(b, c, this.position, this.angle)
			};
			b.prototype.fromPolygon = function(b, d) {
				d = d || {};
				for (var f = this.shapes.length; 0 <= f; --f) this.removeShape(this.shapes[f]);
				var g = new c.Polygon;
				g.vertices = b;
				g.makeCCW();
				"number" === typeof d.removeCollinearPoints && g.removeCollinearPoints(d.removeCollinearPoints);
				if ("undefined" === typeof d.skipSimpleCheck && !g.isSimple()) return ! 1;
				this.concavePath = g.vertices.slice(0);
				for (f = 0; f < this.concavePath.length; f++) {
					var k = [0, 0];
					a.copy(k, this.concavePath[f]);
					this.concavePath[f] = k
				}
				for (var g = d.optimalDecomp ? g.decomp() : g.quickDecomp(), p = a.create(), f = 0; f !== g.length; f++) {
					for (var n = new h(g[f].vertices), l = 0; l !== n.vertices.length; l++) k = n.vertices[l],
					a.sub(k, k, n.centerOfMass);
					a.scale(p, n.centerOfMass, 1);
					n.updateTriangles();
					n.updateCenterOfMass();
					n.updateBoundingRadius();
					this.addShape(n, p)
				}
				this.adjustCenterOfMass();
				return this.aabbNeedsUpdate = !0
			};
			a.fromValues(0, 0);
			var m = a.fromValues(0, 0),
			l = a.fromValues(0, 0),
			q = a.fromValues(0, 0);
			b.prototype.adjustCenterOfMass = function() {
				var b = 0;
				a.set(l, 0, 0);
				for (var c = 0; c !== this.shapes.length; c++) {
					var d = this.shapes[c],
					f = this.shapeOffsets[c];
					a.scale(m, f, d.area);
					a.add(l, l, m);
					b += d.area
				}
				a.scale(q, l, 1 / b);
				for (c = 0; c !== this.shapes.length; c++)(f = this.shapeOffsets[c]) || (f = this.shapeOffsets[c] = a.create()),
				a.sub(f, f, q);
				a.add(this.position, this.position, q);
				for (c = 0; this.concavePath && c < this.concavePath.length; c++) a.sub(this.concavePath[c], this.concavePath[c], q);
				this.updateMassProperties();
				this.updateBoundingRadius()
			};
			b.prototype.setZeroForce = function() {
				a.set(this.force, 0, 0);
				this.angularForce = 0
			};
			b.prototype.resetConstraintVelocity = function() {
				a.set(this.vlambda, 0, 0);
				this.wlambda = 0
			};
			b.prototype.addConstraintVelocity = function() {
				var b = this.velocity;
				a.add(b, b, this.vlambda);
				this.angularVelocity += this.wlambda
			};
			b.prototype.applyDamping = function(c) {
				if (this.type === b.DYNAMIC) {
					var d = this.velocity;
					a.scale(d, d, Math.pow(1 - this.damping, c));
					this.angularVelocity *= Math.pow(1 - this.angularDamping, c)
				}
			};
			b.prototype.wakeUp = function() {
				var a = this.sleepState;
				this.sleepState = b.AWAKE;
				this.idleTime = 0;
				a !== b.AWAKE && this.emit(b.wakeUpEvent)
			};
			b.prototype.sleep = function() {
				this.sleepState = b.SLEEPING;
				this.angularForce = this.angularVelocity = 0;
				a.set(this.velocity, 0, 0);
				a.set(this.force, 0, 0);
				this.emit(b.sleepEvent)
			};
			b.prototype.sleepTick = function(c, d, f) {
				if (this.allowSleep && this.type !== b.SLEEPING) {
					this.wantsToSleep = !1;
					c = a.squaredLength(this.velocity) + Math.pow(this.angularVelocity, 2);
					var g = Math.pow(this.sleepSpeedLimit, 2);
					c >= g ? (this.idleTime = 0, this.sleepState = b.AWAKE) : (this.idleTime += f, this.sleepState = b.SLEEPY);
					this.idleTime > this.sleepTimeLimit && (d ? this.wantsToSleep = !0 : this.sleep())
				}
			};
			b.prototype.getVelocityFromPosition = function(b, c) {
				b = b || a.create();
				a.sub(b, this.position, this.previousPosition);
				a.scale(b, b, 1 / c);
				return b
			};
			b.prototype.getAngularVelocityFromPosition = function(a) {
				return (this.angle - this.previousAngle) / a
			};
			b.prototype.overlaps = function(a) {
				return this.world.overlapKeeper.bodiesAreOverlapping(this, a)
			};
			var t = a.create(),
			s = a.create();
			b.prototype.integrate = function(b) {
				var c = this.invMass,
				d = this.force,
				f = this.position,
				g = this.velocity;
				a.copy(this.previousPosition, this.position);
				this.previousAngle = this.angle;
				this.fixedRotation || (this.angularVelocity += this.angularForce * this.invInertia * b);
				a.scale(t, d, b * c);
				a.add(g, t, g);
				this.integrateToTimeOfImpact(b) || (a.scale(s, g, b), a.add(f, f, s), this.fixedRotation || (this.angle += this.angularVelocity * b));
				this.aabbNeedsUpdate = !0
			};
			var B = a.create(),
			z = a.create(),
			r = a.create(),
			y = a.create();
			b.prototype.integrateToTimeOfImpact = function(b) {
				if (0 > this.ccdSpeedThreshold || a.squaredLength(this.velocity) < Math.pow(this.ccdSpeedThreshold, 2)) return ! 1;
				a.normalize(B, this.velocity);
				a.scale(z, this.velocity, b);
				a.add(z, z, this.position);
				a.sub(r, z, this.position);
				b *= this.angularVelocity;
				var c = a.length(r),
				d = 1,
				f,
				g = this;
				this.world.raycastAll(this.position, z, {},
				function(b) {
					b.body !== g && (f = b.body, a.copy(z, b.hitPointWorld), a.sub(r, b.hitPointWorld, g.position), d = a.length(r) / c, b.abort())
				});
				if (!f) return ! 1;
				var h = this.angle;
				a.copy(y, this.position);
				for (var k = 0,
				p = 0,
				n = 0,
				l = d; l >= p && k < this.ccdIterations;) k++,
				n = (l - p) / 2,
				a.scale(s, r, d),
				a.add(this.position, y, s),
				this.angle = h + b * d,
				this.updateAABB(),
				this.aabb.overlaps(f.aabb) && this.world.narrowphase.bodiesOverlap(this, f) ? p = n: l = n;
				d = n;
				a.copy(this.position, y);
				this.angle = h;
				a.scale(s, r, d);
				a.add(this.position, this.position, s);
				this.fixedRotation || (this.angle += b * d);
				return ! 0
			};
			b.sleepyEvent = {
				type: "sleepy"
			};
			b.sleepEvent = {
				type: "sleep"
			};
			b.wakeUpEvent = {
				type: "wakeup"
			};
			b.DYNAMIC = 1;
			b.STATIC = 2;
			b.KINEMATIC = 4;
			b.AWAKE = 0;
			b.SLEEPY = 1;
			b.SLEEPING = 2
		},
		{
			"../collision/AABB": 7,
			"../events/EventEmitter": 27,
			"../math/vec2": 31,
			"../shapes/Convex": 39,
			"poly-decomp": 5
		}],
		33 : [function(f, g, d) {
			function b(b, d, f) {
				f = f || {};
				c.call(this, b, d, f);
				this.localAnchorA = a.fromValues(0, 0);
				this.localAnchorB = a.fromValues(0, 0);
				f.localAnchorA && a.copy(this.localAnchorA, f.localAnchorA);
				f.localAnchorB && a.copy(this.localAnchorB, f.localAnchorB);
				f.worldAnchorA && this.setWorldAnchorA(f.worldAnchorA);
				f.worldAnchorB && this.setWorldAnchorB(f.worldAnchorB);
				b = a.create();
				d = a.create();
				this.getWorldAnchorA(b);
				this.getWorldAnchorB(d);
				b = a.distance(b, d);
				this.restLength = "number" === typeof f.restLength ? f.restLength: b
			}
			var a = f("../math/vec2"),
			c = f("./Spring");
			f("../utils/Utils");
			g.exports = b;
			b.prototype = new c;
			b.prototype.constructor = b;
			b.prototype.setWorldAnchorA = function(a) {
				this.bodyA.toLocalFrame(this.localAnchorA, a)
			};
			b.prototype.setWorldAnchorB = function(a) {
				this.bodyB.toLocalFrame(this.localAnchorB, a)
			};
			b.prototype.getWorldAnchorA = function(a) {
				this.bodyA.toWorldFrame(a, this.localAnchorA)
			};
			b.prototype.getWorldAnchorB = function(a) {
				this.bodyB.toWorldFrame(a, this.localAnchorB)
			};
			var h = a.create(),
			p = a.create(),
			v = a.create(),
			u = a.create(),
			n = a.create(),
			k = a.create(),
			m = a.create(),
			l = a.create(),
			q = a.create();
			b.prototype.applyForce = function() {
				var b = this.stiffness,
				c = this.damping,
				d = this.restLength,
				f = this.bodyA,
				g = this.bodyB;
				this.getWorldAnchorA(n);
				this.getWorldAnchorB(k);
				a.sub(m, n, f.position);
				a.sub(l, k, g.position);
				a.sub(h, k, n);
				var y = a.len(h);
				a.normalize(p, h);
				a.sub(v, g.velocity, f.velocity);
				a.crossZV(q, g.angularVelocity, l);
				a.add(v, v, q);
				a.crossZV(q, f.angularVelocity, m);
				a.sub(v, v, q);
				a.scale(u, p, -b * (y - d) - c * a.dot(v, p));
				a.sub(f.force, f.force, u);
				a.add(g.force, g.force, u);
				b = a.crossLength(m, u);
				c = a.crossLength(l, u);
				f.angularForce -= b;
				g.angularForce += c
			}
		},
		{
			"../math/vec2": 31,
			"../utils/Utils": 50,
			"./Spring": 35
		}],
		34 : [function(f, g, d) {
			function b(b, d, f) {
				f = f || {};
				a.call(this, b, d, f);
				this.restAngle = "number" === typeof f.restAngle ? f.restAngle: d.angle - b.angle
			}
			f("../math/vec2");
			var a = f("./Spring");
			g.exports = b;
			b.prototype = new a;
			b.prototype.constructor = b;
			b.prototype.applyForce = function() {
				var a = this.bodyA,
				b = this.bodyB,
				d = -this.stiffness * (b.angle - a.angle - this.restAngle) - this.damping * (b.angularVelocity - a.angularVelocity) * 0;
				a.angularForce -= d;
				b.angularForce += d
			}
		},
		{
			"../math/vec2": 31,
			"./Spring": 35
		}],
		35 : [function(f, g, d) {
			function b(b, d, f) {
				f = a.defaults(f, {
					stiffness: 100,
					damping: 1
				});
				this.stiffness = f.stiffness;
				this.damping = f.damping;
				this.bodyA = b;
				this.bodyB = d
			}
			f("../math/vec2");
			var a = f("../utils/Utils");
			g.exports = b;
			b.prototype.applyForce = function() {}
		},
		{
			"../math/vec2": 31,
			"../utils/Utils": 50
		}],
		36 : [function(f, g, d) {
			g.exports = {
				AABB: f("./collision/AABB"),
				AngleLockEquation: f("./equations/AngleLockEquation"),
				Body: f("./objects/Body"),
				Broadphase: f("./collision/Broadphase"),
				Capsule: f("./shapes/Capsule"),
				Circle: f("./shapes/Circle"),
				Constraint: f("./constraints/Constraint"),
				ContactEquation: f("./equations/ContactEquation"),
				ContactMaterial: f("./material/ContactMaterial"),
				Convex: f("./shapes/Convex"),
				DistanceConstraint: f("./constraints/DistanceConstraint"),
				Equation: f("./equations/Equation"),
				EventEmitter: f("./events/EventEmitter"),
				FrictionEquation: f("./equations/FrictionEquation"),
				GearConstraint: f("./constraints/GearConstraint"),
				GridBroadphase: f("./collision/GridBroadphase"),
				GSSolver: f("./solver/GSSolver"),
				Heightfield: f("./shapes/Heightfield"),
				Line: f("./shapes/Line"),
				LockConstraint: f("./constraints/LockConstraint"),
				Material: f("./material/Material"),
				Narrowphase: f("./collision/Narrowphase"),
				NaiveBroadphase: f("./collision/NaiveBroadphase"),
				Particle: f("./shapes/Particle"),
				Plane: f("./shapes/Plane"),
				RevoluteConstraint: f("./constraints/RevoluteConstraint"),
				PrismaticConstraint: f("./constraints/PrismaticConstraint"),
				Ray: f("./collision/Ray"),
				RaycastResult: f("./collision/RaycastResult"),
				Rectangle: f("./shapes/Rectangle"),
				RotationalVelocityEquation: f("./equations/RotationalVelocityEquation"),
				SAPBroadphase: f("./collision/SAPBroadphase"),
				Shape: f("./shapes/Shape"),
				Solver: f("./solver/Solver"),
				Spring: f("./objects/Spring"),
				LinearSpring: f("./objects/LinearSpring"),
				RotationalSpring: f("./objects/RotationalSpring"),
				Utils: f("./utils/Utils"),
				World: f("./world/World"),
				vec2: f("./math/vec2"),
				version: f("../package.json").version
			}
		},
		{
			"../package.json": 6,
			"./collision/AABB": 7,
			"./collision/Broadphase": 8,
			"./collision/GridBroadphase": 9,
			"./collision/NaiveBroadphase": 10,
			"./collision/Narrowphase": 11,
			"./collision/Ray": 12,
			"./collision/RaycastResult": 13,
			"./collision/SAPBroadphase": 14,
			"./constraints/Constraint": 15,
			"./constraints/DistanceConstraint": 16,
			"./constraints/GearConstraint": 17,
			"./constraints/LockConstraint": 18,
			"./constraints/PrismaticConstraint": 19,
			"./constraints/RevoluteConstraint": 20,
			"./equations/AngleLockEquation": 21,
			"./equations/ContactEquation": 22,
			"./equations/Equation": 23,
			"./equations/FrictionEquation": 24,
			"./equations/RotationalVelocityEquation": 26,
			"./events/EventEmitter": 27,
			"./material/ContactMaterial": 28,
			"./material/Material": 29,
			"./math/vec2": 31,
			"./objects/Body": 32,
			"./objects/LinearSpring": 33,
			"./objects/RotationalSpring": 34,
			"./objects/Spring": 35,
			"./shapes/Capsule": 37,
			"./shapes/Circle": 38,
			"./shapes/Convex": 39,
			"./shapes/Heightfield": 40,
			"./shapes/Line": 41,
			"./shapes/Particle": 42,
			"./shapes/Plane": 43,
			"./shapes/Rectangle": 44,
			"./shapes/Shape": 45,
			"./solver/GSSolver": 46,
			"./solver/Solver": 47,
			"./utils/Utils": 50,
			"./world/World": 54
		}],
		37 : [function(f, g, d) {
			function b(b, c) {
				this.length = b || 1;
				this.radius = c || 1;
				a.call(this, a.CAPSULE)
			}
			var a = f("./Shape"),
			c = f("../math/vec2");
			g.exports = b;
			b.prototype = new a;
			b.prototype.constructor = b;
			b.prototype.computeMomentOfInertia = function(a) {
				var b = this.radius,
				c = this.length + b,
				b = 2 * b;
				return a * (b * b + c * c) / 12
			};
			b.prototype.updateBoundingRadius = function() {
				this.boundingRadius = this.radius + this.length / 2
			};
			b.prototype.updateArea = function() {
				this.area = Math.PI * this.radius * this.radius + 2 * this.radius * this.length
			};
			var h = c.create();
			b.prototype.computeAABB = function(a, b, d) {
				var f = this.radius;
				c.set(h, this.length / 2, 0);
				0 !== d && c.rotate(h, h, d);
				c.set(a.upperBound, Math.max(h[0] + f, -h[0] + f), Math.max(h[1] + f, -h[1] + f));
				c.set(a.lowerBound, Math.min(h[0] - f, -h[0] - f), Math.min(h[1] - f, -h[1] - f));
				c.add(a.lowerBound, a.lowerBound, b);
				c.add(a.upperBound, a.upperBound, b)
			}
		},
		{
			"../math/vec2": 31,
			"./Shape": 45
		}],
		38 : [function(f, g, d) {
			function b(b) {
				this.radius = b || 1;
				a.call(this, a.CIRCLE)
			}
			var a = f("./Shape"),
			c = f("../math/vec2");
			g.exports = b;
			b.prototype = new a;
			b.prototype.constructor = b;
			b.prototype.computeMomentOfInertia = function(a) {
				var b = this.radius;
				return a * b * b / 2
			};
			b.prototype.updateBoundingRadius = function() {
				this.boundingRadius = this.radius
			};
			b.prototype.updateArea = function() {
				this.area = Math.PI * this.radius * this.radius
			};
			b.prototype.computeAABB = function(a, b, d) {
				d = this.radius;
				c.set(a.upperBound, d, d);
				c.set(a.lowerBound, -d, -d);
				b && (c.add(a.lowerBound, a.lowerBound, b), c.add(a.upperBound, a.upperBound, b))
			}
		},
		{
			"../math/vec2": 31,
			"./Shape": 45
		}],
		39 : [function(f, g, d) {
			function b(b, d) {
				this.vertices = [];
				this.axes = [];
				for (var f = 0; f < b.length; f++) {
					var g = c.create();
					c.copy(g, b[f]);
					this.vertices.push(g)
				}
				if (d) for (f = 0; f < d.length; f++) g = c.create(),
				c.copy(g, d[f]),
				this.axes.push(g);
				else for (f = 0; f < b.length; f++) {
					var g = b[f],
					h = b[(f + 1) % b.length],
					k = c.create();
					c.sub(k, h, g);
					c.rotate90cw(k, k);
					c.normalize(k, k);
					this.axes.push(k)
				}
				this.centerOfMass = c.fromValues(0, 0);
				this.triangles = [];
				this.vertices.length && (this.updateTriangles(), this.updateCenterOfMass());
				this.boundingRadius = 0;
				a.call(this, a.CONVEX);
				this.updateBoundingRadius();
				this.updateArea();
				if (0 > this.area) throw Error("Convex vertices must be given in conter-clockwise winding.");
			}
			var a = f("./Shape"),
			c = f("../math/vec2"),
			h = f("../math/polyk");
			f("poly-decomp");
			g.exports = b;
			b.prototype = new a;
			b.prototype.constructor = b;
			var p = c.create(),
			v = c.create();
			b.prototype.projectOntoLocalAxis = function(a, b) {
				var d = null,
				f = null,
				g;
				a = p;
				for (var h = 0; h < this.vertices.length; h++) {
					g = this.vertices[h];
					g = c.dot(g, a);
					if (null === d || g > d) d = g;
					if (null === f || g < f) f = g
				}
				f > d && (h = f, f = d, d = h);
				c.set(b, f, d)
			};
			b.prototype.projectOntoWorldAxis = function(a, b, d, f) {
				var g = v;
				this.projectOntoLocalAxis(a, f);
				0 !== d ? c.rotate(g, a, d) : g = a;
				a = c.dot(b, g);
				c.set(f, f[0] + a, f[1] + a)
			};
			b.prototype.updateTriangles = function() {
				this.triangles.length = 0;
				for (var a = [], b = 0; b < this.vertices.length; b++) {
					var c = this.vertices[b];
					a.push(c[0], c[1])
				}
				a = h.Triangulate(a);
				for (b = 0; b < a.length; b += 3) this.triangles.push([a[b], a[b + 1], a[b + 2]])
			};
			var u = c.create(),
			n = c.create(),
			k = c.create(),
			m = c.create(),
			l = c.create();
			c.create();
			c.create();
			c.create();
			c.create();
			b.prototype.updateCenterOfMass = function() {
				var a = this.triangles,
				d = this.vertices,
				f = this.centerOfMass,
				g = k,
				h = m,
				p = l;
				c.set(f, 0, 0);
				for (var v = 0,
				w = 0; w !== a.length; w++) p = a[w],
				g = d[p[0]],
				h = d[p[1]],
				p = d[p[2]],
				c.centroid(u, g, h, p),
				g = b.triangleArea(g, h, p),
				v += g,
				c.scale(n, u, g),
				c.add(f, f, n);
				c.scale(f, f, 1 / v)
			};
			b.prototype.computeMomentOfInertia = function(a) {
				for (var b = 0,
				d = 0,
				f = this.vertices.length,
				g = f - 1,
				h = 0; h < f; g = h, h++) var k = this.vertices[g],
				p = this.vertices[h],
				g = Math.abs(c.crossLength(k, p)),
				k = c.dot(p, p) + c.dot(p, k) + c.dot(k, k),
				b = b + g * k,
				d = d + g;
				return a / 6 * (b / d)
			};
			b.prototype.updateBoundingRadius = function() {
				for (var a = this.vertices,
				b = 0,
				d = 0; d !== a.length; d++) {
					var f = c.squaredLength(a[d]);
					f > b && (b = f)
				}
				this.boundingRadius = Math.sqrt(b)
			};
			b.triangleArea = function(a, b, c) {
				return 0.5 * ((b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1]))
			};
			b.prototype.updateArea = function() {
				this.updateTriangles();
				this.area = 0;
				for (var a = this.triangles,
				c = this.vertices,
				d = 0; d !== a.length; d++) {
					var f = a[d],
					f = b.triangleArea(c[f[0]], c[f[1]], c[f[2]]);
					this.area += f
				}
			};
			b.prototype.computeAABB = function(a, b, c) {
				a.setFromPoints(this.vertices, b, c, 0)
			}
		},
		{
			"../math/polyk": 30,
			"../math/vec2": 31,
			"./Shape": 45,
			"poly-decomp": 5
		}],
		40 : [function(f, g, d) {
			function b(b, d) {
				d = c.defaults(d, {
					maxValue: null,
					minValue: null,
					elementWidth: 0.1
				});
				if (null === d.minValue || null === d.maxValue) {
					d.maxValue = b[0];
					d.minValue = b[0];
					for (var f = 0; f !== b.length; f++) {
						var g = b[f];
						g > d.maxValue && (d.maxValue = g);
						g < d.minValue && (d.minValue = g)
					}
				}
				this.data = b;
				this.maxValue = d.maxValue;
				this.minValue = d.minValue;
				this.elementWidth = d.elementWidth;
				a.call(this, a.HEIGHTFIELD)
			}
			var a = f("./Shape");
			f("../math/vec2");
			var c = f("../utils/Utils");
			g.exports = b;
			b.prototype = new a;
			b.prototype.constructor = b;
			b.prototype.computeMomentOfInertia = function(a) {
				return Number.MAX_VALUE
			};
			b.prototype.updateBoundingRadius = function() {
				this.boundingRadius = Number.MAX_VALUE
			};
			b.prototype.updateArea = function() {
				for (var a = this.data,
				b = 0,
				c = 0; c < a.length - 1; c++) b += (a[c] + a[c + 1]) / 2 * this.elementWidth;
				this.area = b
			};
			b.prototype.computeAABB = function(a, b, c) {
				a.upperBound[0] = this.elementWidth * this.data.length + b[0];
				a.upperBound[1] = this.maxValue + b[1];
				a.lowerBound[0] = b[0];
				a.lowerBound[1] = -Number.MAX_VALUE
			}
		},
		{
			"../math/vec2": 31,
			"../utils/Utils": 50,
			"./Shape": 45
		}],
		41 : [function(f, g, d) {
			function b(b) {
				this.length = b || 1;
				a.call(this, a.LINE)
			}
			var a = f("./Shape"),
			c = f("../math/vec2");
			g.exports = b;
			b.prototype = new a;
			b.prototype.constructor = b;
			b.prototype.computeMomentOfInertia = function(a) {
				return a * Math.pow(this.length, 2) / 12
			};
			b.prototype.updateBoundingRadius = function() {
				this.boundingRadius = this.length / 2
			};
			var h = [c.create(), c.create()];
			b.prototype.computeAABB = function(a, b, d) {
				var f = this.length / 2;
				c.set(h[0], -f, 0);
				c.set(h[1], f, 0);
				a.setFromPoints(h, b, d, 0)
			}
		},
		{
			"../math/vec2": 31,
			"./Shape": 45
		}],
		42 : [function(f, g, d) {
			function b() {
				a.call(this, a.PARTICLE)
			}
			var a = f("./Shape"),
			c = f("../math/vec2");
			g.exports = b;
			b.prototype = new a;
			b.prototype.constructor = b;
			b.prototype.computeMomentOfInertia = function(a) {
				return 0
			};
			b.prototype.updateBoundingRadius = function() {
				this.boundingRadius = 0
			};
			b.prototype.computeAABB = function(a, b, d) {
				c.copy(a.lowerBound, b);
				c.copy(a.upperBound, b)
			}
		},
		{
			"../math/vec2": 31,
			"./Shape": 45
		}],
		43 : [function(f, g, d) {
			function b() {
				a.call(this, a.PLANE)
			}
			var a = f("./Shape"),
			c = f("../math/vec2");
			f("../utils/Utils");
			g.exports = b;
			b.prototype = new a;
			b.prototype.constructor = b;
			b.prototype.computeMomentOfInertia = function(a) {
				return 0
			};
			b.prototype.updateBoundingRadius = function() {
				this.boundingRadius = Number.MAX_VALUE
			};
			b.prototype.computeAABB = function(a, b, d) {
				var f = 0,
				g = c.set;
				"number" === typeof d && (f = d % (2 * Math.PI));
				0 === f ? (g(a.lowerBound, -Number.MAX_VALUE, -Number.MAX_VALUE), g(a.upperBound, Number.MAX_VALUE, 0)) : f === Math.PI / 2 ? (g(a.lowerBound, 0, -Number.MAX_VALUE), g(a.upperBound, Number.MAX_VALUE, Number.MAX_VALUE)) : f === Math.PI ? (g(a.lowerBound, -Number.MAX_VALUE, 0), g(a.upperBound, Number.MAX_VALUE, Number.MAX_VALUE)) : f === 3 * Math.PI / 2 ? (g(a.lowerBound, -Number.MAX_VALUE, -Number.MAX_VALUE), g(a.upperBound, 0, Number.MAX_VALUE)) : (g(a.lowerBound, -Number.MAX_VALUE, -Number.MAX_VALUE), g(a.upperBound, Number.MAX_VALUE, Number.MAX_VALUE));
				c.add(a.lowerBound, a.lowerBound, b);
				c.add(a.upperBound, a.upperBound, b)
			};
			b.prototype.updateArea = function() {
				this.area = Number.MAX_VALUE
			}
		},
		{
			"../math/vec2": 31,
			"../utils/Utils": 50,
			"./Shape": 45
		}],
		44 : [function(f, g, d) {
			function b(b, d) {
				this.width = b || 1;
				this.height = d || 1;
				var f = [a.fromValues( - b / 2, -d / 2), a.fromValues(b / 2, -d / 2), a.fromValues(b / 2, d / 2), a.fromValues( - b / 2, d / 2)],
				g = [a.fromValues(1, 0), a.fromValues(0, 1)];
				h.call(this, f, g);
				this.type = c.RECTANGLE
			}
			var a = f("../math/vec2"),
			c = f("./Shape"),
			h = f("./Convex");
			g.exports = b;
			b.prototype = new h([]);
			b.prototype.constructor = b;
			b.prototype.computeMomentOfInertia = function(a) {
				var b = this.width,
				c = this.height;
				return a * (c * c + b * b) / 12
			};
			b.prototype.updateBoundingRadius = function() {
				var a = this.width,
				b = this.height;
				this.boundingRadius = Math.sqrt(a * a + b * b) / 2
			};
			a.create();
			a.create();
			a.create();
			a.create();
			b.prototype.computeAABB = function(a, b, c) {
				a.setFromPoints(this.vertices, b, c, 0)
			};
			b.prototype.updateArea = function() {
				this.area = this.width * this.height
			}
		},
		{
			"../math/vec2": 31,
			"./Convex": 39,
			"./Shape": 45
		}],
		45 : [function(f, g, d) {
			function b(a) {
				this.type = a;
				this.id = b.idCounter++;
				this.boundingRadius = 0;
				this.collisionGroup = 1;
				this.collisionResponse = !0;
				this.collisionMask = 1;
				a && this.updateBoundingRadius();
				this.material = null;
				this.area = 0;
				this.sensor = !1;
				this.updateArea()
			}
			g.exports = b;
			b.idCounter = 0;
			b.CIRCLE = 1;
			b.PARTICLE = 2;
			b.PLANE = 4;
			b.CONVEX = 8;
			b.LINE = 16;
			b.RECTANGLE = 32;
			b.CAPSULE = 64;
			b.HEIGHTFIELD = 128;
			b.prototype.computeMomentOfInertia = function(a) {
				throw Error("Shape.computeMomentOfInertia is not implemented in this Shape...");
			};
			b.prototype.updateBoundingRadius = function() {
				throw Error("Shape.updateBoundingRadius is not implemented in this Shape...");
			};
			b.prototype.updateArea = function() {};
			b.prototype.computeAABB = function(a, b, d) {}
		},
		{}],
		46 : [function(f, g, d) {
			function b(b) {
				a.call(this, b, a.GS);
				b = b || {};
				this.iterations = b.iterations || 10;
				this.tolerance = b.tolerance || 1E-10;
				this.arrayStep = 30;
				this.lambda = new c.ARRAY_TYPE(this.arrayStep);
				this.Bs = new c.ARRAY_TYPE(this.arrayStep);
				this.invCs = new c.ARRAY_TYPE(this.arrayStep);
				this.useZeroRHS = !1;
				this.usedIterations = this.frictionIterations = 0
			}
			f("../math/vec2");
			var a = f("./Solver"),
			c = f("../utils/Utils"),
			h = f("../equations/FrictionEquation");
			g.exports = b;
			b.prototype = new a;
			b.prototype.constructor = b;
			b.prototype.solve = function(a, d) {
				this.sortEquations();
				var f = 0,
				g = this.iterations,
				k = this.frictionIterations,
				m = this.equations,
				l = m.length,
				q = Math.pow(this.tolerance * l, 2),
				t = d.bodies,
				s = d.bodies.length,
				B = this.useZeroRHS,
				z = this.lambda;
				this.usedIterations = 0;
				if (l) for (var r = 0; r !== s; r++) f = t[r],
				f.updateSolveMassProperties();
				z.length < l && (z = this.lambda = new c.ARRAY_TYPE(l + this.arrayStep), this.Bs = new c.ARRAY_TYPE(l + this.arrayStep), this.invCs = new c.ARRAY_TYPE(l + this.arrayStep));
				for (var y = z.length; y--;) z[y] = 0;
				for (var y = this.invCs,
				w = this.Bs,
				z = this.lambda,
				r = 0; r !== m.length; r++) {
					var A = m[r];
					if (A.timeStep !== a || A.needsUpdate) A.timeStep = a,
					A.update();
					w[r] = A.computeB(A.a, A.b, a);
					y[r] = A.computeInvC(A.epsilon)
				}
				var x;
				if (0 !== l) {
					for (r = 0; r !== s; r++) f = t[r],
					f.resetConstraintVelocity();
					if (k) {
						for (f = 0; f !== k; f++) {
							for (r = x = 0; r !== l; r++) A = m[r],
							A = b.iterateEquation(r, A, A.epsilon, w, y, z, B, a, f),
							x += Math.abs(A);
							this.usedIterations++;
							if (x * x <= q) break
						}
						b.updateMultipliers(m, z, 1 / a);
						for (r = 0; r !== l; r++) if (k = m[r], k instanceof h) {
							for (A = f = 0; A !== k.contactEquations.length; A++) f += k.contactEquations[A].multiplier;
							f *= k.frictionCoefficient / k.contactEquations.length;
							k.maxForce = f;
							k.minForce = -f
						}
					}
					for (f = 0; f !== g; f++) {
						for (r = x = 0; r !== l; r++) A = m[r],
						A = b.iterateEquation(r, A, A.epsilon, w, y, z, B, a, f),
						x += Math.abs(A);
						this.usedIterations++;
						if (x * x <= q) break
					}
					for (r = 0; r !== s; r++) t[r].addConstraintVelocity();
					b.updateMultipliers(m, z, 1 / a)
				}
			};
			b.updateMultipliers = function(a, b, c) {
				for (var d = a.length; d--;) a[d].multiplier = b[d] * c
			};
			b.iterateEquation = function(a, b, c, d, f, g, h, q, t) {
				var s = d[a],
				B = f[a];
				f = g[a];
				var z = b.computeGWlambda();
				d = b.maxForce;
				t = b.minForce;
				h && (s = 0);
				c = B * (s - z - c * f);
				h = f + c;
				h < t * q ? c = t * q - f: h > d * q && (c = d * q - f);
				g[a] += c;
				b.addToWlambda(c);
				return c
			}
		},
		{
			"../equations/FrictionEquation": 24,
			"../math/vec2": 31,
			"../utils/Utils": 50,
			"./Solver": 47
		}],
		47 : [function(f, g, d) {
			function b(b, c) {
				b = b || {};
				a.call(this);
				this.type = c;
				this.equations = [];
				this.equationSortFunction = b.equationSortFunction || !1
			}
			f("../utils/Utils");
			var a = f("../events/EventEmitter");
			g.exports = b;
			b.prototype = new a;
			b.prototype.constructor = b;
			b.prototype.solve = function(a, b) {
				throw Error("Solver.solve should be implemented by subclasses!");
			};
			var c = {
				bodies: []
			};
			b.prototype.solveIsland = function(a, b) {
				this.removeAllEquations();
				b.equations.length && (this.addEquations(b.equations), c.bodies.length = 0, b.getBodies(c.bodies), c.bodies.length && this.solve(a, c))
			};
			b.prototype.sortEquations = function() {
				this.equationSortFunction && this.equations.sort(this.equationSortFunction)
			};
			b.prototype.addEquation = function(a) {
				a.enabled && this.equations.push(a)
			};
			b.prototype.addEquations = function(a) {
				for (var b = 0,
				c = a.length; b !== c; b++) {
					var d = a[b];
					d.enabled && this.equations.push(d)
				}
			};
			b.prototype.removeEquation = function(a) {
				a = this.equations.indexOf(a); - 1 !== a && this.equations.splice(a, 1)
			};
			b.prototype.removeAllEquations = function() {
				this.equations.length = 0
			};
			b.GS = 1;
			b.ISLAND = 2
		},
		{
			"../events/EventEmitter": 27,
			"../utils/Utils": 50
		}],
		48 : [function(f, g, d) {
			function b() {
				this.overlappingShapesLastState = new c;
				this.overlappingShapesCurrentState = new c;
				this.recordPool = [];
				this.tmpDict = new c;
				this.tmpArray1 = []
			}

			function a(a, b, c, d) {
				this.shapeA = b;
				this.shapeB = d;
				this.bodyA = a;
				this.bodyB = c
			}
			var c = f("./TupleDictionary");
			f("./Utils");
			g.exports = b;
			b.prototype.tick = function() {
				for (var a = this.overlappingShapesLastState,
				b = this.overlappingShapesCurrentState,
				c = a.keys.length; c--;) {
					var d = a.keys[c],
					f = a.getByKey(d),
					d = b.getByKey(d);
					f && !d && this.recordPool.push(f)
				}
				a.reset();
				a.copy(b);
				b.reset()
			};
			b.prototype.setOverlapping = function(b, c, d, f) {
				var g = this.overlappingShapesCurrentState;
				if (!g.get(c.id, f.id)) {
					var k;
					this.recordPool.length ? (k = this.recordPool.pop(), k.set(b, c, d, f)) : k = new a(b, c, d, f);
					g.set(c.id, f.id, k)
				}
			};
			b.prototype.getNewOverlaps = function(a) {
				return this.getDiff(this.overlappingShapesLastState, this.overlappingShapesCurrentState, a)
			};
			b.prototype.getEndOverlaps = function(a) {
				return this.getDiff(this.overlappingShapesCurrentState, this.overlappingShapesLastState, a)
			};
			b.prototype.bodiesAreOverlapping = function(a, b) {
				for (var c = this.overlappingShapesCurrentState,
				d = c.keys.length; d--;) {
					var f = c.data[c.keys[d]];
					if (f.bodyA === a && f.bodyB === b || f.bodyA === b && f.bodyB === a) return ! 0
				}
				return ! 1
			};
			b.prototype.getDiff = function(a, b, c) {
				c = c || [];
				c.length = 0;
				for (var d = b.keys.length; d--;) {
					var f = b.keys[d],
					g = b.data[f];
					if (!g) throw Error("Key " + f + " had no data!");
					a.data[f] || c.push(g)
				}
				return c
			};
			b.prototype.isNewOverlap = function(a, b) {
				var c = a.id | 0,
				d = b.id | 0,
				f = this.overlappingShapesCurrentState;
				return ! this.overlappingShapesLastState.get(c, d) && !!f.get(c, d)
			};
			b.prototype.getNewBodyOverlaps = function(a) {
				this.tmpArray1.length = 0;
				var b = this.getNewOverlaps(this.tmpArray1);
				return this.getBodyDiff(b, a)
			};
			b.prototype.getEndBodyOverlaps = function(a) {
				this.tmpArray1.length = 0;
				var b = this.getEndOverlaps(this.tmpArray1);
				return this.getBodyDiff(b, a)
			};
			b.prototype.getBodyDiff = function(a, b) {
				b = b || [];
				for (var c = this.tmpDict,
				d = a.length; d--;) {
					var f = a[d];
					c.set(f.bodyA.id | 0, f.bodyB.id | 0, f)
				}
				for (d = c.keys.length; d--;)(f = c.getByKey(c.keys[d])) && b.push(f.bodyA, f.bodyB);
				c.reset();
				return b
			};
			a.prototype.set = function(b, c, d, f) {
				a.call(this, b, c, d, f)
			}
		},
		{
			"./TupleDictionary": 49,
			"./Utils": 50
		}],
		49 : [function(f, g, d) {
			function b() {
				this.data = {};
				this.keys = []
			}
			var a = f("./Utils");
			g.exports = b;
			b.prototype.getKey = function(a, b) {
				a |= 0;
				b |= 0;
				return (a | 0) === (b | 0) ? -1 : ((a | 0) > (b | 0) ? a << 16 | b & 65535 : b << 16 | a & 65535) | 0
			};
			b.prototype.getByKey = function(a) {
				return this.data[a | 0]
			};
			b.prototype.get = function(a, b) {
				return this.data[this.getKey(a, b)]
			};
			b.prototype.set = function(a, b, d) {
				if (!d) throw Error("No data!");
				a = this.getKey(a, b);
				this.data[a] || this.keys.push(a);
				this.data[a] = d;
				return a
			};
			b.prototype.reset = function() {
				for (var a = this.data,
				b = this.keys,
				d = b.length; d--;) delete a[b[d]];
				b.length = 0
			};
			b.prototype.copy = function(b) {
				this.reset();
				a.appendArray(this.keys, b.keys);
				for (var d = b.keys.length; d--;) {
					var f = b.keys[d];
					this.data[f] = b.data[f]
				}
			}
		},
		{
			"./Utils": 50
		}],
		50 : [function(f, g, d) {
			function b() {}
			g.exports = b;
			b.appendArray = function(a, b) {
				if (15E4 > b.length) a.push.apply(a, b);
				else for (var d = 0,
				f = b.length; d !== f; ++d) a.push(b[d])
			};
			b.splice = function(a, b, d) {
				d = d || 1;
				for (var f = a.length - d; b < f; b++) a[b] = a[b + d];
				a.length = f
			};
			b.ARRAY_TYPE = "undefined" !== typeof P2_ARRAY_TYPE ? P2_ARRAY_TYPE: "undefined" !== typeof Float32Array ? Float32Array: Array;
			b.extend = function(a, b) {
				for (var d in b) a[d] = b[d]
			};
			b.defaults = function(a, b) {
				a = a || {};
				for (var d in b) d in a || (a[d] = b[d]);
				return a
			}
		},
		{}],
		51 : [function(f, g, d) {
			function b() {
				this.equations = [];
				this.bodies = []
			}
			var a = f("../objects/Body");
			g.exports = b;
			b.prototype.reset = function() {
				this.equations.length = this.bodies.length = 0
			};
			var c = [];
			b.prototype.getBodies = function(a) {
				a = a || [];
				for (var b = this.equations,
				d = c.length = 0; d !== b.length; d++) {
					var f = b[d]; - 1 === c.indexOf(f.bodyA.id) && (a.push(f.bodyA), c.push(f.bodyA.id)); - 1 === c.indexOf(f.bodyB.id) && (a.push(f.bodyB), c.push(f.bodyB.id))
				}
				return a
			};
			b.prototype.wantsToSleep = function() {
				for (var b = 0; b < this.bodies.length; b++) {
					var c = this.bodies[b];
					if (c.type === a.DYNAMIC && !c.wantsToSleep) return ! 1
				}
				return ! 0
			};
			b.prototype.sleep = function() {
				for (var a = 0; a < this.bodies.length; a++) this.bodies[a].sleep();
				return ! 0
			}
		},
		{
			"../objects/Body": 32
		}],
		52 : [function(f, g, d) {
			function b(a) {
				this._nodePool = [];
				this._islandPool = [];
				this.equations = [];
				this.islands = [];
				this.nodes = [];
				this.queue = []
			}
			f("../math/vec2");
			var a = f("./Island"),
			c = f("./IslandNode"),
			h = f("../objects/Body");
			g.exports = b;
			b.getUnvisitedNode = function(a) {
				for (var b = a.length,
				c = 0; c !== b; c++) {
					var d = a[c];
					if (!d.visited && d.body.type === h.DYNAMIC) return d
				}
				return ! 1
			};
			b.prototype.visit = function(a, b, c) {
				b.push(a.body);
				b = a.equations.length;
				for (var d = 0; d !== b; d++) {
					var f = a.equations[d]; - 1 === c.indexOf(f) && c.push(f)
				}
			};
			b.prototype.bfs = function(a, c, d) {
				var f = this.queue;
				f.length = 0;
				f.push(a);
				a.visited = !0;
				for (this.visit(a, c, d); f.length;) {
					a = f.pop();
					for (var g; g = b.getUnvisitedNode(a.neighbors);) g.visited = !0,
					this.visit(g, c, d),
					g.body.type === h.DYNAMIC && f.push(g)
				}
			};
			b.prototype.split = function(d) {
				var f = d.bodies;
				d = this.nodes;
				for (var g = this.equations; d.length;) this._nodePool.push(d.pop());
				for (var h = 0; h !== f.length; h++) if (this._nodePool.length) {
					var k = this._nodePool.pop();
					k.reset();
					k.body = f[h];
					d.push(k)
				} else d.push(new c(f[h]));
				for (k = 0; k !== g.length; k++) {
					var m = g[k],
					h = f.indexOf(m.bodyA),
					l = f.indexOf(m.bodyB),
					h = d[h],
					l = d[l];
					h.neighbors.push(l);
					l.neighbors.push(h);
					h.equations.push(m);
					l.equations.push(m)
				}
				for (f = this.islands; f.length;) g = f.pop(),
				g.reset(),
				this._islandPool.push(g);
				for (; k = b.getUnvisitedNode(d);) g = this._islandPool.length ? this._islandPool.pop() : new a,
				this.bfs(k, g.bodies, g.equations),
				f.push(g);
				return f
			}
		},
		{
			"../math/vec2": 31,
			"../objects/Body": 32,
			"./Island": 51,
			"./IslandNode": 53
		}],
		53 : [function(f, g, d) {
			function b(a) {
				this.body = a;
				this.neighbors = [];
				this.equations = [];
				this.visited = !1
			}
			g.exports = b;
			b.prototype.reset = function() {
				this.equations.length = 0;
				this.neighbors.length = 0;
				this.visited = !1;
				this.body = null
			}
		},
		{}],
		54 : [function(f, g, d) {
			function b(c) {
				m.apply(this);
				c = c || {};
				this.springs = [];
				this.bodies = [];
				this.disabledBodyCollisionPairs = [];
				this.solver = c.solver || new a;
				this.narrowphase = new B(this);
				this.islandManager = new y;
				this.gravity = h.fromValues(0, -9.78);
				c.gravity && h.copy(this.gravity, c.gravity);
				this.frictionGravity = h.length(this.gravity) || 10;
				this.useFrictionGravityOnZeroGravity = this.useWorldGravityAsFrictionGravity = !0;
				this.doProfiling = c.doProfiling || !1;
				this.lastStepTime = 0;
				this.broadphase = c.broadphase || new s;
				this.broadphase.setWorld(this);
				this.constraints = [];
				this.defaultMaterial = new q;
				this.defaultContactMaterial = new t(this.defaultMaterial, this.defaultMaterial);
				this.lastTimeStep = 1 / 60;
				this.solveConstraints = this.applyGravity = this.applyDamping = this.applySpringForces = !0;
				this.contactMaterials = [];
				this.time = 0;
				this.stepping = !1;
				this.bodiesToBeRemoved = [];
				this.fixedStepTime = 0;
				this.islandSplit = "undefined" !== typeof c.islandSplit ? !!c.islandSplit: !1;
				this.emitImpactEvent = !0;
				this._bodyIdCounter = this._constraintIdCounter = 0;
				this.postStepEvent = {
					type: "postStep"
				};
				this.addBodyEvent = {
					type: "addBody",
					body: null
				};
				this.removeBodyEvent = {
					type: "removeBody",
					body: null
				};
				this.addSpringEvent = {
					type: "addSpring",
					spring: null
				};
				this.impactEvent = {
					type: "impact",
					bodyA: null,
					bodyB: null,
					shapeA: null,
					shapeB: null,
					contactEquation: null
				};
				this.postBroadphaseEvent = {
					type: "postBroadphase",
					pairs: null
				};
				this.sleepMode = b.NO_SLEEPING;
				this.beginContactEvent = {
					type: "beginContact",
					shapeA: null,
					shapeB: null,
					bodyA: null,
					bodyB: null,
					contactEquations: []
				};
				this.endContactEvent = {
					type: "endContact",
					shapeA: null,
					shapeB: null,
					bodyA: null,
					bodyB: null
				};
				this.preSolveEvent = {
					type: "preSolve",
					contactEquations: null,
					frictionEquations: null
				};
				this.overlappingShapesLastState = {
					keys: []
				};
				this.overlappingShapesCurrentState = {
					keys: []
				};
				this.overlapKeeper = new r
			}
			var a = f("../solver/GSSolver");
			f("../solver/Solver");
			f("../collision/NaiveBroadphase");
			var c = f("../collision/Ray"),
			h = f("../math/vec2"),
			p = f("../shapes/Circle");
			f("../shapes/Rectangle");
			var v = f("../shapes/Convex");
			f("../shapes/Line");
			var u = f("../shapes/Plane"),
			n = f("../shapes/Capsule"),
			k = f("../shapes/Particle"),
			m = f("../events/EventEmitter"),
			l = f("../objects/Body");
			f("../shapes/Shape");
			f("../objects/LinearSpring");
			var q = f("../material/Material"),
			t = f("../material/ContactMaterial");
			f("../constraints/DistanceConstraint");
			f("../constraints/Constraint");
			f("../constraints/LockConstraint");
			f("../constraints/RevoluteConstraint");
			f("../constraints/PrismaticConstraint");
			f("../constraints/GearConstraint");
			f("../../package.json");
			f("../collision/Broadphase");
			var s = f("../collision/SAPBroadphase"),
			B = f("../collision/Narrowphase"),
			z = f("../utils/Utils"),
			r = f("../utils/OverlapKeeper"),
			y = f("./IslandManager");
			f("../objects/RotationalSpring");
			g.exports = b;
			"undefined" === typeof performance && (performance = {});
			if (!performance.now) {
				var w = Date.now();
				performance.timing && performance.timing.navigationStart && (w = performance.timing.navigationStart);
				performance.now = function() {
					return Date.now() - w
				}
			}
			b.prototype = Object(m.prototype);
			b.prototype.constructor = b;
			b.NO_SLEEPING = 1;
			b.BODY_SLEEPING = 2;
			b.ISLAND_SLEEPING = 4;
			b.prototype.addConstraint = function(a) {
				this.constraints.push(a)
			};
			b.prototype.addContactMaterial = function(a) {
				this.contactMaterials.push(a)
			};
			b.prototype.removeContactMaterial = function(a) {
				a = this.contactMaterials.indexOf(a); - 1 !== a && z.splice(this.contactMaterials, a, 1)
			};
			b.prototype.getContactMaterial = function(a, b) {
				for (var c = this.contactMaterials,
				d = 0,
				f = c.length; d !== f; d++) {
					var g = c[d];
					if (g.materialA.id === a.id && g.materialB.id === b.id || g.materialA.id === b.id && g.materialB.id === a.id) return g
				}
				return ! 1
			};
			b.prototype.removeConstraint = function(a) {
				a = this.constraints.indexOf(a); - 1 !== a && z.splice(this.constraints, a, 1)
			};
			h.create();
			h.create();
			h.create();
			h.create();
			h.create();
			h.create();
			var A = h.create(),
			x = h.fromValues(0, 0),
			D = h.fromValues(0, 0);
			h.fromValues(0, 0);
			var C = h.fromValues(0, 0);
			b.prototype.step = function(a, b, c) {
				c = c || 10;
				b = b || 0;
				if (0 === b) this.internalStep(a),
				this.time += a;
				else {
					var d = Math.floor((this.time + b) / a) - Math.floor(this.time / a),
					d = Math.min(d, c);
					c = performance.now();
					for (var f = 0; f !== d && !(this.internalStep(a), performance.now() - c > 1E3 * a); f++);
					this.time += b;
					a = this.time % a / a;
					for (b = 0; b !== this.bodies.length; b++) d = this.bodies[b],
					d.type !== l.STATIC && d.sleepState !== l.SLEEPING ? (h.sub(C, d.position, d.previousPosition), h.scale(C, C, a), h.add(d.interpolatedPosition, d.position, C), d.interpolatedAngle = d.angle + (d.angle - d.previousAngle) * a) : (h.copy(d.interpolatedPosition, d.position), d.interpolatedAngle = d.angle)
				}
			};
			var F = [];
			b.prototype.internalStep = function(a) {
				this.stepping = !0;
				var c = this.doProfiling,
				d = this.springs.length,
				f = this.springs,
				g = this.bodies,
				k = this.gravity,
				m = this.solver,
				n = this.bodies.length,
				p = this.broadphase,
				q = this.narrowphase,
				s = this.constraints,
				t, v = h.add,
				u = this.islandManager;
				this.overlapKeeper.tick();
				this.lastTimeStep = a;
				c && (t = performance.now());
				if (this.useWorldGravityAsFrictionGravity) {
					var r = h.length(this.gravity);
					0 === r && this.useFrictionGravityOnZeroGravity || (this.frictionGravity = r)
				}
				if (this.applyGravity) for (r = 0; r !== n; r++) {
					var w = g[r],
					x = w.force;
					w.type === l.DYNAMIC && w.sleepState !== l.SLEEPING && (h.scale(A, k, w.mass * w.gravityScale), v(x, x, A))
				}
				if (this.applySpringForces) for (r = 0; r !== d; r++) f[r].applyForce();
				if (this.applyDamping) for (r = 0; r !== n; r++) w = g[r],
				w.type === l.DYNAMIC && w.applyDamping(a);
				d = p.getCollisionPairs(this);
				k = this.disabledBodyCollisionPairs;
				for (r = k.length - 2; 0 <= r; r -= 2) for (f = d.length - 2; 0 <= f; f -= 2)(k[r] === d[f] && k[r + 1] === d[f + 1] || k[r + 1] === d[f] && k[r] === d[f + 1]) && d.splice(f, 2);
				k = s.length;
				for (r = 0; r !== k; r++) if (p = s[r], !p.collideConnected) for (f = d.length - 2; 0 <= f; f -= 2)(p.bodyA === d[f] && p.bodyB === d[f + 1] || p.bodyB === d[f] && p.bodyA === d[f + 1]) && d.splice(f, 2);
				this.postBroadphaseEvent.pairs = d;
				this.emit(this.postBroadphaseEvent);
				q.reset(this);
				r = 0;
				for (k = d.length; r !== k; r += 2) for (p = d[r], v = d[r + 1], w = 0, x = p.shapes.length; w !== x; w++) for (var y = p.shapes[w], B = p.shapeOffsets[w], C = p.shapeAngles[w], f = 0, D = v.shapes.length; f !== D; f++) {
					var E = v.shapes[f],
					G = v.shapeOffsets[f],
					H = v.shapeAngles[f],
					L = this.defaultContactMaterial;
					if (y.material && E.material) {
						var N = this.getContactMaterial(y.material, E.material);
						N && (L = N)
					}
					this.runNarrowphase(q, p, y, B, C, v, E, G, H, L, this.frictionGravity)
				}
				for (r = 0; r !== n; r++) d = g[r],
				d._wakeUpAfterNarrowphase && (d.wakeUp(), d._wakeUpAfterNarrowphase = !1);
				if (this.has("endContact")) for (this.overlapKeeper.getEndOverlaps(F), r = this.endContactEvent, f = F.length; f--;) d = F[f],
				r.shapeA = d.shapeA,
				r.shapeB = d.shapeB,
				r.bodyA = d.bodyA,
				r.bodyB = d.bodyB,
				this.emit(r);
				r = this.preSolveEvent;
				r.contactEquations = q.contactEquations;
				r.frictionEquations = q.frictionEquations;
				this.emit(r);
				k = s.length;
				for (r = 0; r !== k; r++) s[r].update();
				if (q.contactEquations.length || q.frictionEquations.length || s.length) if (this.islandSplit) {
					u.equations.length = 0;
					z.appendArray(u.equations, q.contactEquations);
					z.appendArray(u.equations, q.frictionEquations);
					for (r = 0; r !== k; r++) z.appendArray(u.equations, s[r].equations);
					u.split(this);
					for (r = 0; r !== u.islands.length; r++) s = u.islands[r],
					s.equations.length && m.solveIsland(a, s)
				} else {
					m.addEquations(q.contactEquations);
					m.addEquations(q.frictionEquations);
					for (r = 0; r !== k; r++) m.addEquations(s[r].equations);
					this.solveConstraints && m.solve(a, this);
					m.removeAllEquations()
				}
				for (r = 0; r !== n; r++) d = g[r],
				d.sleepState !== l.SLEEPING && d.type !== l.STATIC && d.integrate(a);
				for (r = 0; r !== n; r++) g[r].setZeroForce();
				c && (c = performance.now(), this.lastStepTime = c - t);
				if (this.emitImpactEvent && this.has("impact")) for (t = this.impactEvent, r = 0; r !== q.contactEquations.length; r++) c = q.contactEquations[r],
				c.firstImpact && (t.bodyA = c.bodyA, t.bodyB = c.bodyB, t.shapeA = c.shapeA, t.shapeB = c.shapeB, t.contactEquation = c, this.emit(t));
				if (this.sleepMode === b.BODY_SLEEPING) for (r = 0; r !== n; r++) g[r].sleepTick(this.time, !1, a);
				else if (this.sleepMode === b.ISLAND_SLEEPING && this.islandSplit) {
					for (r = 0; r !== n; r++) g[r].sleepTick(this.time, !0, a);
					for (r = 0; r < this.islandManager.islands.length; r++) s = this.islandManager.islands[r],
					s.wantsToSleep() && s.sleep()
				}
				this.stepping = !1;
				if (this.bodiesToBeRemoved.length) {
					for (r = 0; r !== this.bodiesToBeRemoved.length; r++) this.removeBody(this.bodiesToBeRemoved[r]);
					this.bodiesToBeRemoved.length = 0
				}
				this.emit(this.postStepEvent)
			};
			b.prototype.runNarrowphase = function(a, b, c, d, f, g, k, m, n, p, q) {
				if (0 !== (c.collisionGroup & k.collisionMask) && 0 !== (k.collisionGroup & c.collisionMask) && (h.rotate(x, d, b.angle), h.rotate(D, m, g.angle), h.add(x, x, b.position), h.add(D, D, g.position), d = f + b.angle, n += g.angle, a.enableFriction = 0 < p.friction, a.frictionCoefficient = p.friction, a.slipForce = p.friction * q * (b.type === l.STATIC || b.type === l.KINEMATIC ? g.mass: g.type === l.STATIC || g.type === l.KINEMATIC ? b.mass: b.mass * g.mass / (b.mass + g.mass)), a.restitution = p.restitution, a.surfaceVelocity = p.surfaceVelocity, a.frictionStiffness = p.frictionStiffness, a.frictionRelaxation = p.frictionRelaxation, a.stiffness = p.stiffness, a.relaxation = p.relaxation, a.contactSkinSize = p.contactSkinSize, a.enabledEquations = b.collisionResponse && g.collisionResponse && c.collisionResponse && k.collisionResponse, q = a[c.type | k.type], p = 0, q && (p = c.sensor || k.sensor, f = a.frictionEquations.length, p = c.type < k.type ? q.call(a, b, c, x, d, g, k, D, n, p) : q.call(a, g, k, D, n, b, c, x, d, p), d = a.frictionEquations.length - f, p))) {
					b.allowSleep && b.type === l.DYNAMIC && b.sleepState === l.SLEEPING && g.sleepState === l.AWAKE && g.type !== l.STATIC && (q = h.squaredLength(g.velocity) + Math.pow(g.angularVelocity, 2), n = Math.pow(g.sleepSpeedLimit, 2), q >= 2 * n && (b._wakeUpAfterNarrowphase = !0));
					g.allowSleep && g.type === l.DYNAMIC && g.sleepState === l.SLEEPING && b.sleepState === l.AWAKE && b.type !== l.STATIC && (q = h.squaredLength(b.velocity) + Math.pow(b.angularVelocity, 2), n = Math.pow(b.sleepSpeedLimit, 2), q >= 2 * n && (g._wakeUpAfterNarrowphase = !0));
					this.overlapKeeper.setOverlapping(b, c, g, k);
					if (this.has("beginContact") && this.overlapKeeper.isNewOverlap(c, k)) {
						q = this.beginContactEvent;
						q.shapeA = c;
						q.shapeB = k;
						q.bodyA = b;
						q.bodyB = g;
						q.contactEquations.length = 0;
						if ("number" === typeof p) for (b = a.contactEquations.length - p; b < a.contactEquations.length; b++) q.contactEquations.push(a.contactEquations[b]);
						this.emit(q)
					}
					if ("number" === typeof p && 1 < d) for (b = a.frictionEquations.length - d; b < a.frictionEquations.length; b++) c = a.frictionEquations[b],
					c.setSlipForce(c.getSlipForce() / d)
				}
			};
			b.prototype.addSpring = function(a) {
				this.springs.push(a);
				this.addSpringEvent.spring = a;
				this.emit(this.addSpringEvent)
			};
			b.prototype.removeSpring = function(a) {
				a = this.springs.indexOf(a); - 1 !== a && z.splice(this.springs, a, 1)
			};
			b.prototype.addBody = function(a) { - 1 === this.bodies.indexOf(a) && (this.bodies.push(a), a.world = this, this.addBodyEvent.body = a, this.emit(this.addBodyEvent))
			};
			b.prototype.removeBody = function(a) {
				if (this.stepping) this.bodiesToBeRemoved.push(a);
				else {
					a.world = null;
					var b = this.bodies.indexOf(a); - 1 !== b && (z.splice(this.bodies, b, 1), this.removeBodyEvent.body = a, a.resetConstraintVelocity(), this.emit(this.removeBodyEvent))
				}
			};
			b.prototype.getBodyById = function(a) {
				for (var b = this.bodies,
				c = 0; c < b.length; c++) {
					var d = b[c];
					if (d.id === a) return d
				}
				return ! 1
			};
			b.prototype.disableBodyCollision = function(a, b) {
				this.disabledBodyCollisionPairs.push(a, b)
			};
			b.prototype.enableBodyCollision = function(a, b) {
				for (var c = this.disabledBodyCollisionPairs,
				d = 0; d < c.length; d += 2) if (c[d] === a && c[d + 1] === b || c[d + 1] === a && c[d] === b) {
					c.splice(d, 2);
					break
				}
			};
			b.prototype.clear = function() {
				this.fixedStepTime = this.time = 0;
				this.solver && this.solver.equations.length && this.solver.removeAllEquations();
				for (var a = this.constraints,
				c = a.length - 1; 0 <= c; c--) this.removeConstraint(a[c]);
				a = this.bodies;
				for (c = a.length - 1; 0 <= c; c--) this.removeBody(a[c]);
				a = this.springs;
				for (c = a.length - 1; 0 <= c; c--) this.removeSpring(a[c]);
				a = this.contactMaterials;
				for (c = a.length - 1; 0 <= c; c--) this.removeContactMaterial(a[c]);
				b.apply(this)
			};
			b.prototype.clone = function() {
				var a = new b;
				a.fromJSON(this.toJSON());
				return a
			};
			var E = h.create(),
			G = h.fromValues(0, 0),
			H = h.fromValues(0, 0);
			b.prototype.hitTest = function(a, b, c) {
				c = c || 0;
				var d = new l({
					position: a
				}),
				f = new k;
				d.addShape(f);
				for (var g = this.narrowphase,
				m = [], q = 0, r = b.length; q !== r; q++) for (var s = b[q], t = 0, w = s.shapes.length; t !== w; t++) {
					var x = s.shapes[t],
					y = s.shapeAngles[t] || 0;
					h.rotate(E, s.shapeOffsets[t] || G, s.angle);
					h.add(E, E, s.position);
					y += s.angle; (x instanceof p && g.circleParticle(s, x, E, y, d, f, a, 0, !0) || x instanceof v && g.particleConvex(d, f, a, 0, s, x, E, y, !0) || x instanceof u && g.particlePlane(d, f, a, 0, s, x, E, y, !0) || x instanceof n && g.particleCapsule(d, f, a, 0, s, x, E, y, !0) || x instanceof k && h.squaredLength(h.sub(H, E, a)) < c * c) && m.push(s)
				}
				return m
			};
			b.prototype.setGlobalEquationParameters = function(a) {
				a = a || {};
				for (var b = 0; b !== this.constraints.length; b++) for (var c = this.constraints[b], d = 0; d !== c.equations.length; d++) {
					var f = c.equations[d];
					"undefined" !== typeof a.stiffness && (f.stiffness = a.stiffness);
					"undefined" !== typeof a.relaxation && (f.relaxation = a.relaxation);
					f.needsUpdate = !0
				}
				for (b = 0; b !== this.contactMaterials.length; b++) c = this.contactMaterials[b],
				"undefined" !== typeof a.stiffness && (c.stiffness = a.stiffness, c.frictionStiffness = a.stiffness),
				"undefined" !== typeof a.relaxation && (c.relaxation = a.relaxation, c.frictionRelaxation = a.relaxation);
				c = this.defaultContactMaterial;
				"undefined" !== typeof a.stiffness && (c.stiffness = a.stiffness, c.frictionStiffness = a.stiffness);
				"undefined" !== typeof a.relaxation && (c.relaxation = a.relaxation, c.frictionRelaxation = a.relaxation)
			};
			b.prototype.setGlobalStiffness = function(a) {
				this.setGlobalEquationParameters({
					stiffness: a
				})
			};
			b.prototype.setGlobalRelaxation = function(a) {
				this.setGlobalEquationParameters({
					relaxation: a
				})
			};
			var L = new c;
			b.prototype.raycastAll = function(a, b, d, f) {
				d.mode = c.ALL;
				d.from = a;
				d.to = b;
				d.callback = f;
				return L.intersectWorld(this, d)
			};
			b.prototype.raycastAny = function(a, b, d, f) {
				d.mode = c.ANY;
				d.from = a;
				d.to = b;
				d.result = f;
				return L.intersectWorld(this, d)
			};
			b.prototype.raycastClosest = function(a, b, d, f) {
				d.mode = c.CLOSEST;
				d.from = a;
				d.to = b;
				d.result = f;
				return L.intersectWorld(this, d)
			}
		},
		{
			"../../package.json": 6,
			"../collision/Broadphase": 8,
			"../collision/NaiveBroadphase": 10,
			"../collision/Narrowphase": 11,
			"../collision/Ray": 12,
			"../collision/SAPBroadphase": 14,
			"../constraints/Constraint": 15,
			"../constraints/DistanceConstraint": 16,
			"../constraints/GearConstraint": 17,
			"../constraints/LockConstraint": 18,
			"../constraints/PrismaticConstraint": 19,
			"../constraints/RevoluteConstraint": 20,
			"../events/EventEmitter": 27,
			"../material/ContactMaterial": 28,
			"../material/Material": 29,
			"../math/vec2": 31,
			"../objects/Body": 32,
			"../objects/LinearSpring": 33,
			"../objects/RotationalSpring": 34,
			"../shapes/Capsule": 37,
			"../shapes/Circle": 38,
			"../shapes/Convex": 39,
			"../shapes/Line": 41,
			"../shapes/Particle": 42,
			"../shapes/Plane": 43,
			"../shapes/Rectangle": 44,
			"../shapes/Shape": 45,
			"../solver/GSSolver": 46,
			"../solver/Solver": 47,
			"../utils/OverlapKeeper": 48,
			"../utils/Utils": 50,
			"./IslandManager": 52
		}]
	},
	{},
	[36])(36)
});

